import { useEffect, useRef, useState } from 'react'
import { threadGutters } from './gutters'
import './PageThread.css'

/**
 * The single thread that sews the page together.
 * - It picks up where the hero ribbon tapers into the right margin.
 * - It runs down the right margin and fades out at the Big Idea's edge, where
 *   the band's bridge enters on the same side: the thread becomes the bridge,
 *   crosses the page there, and continues down the left margin.
 * - Other navy bands fade it out and back in on the same side.
 * - It ends by tying into the closing question.
 * It draws itself as the reader scrolls; reduced motion shows it whole.
 */

const FADE = 72 // px over which the thread fades into and out of a navy band

type Geo = { d: string; w: number; h: number; dark: { top: number; bottom: number }[]; knot: { x: number; y: number } | null }

export function PageThread() {
  const svg = useRef<SVGSVGElement>(null)
  const path = useRef<SVGPathElement>(null)
  const [geo, setGeo] = useState<Geo | null>(null)

  useEffect(() => {
    const main = svg.current?.parentElement
    if (!main) return
    const measure = () => {
      const origin = main.getBoundingClientRect().top
      const sections = [...main.querySelectorAll<HTMLElement>(':scope > section')]
      const heroCanvas = [...main.querySelectorAll<HTMLCanvasElement>('.hero__thread canvas')].find(
        (c) => c.getBoundingClientRect().height > 0,
      )
      if (sections.length < 3 || !heroCanvas) return
      const { left, right } = threadGutters(main)
      const w = main.clientWidth
      const box = (el: HTMLElement) => {
        const r = el.getBoundingClientRect()
        const cs = getComputedStyle(el)
        return {
          top: r.top - origin,
          bottom: r.bottom - origin,
          padTop: parseFloat(cs.paddingTop) || 64,
          padBottom: parseFloat(cs.paddingBottom) || 64,
          dark: el.classList.contains('band--lacquer'),
        }
      }
      const boxes = sections.map(box)
      const dark = boxes.filter((b) => b.dark).map((b) => ({ top: b.top, bottom: b.bottom }))

      // No crossings in the open: the thread only changes margins as the Big Idea
      // bridge, which enters on the right and leaves on the left.
      let x = right
      let d = `M ${x} ${heroCanvas.getBoundingClientRect().bottom - origin}`
      sections.forEach((el, i) => {
        const b = boxes[i]
        if (i === 0 || !b.dark) return
        d += ` L ${x} ${b.top + 1}` // fades out at the band's edge (mask)
        if (el.classList.contains('idea')) x = left
        d += ` M ${x} ${b.bottom - 1}`
      })

      // Tie into the closing question: a short hook into its first line.
      const title = main.querySelector<HTMLElement>('.closing__title')
      let knot: Geo['knot'] = null
      if (title) {
        const r = title.getBoundingClientRect()
        const lh = parseFloat(getComputedStyle(title).lineHeight) || 60
        const cy = r.top - origin + lh / 2
        const edge = x === left ? r.left - 10 : r.right + 10
        const dir = x === left ? 1 : -1
        d += ` L ${x} ${cy - 70} C ${x} ${cy - 20}, ${edge - dir * 20} ${cy}, ${edge} ${cy}`
        knot = { x: edge, y: cy }
      }

      setGeo({ d, w, h: boxes[boxes.length - 1].bottom, dark, knot })
    }
    const ro = new ResizeObserver(measure)
    ro.observe(main)
    measure()
    return () => ro.disconnect()
  }, [])

  // Draw-on: the thread is as long as the reading has gone.
  useEffect(() => {
    const p = path.current
    if (!p || !geo) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      p.style.strokeDashoffset = '0'
      svg.current?.classList.add('is-whole')
      return
    }
    let raf = 0
    const update = () => {
      raf = 0
      const r = svg.current!.getBoundingClientRect()
      const reached = window.innerHeight * 0.75 - r.top
      const progress = Math.min(1, Math.max(0, reached / r.height))
      p.style.strokeDashoffset = String(1 - progress)
      svg.current!.classList.toggle('is-whole', progress >= 0.999)
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    update()
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [geo])

  return (
    <svg
      ref={svg}
      className="page-thread"
      width={geo?.w ?? 0}
      height={geo?.h ?? 0}
      viewBox={geo ? `0 0 ${geo.w} ${geo.h}` : undefined}
      aria-hidden
    >
      {geo && (
        <>
          <defs>
            <linearGradient id="pt-ink" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="0" y2={geo.h}>
              <stop offset="0" stopColor="#ec008c" />
              <stop offset="0.3" stopColor="#92278f" />
              <stop offset="0.55" stopColor="#27aae1" />
              <stop offset="0.8" stopColor="#92278f" />
              <stop offset="1" stopColor="#ec008c" />
            </linearGradient>
            <linearGradient id="pt-fade-out" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#fff" />
              <stop offset="1" stopColor="#000" />
            </linearGradient>
            <linearGradient id="pt-fade-in" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#000" />
              <stop offset="1" stopColor="#fff" />
            </linearGradient>
            {/* Navy bands carry their own thread: this one fades out at their edges. */}
            <mask id="pt-mask" maskUnits="userSpaceOnUse" x="0" y="0" width={geo.w} height={geo.h}>
              <rect width={geo.w} height={geo.h} fill="#fff" />
              {geo.dark.map((b) => (
                <g key={b.top}>
                  <rect y={b.top - FADE} width={geo.w} height={FADE} fill="url(#pt-fade-out)" />
                  <rect y={b.top} width={geo.w} height={b.bottom - b.top} fill="#000" />
                  <rect y={b.bottom} width={geo.w} height={FADE} fill="url(#pt-fade-in)" />
                </g>
              ))}
            </mask>
          </defs>
          <g mask="url(#pt-mask)">
            <path ref={path} d={geo.d} pathLength={1} className="page-thread__line" />
          </g>
          {geo.knot && <circle className="page-thread__knot" cx={geo.knot.x} cy={geo.knot.y} r={3} />}
        </>
      )}
    </svg>
  )
}
