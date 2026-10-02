import { useEffect } from 'react'

/**
 * Panels marked [data-reveal] rise 24px once as they enter. Content is visible
 * by default: only elements still below the fold when JS runs are held back,
 * and reduced motion skips the whole thing.
 */
export function useReveal() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const els = [...document.querySelectorAll<HTMLElement>('[data-reveal]')].filter(
      (el) => el.getBoundingClientRect().top > window.innerHeight,
    )
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue
          e.target.classList.remove('reveal-wait')
          io.unobserve(e.target)
        }
      },
      { rootMargin: '0px 0px -12% 0px' },
    )
    for (const el of els) {
      el.classList.add('reveal-wait')
      io.observe(el)
    }
    return () => io.disconnect()
  }, [])
}
