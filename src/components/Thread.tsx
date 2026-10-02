import { useEffect, useRef } from 'react'
import { threadGutters } from './gutters'
import './Thread.css'

/**
 * The Teia thread: a translucent silk ribbon, filled face by face so it reads
 * as one material, with a sheen where it folds and fine strands for texture.
 * hero     – unfurls once on load, then bends locally toward the pointer.
 * hero-m   – the phone hero route, behind the portrait.
 * bridge   – crosses the Big Idea; how far it has crossed follows the scroll.
 * bridge-v – the phone route, across the gap between the stacked statements.
 * Reduced motion: drawn once, complete and still.
 */

type Variant = 'hero' | 'hero-m' | 'bridge' | 'bridge-v'
type Pt = { x: number; y: number }

const SHAPES: Record<Variant, { pts: Pt[]; width: number; twist: number; phase: number; alpha: number }> = {
  hero: {
    pts: [
      { x: 1.04, y: -0.02 },
      { x: 0.62, y: 0.16 },
      { x: 0.82, y: 0.45 },
      { x: 0.4, y: 0.66 },
      { x: 0.58, y: 0.88 },
      { x: 1.06, y: 0.94 },
    ],
    width: 0.24,
    twist: 2.2,
    phase: 0.5,
    alpha: 0.62,
  },
  // Phone hero: one gentle S, entering above the canvas so it never starts in a cut.
  'hero-m': {
    // Every point stays inside the canvas; the last one is replaced by the tail.
    pts: [
      { x: 1.08, y: -0.25 },
      { x: 0.64, y: 0.1 },
      { x: 0.36, y: 0.4 },
      { x: 0.58, y: 0.62 },
      { x: 0.9, y: 1 },
    ],
    width: 0.24,
    twist: 1.5,
    phase: 0.5,
    alpha: 0.62,
  },
  // Enters on the right, where the page thread arrives, and leaves on the left,
  // where it continues. Routed through the band's padding: over the right
  // statement, under the left one.
  bridge: {
    pts: [
      { x: 1.02, y: 0.13 },
      { x: 0.76, y: 0.07 },
      { x: 0.5, y: 0.5 },
      { x: 0.24, y: 0.93 },
      { x: -0.02, y: 0.87 },
    ],
    width: 0.16,
    twist: 1.6,
    phase: 0.5,
    alpha: 0.7,
  },
  'bridge-v': {
    pts: [
      { x: 1.04, y: 0.4 },
      { x: 0.66, y: 0.66 },
      { x: 0.3, y: 0.36 },
      { x: -0.04, y: 0.62 },
    ],
    width: 0.5,
    twist: 1.4,
    phase: 0.5,
    alpha: 0.7,
  },
}

const STEPS = 160
const STRANDS = 14 // texture only; the body is filled
const PULL_RADIUS = 260 // px around the pointer that the ribbon feels
const PULL_MAX = 26 // px the crest may travel toward the pointer
const EASE = 0.12 // per-frame approach, ~0.3s to settle at 60fps

const PAGE_THREAD_PX = 1.75 // the hero ribbon narrows to exactly the page thread's weight

// Catmull-Rom through the control points.
function sample(p: Pt[], t: number): Pt {
  const n = p.length - 1
  const f = Math.min(t * n, n - 1e-6)
  const i = Math.floor(f)
  const u = f - i
  const p0 = p[Math.max(i - 1, 0)]
  const p1 = p[i]
  const p2 = p[i + 1]
  const p3 = p[Math.min(i + 2, n)]
  const u2 = u * u
  const u3 = u2 * u
  const cr = (a: number, b: number, c: number, d: number) =>
    0.5 * (2 * b + (-a + c) * u + (2 * a - 5 * b + 4 * c - d) * u2 + (-a + 3 * b - 3 * c + d) * u3)
  return { x: cr(p0.x, p1.x, p2.x, p3.x), y: cr(p0.y, p1.y, p2.y, p3.y) }
}

export function Thread({ variant, className = '' }: { variant: Variant; className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const shape = SHAPES[variant]
    const scrolled = variant === 'bridge' || variant === 'bridge-v'
    const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let w = 0
    let h = 0
    let dpr = 1
    let raf = 0
    let reveal = still || scrolled ? 1 : 0
    let revealTarget = 1
    const start = performance.now()
    const offset = shape.pts.map(() => ({ x: 0, y: 0 }))
    const target = shape.pts.map(() => ({ x: 0, y: 0 }))
    const layer = document.createElement('canvas')
    // Hero ribbons end in the right margin at the canvas bottom, where the page thread picks up.
    const tails = variant === 'hero' || variant === 'hero-m'
    let tail: Pt | null = null

    function draw() {
      const c2 = ctx!
      c2.setTransform(1, 0, 0, 1, 0, 0)
      c2.clearRect(0, 0, canvas!.width, canvas!.height)
      if (!w || !h) return
      c2.setTransform(dpr, 0, 0, dpr, 0, 0)

      const pts = shape.pts.map((p, i) => ({ x: p.x * w + offset[i].x, y: p.y * h + offset[i].y }))
      if (tail) {
        // Arrive vertically: the point before the tail sits straight above it,
        // so the ribbon meets the margin thread on a tangent, not an elbow.
        // Desktop: the last bend becomes the approach. Phone: its last bend is
        // needed for the S, so a higher approach is added after it.
        const tx = tail.x * w
        if (variant === 'hero') pts[pts.length - 2] = { x: tx, y: h * 0.85 }
        // Phone: the margin is 8px from the screen edge, so approach from inside
        // (no overshoot past it) and then drop straight down onto the tail.
        else pts.splice(pts.length - 1, 0, { x: tx - 0.06 * w, y: h * 0.76 }, { x: tx, y: h * 0.9 })
        pts[pts.length - 1] = { x: tx, y: tail.y * h }
      }
      const W = shape.width * Math.min(w, h * 1.1)
      const end = Math.max(2, Math.round(STEPS * reveal))

      const c: Pt[] = []
      const nx: number[] = []
      const ny: number[] = []
      const tw: number[] = []
      for (let k = 0; k <= end; k++) c.push(sample(pts, k / STEPS))
      for (let k = 0; k <= end; k++) {
        const a = c[Math.max(k - 1, 0)]
        const b = c[Math.min(k + 1, end)]
        const len = Math.hypot(b.x - a.x, b.y - a.y) || 1
        nx.push(-(b.y - a.y) / len)
        ny.push((b.x - a.x) / len)
        tw.push(Math.cos((k / STEPS) * Math.PI * shape.twist + shape.phase))
      }
      // Cap the half-width at the local radius of curvature, smoothed, so the
      // inner edge never crosses itself on a tight bend.
      const cap: number[] = []
      for (let k = 0; k <= end; k++) {
        const a = c[Math.max(k - 1, 0)]
        const m = c[k]
        const b = c[Math.min(k + 1, end)]
        const t1 = Math.atan2(m.y - a.y, m.x - a.x)
        const t2 = Math.atan2(b.y - m.y, b.x - m.x)
        let d = Math.abs(t2 - t1)
        if (d > Math.PI) d = 2 * Math.PI - d
        const ds = (Math.hypot(m.x - a.x, m.y - a.y) + Math.hypot(b.x - m.x, b.y - m.y)) / 2
        const R = d > 1e-4 ? ds / d : Infinity
        cap.push(Math.min(1, (0.8 * R) / (W * 0.5 * Math.abs(tw[k]) + 1e-6)))
      }
      // Many light passes: the taper into a bend is gradual, never a pinch.
      for (let pass = 0; pass < 14; pass++)
        for (let k = 1; k < end; k++) cap[k] = Math.min(cap[k], (cap[k - 1] + cap[k] + cap[k + 1]) / 3)
      for (let k = 0; k <= end; k++) tw[k] *= cap[k]
      // Taper: over its last half the ribbon narrows into the page thread. On a
      // phone it is thread-thin before it reaches the narrow margin.
      if (tail) {
        const min = PAGE_THREAD_PX / W
        const t1 = variant === 'hero' ? 1 : 0.8
        for (let k = 0; k <= end; k++) {
          const t = k / STEPS
          if (t <= 0.5) continue
          const s = Math.min(1, (t - 0.5) / (t1 - 0.5))
          const f = 1 - s * s * (3 - 2 * s)
          tw[k] = (tw[k] < 0 ? -1 : 1) * Math.max(Math.abs(tw[k]) * f, min)
        }
      }
      const edge = (k: number, side: 1 | -1) => {
        const r = side * W * 0.5 * tw[k]
        return { x: c[k].x + nx[k] * r, y: c[k].y + ny[k] * r }
      }

      const g = c2.createLinearGradient(w, 0, 0, h)
      // The bridges enter where the page thread fades out in magenta: start them in it.
      const stops = scrolled ? ['#ec008c', '#92278f', '#27aae1'] : ['#27aae1', '#92278f', '#ec008c']
      stops.forEach((c, i) => g.addColorStop(i / 2, c))

      // Body goes to an opaque layer first so neighbouring quads leave no seams,
      // then lands on the page once, translucent.
      const b2 = layer.getContext('2d')!
      b2.setTransform(1, 0, 0, 1, 0, 0)
      b2.clearRect(0, 0, layer.width, layer.height)
      b2.setTransform(dpr, 0, 0, dpr, 0, 0)
      const fillQuad = (k: number) => {
        const a1 = edge(k, 1)
        const a2 = edge(k + 1, 1)
        const q2 = edge(k + 1, -1)
        const q1 = edge(k, -1)
        b2.beginPath()
        b2.moveTo(a1.x, a1.y)
        b2.lineTo(a2.x, a2.y)
        b2.lineTo(q2.x, q2.y)
        b2.lineTo(q1.x, q1.y)
        b2.closePath()
        b2.fill()
        b2.stroke()
      }
      b2.lineWidth = 0.8
      b2.fillStyle = g
      b2.strokeStyle = g
      for (let k = 0; k < end; k++) fillQuad(k)
      // Back face and the turn of each fold catch light: lift them toward white,
      // as whole runs (one polygon each) so no step boundary shows.
      const run = (test: (k: number) => boolean, alpha: number) => {
        b2.globalAlpha = alpha
        let k = 0
        while (k < end) {
          if (!test(k)) {
            k++
            continue
          }
          const k0 = k
          while (k < end && test(k)) k++
          b2.beginPath()
          for (let j = k0; j <= k; j++) {
            const p = edge(j, 1)
            if (j === k0) b2.moveTo(p.x, p.y)
            else b2.lineTo(p.x, p.y)
          }
          for (let j = k; j >= k0; j--) {
            const p = edge(j, -1)
            b2.lineTo(p.x, p.y)
          }
          b2.closePath()
          b2.fill()
        }
      }
      b2.fillStyle = '#ffffff'
      run((k) => tw[k] < 0, 0.45)
      b2.filter = 'blur(3px)'
      for (const t of [0.15, 0.4, 0.7]) run((k) => Math.pow(1 - Math.abs(tw[k]), 5) > t, 0.32)
      b2.filter = 'none'
      b2.globalAlpha = 1
      c2.setTransform(1, 0, 0, 1, 0, 0)
      c2.globalAlpha = shape.alpha
      c2.drawImage(layer, 0, 0)
      c2.setTransform(dpr, 0, 0, dpr, 0, 0)

      // Texture strands and the two selvedge edges.
      c2.strokeStyle = g
      c2.lineJoin = 'round'
      for (let s = 0; s <= STRANDS; s++) {
        const v = (s / STRANDS) * 2 - 1
        const selvedge = s === 0 || s === STRANDS
        c2.lineWidth = selvedge ? 1.2 : 0.6
        c2.globalAlpha = selvedge ? 0.55 : 0.08
        c2.beginPath()
        for (let k = 0; k <= end; k++) {
          const r = v * W * 0.5 * tw[k]
          const x = c[k].x + nx[k] * r
          const y = c[k].y + ny[k] * r
          if (k === 0) c2.moveTo(x, y)
          else c2.lineTo(x, y)
        }
        c2.stroke()
      }
      c2.globalAlpha = 1
    }

    function tick(now: number) {
      let moving = false
      if (!still && !scrolled && reveal < 1) {
        const p = Math.min((now - start) / 1600, 1)
        reveal = 1 - Math.pow(1 - p, 4) // ease-out quart
        moving = true
      }
      if (scrolled && Math.abs(revealTarget - reveal) > 0.001) {
        reveal += (revealTarget - reveal) * EASE
        moving = true
      }
      for (let i = 0; i < offset.length; i++) {
        const dx = target[i].x - offset[i].x
        const dy = target[i].y - offset[i].y
        if (Math.abs(dx) + Math.abs(dy) > 0.05) {
          offset[i].x += dx * EASE
          offset[i].y += dy * EASE
          moving = true
        }
      }
      draw()
      raf = moving ? requestAnimationFrame(tick) : 0
    }

    const kick = () => {
      if (!raf) raf = requestAnimationFrame(tick)
    }

    function resize() {
      const r = canvas!.getBoundingClientRect()
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = r.width
      h = r.height
      if (tails) tail = { x: (threadGutters().right - r.left) / w, y: 1 }
      canvas!.width = layer.width = Math.round(w * dpr)
      canvas!.height = layer.height = Math.round(h * dpr)
      draw()
    }

    const ro = new ResizeObserver(resize)
    ro.observe(canvas)
    resize()

    const cleanups: (() => void)[] = []

    if (!still && !scrolled) {
      const onMove = (e: PointerEvent) => {
        if (e.pointerType !== 'mouse') return
        const r = canvas.getBoundingClientRect()
        const px = e.clientX - r.left
        const py = e.clientY - r.top
        shape.pts.forEach((p, i) => {
          if (tails && i === shape.pts.length - 1) return // the tail is pinned to the page thread
          const dx = px - p.x * w
          const dy = py - p.y * h
          const d = Math.hypot(dx, dy)
          const f = Math.max(0, 1 - d / PULL_RADIUS) ** 2
          target[i].x = d ? (dx / d) * PULL_MAX * f : 0
          target[i].y = d ? (dy / d) * PULL_MAX * f : 0
        })
        kick()
      }
      window.addEventListener('pointermove', onMove, { passive: true })
      cleanups.push(() => window.removeEventListener('pointermove', onMove))
      kick()
    }

    if (!still && scrolled) {
      reveal = 0
      const onScroll = () => {
        const r = canvas.getBoundingClientRect()
        const vh = window.innerHeight
        // 0 when the canvas top meets the viewport bottom, 1 once its middle passes the center
        revealTarget = Math.min(1, Math.max(0, (vh - r.top) / (vh * 0.5 + r.height * 0.5)))
        kick()
      }
      window.addEventListener('scroll', onScroll, { passive: true })
      cleanups.push(() => window.removeEventListener('scroll', onScroll))
      onScroll()
    }

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      cleanups.forEach((f) => f())
    }
  }, [variant])

  return <canvas ref={ref} className={`thread thread--${variant} ${className}`} aria-hidden />
}
