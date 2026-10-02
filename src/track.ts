import { GTM_ID, META_PIXEL_ID } from './config'

// Single tracking entry point: every event goes to both sinks when present.
type W = Window & { fbq?: (...a: unknown[]) => void; dataLayer?: unknown[] }

export function track(event: 'InitiateCheckout' | 'ViewContent', data: Record<string, string> = {}) {
  const w = window as W
  w.fbq?.('track', event, data)
  w.dataLayer?.push({ event, ...data })
}

function load(src: string) {
  const s = document.createElement('script')
  s.async = true
  s.src = src
  document.head.appendChild(s)
}

// ponytail: loads on page view with no consent gate; add a LGPD banner that calls this after opt-in if required.
export function initTracking() {
  const w = window as W
  if (GTM_ID) {
    w.dataLayer = w.dataLayer || []
    w.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' })
    load(`https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(GTM_ID)}`)
  }
  if (META_PIXEL_ID) {
    // Meta's official stub: queues calls until fbevents.js installs callMethod.
    type Stub = ((...a: unknown[]) => void) & { callMethod?: (...a: unknown[]) => void; queue: unknown[]; push: Stub; loaded: boolean; version: string }
    const fbq = function (...a: unknown[]) {
      if (fbq.callMethod) fbq.callMethod(...a)
      else fbq.queue.push(a)
    } as Stub
    fbq.push = fbq
    fbq.loaded = true
    fbq.version = '2.0'
    fbq.queue = []
    w.fbq = fbq
    ;(w as unknown as Record<string, unknown>)._fbq = fbq
    load('https://connect.facebook.net/en_US/fbevents.js')
    fbq('init', META_PIXEL_ID)
    fbq('track', 'PageView')
  }
}
