import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { nav as allNav, headerCta, live, testimonials, faq } from '../content'
import { Button, Pending } from '../components/ui'
import './Header.css'

// Sections that hide themselves until confirmed must not leave dead anchors behind.
const hidden = new Set([
  ...(live(testimonials.items).length ? [] : ['#depoimentos']),
  ...(live(faq.items).length ? [] : ['#faq']),
])
const nav = allNav.filter((n) => !hidden.has(n.href))

const LOGO_PENDING = { pending: 'Logo oficial da Teia de Saberes (SVG colorido e branco).' }

export function Wordmark({ inverse = false }: { inverse?: boolean }) {
  return (
    <a href="#top" className={`wordmark ${inverse ? 'wordmark--inverse' : ''}`} aria-label="Teia de Saberes, início">
      <span className="wordmark__name">Teia de Saberes</span>
      <Pending item={LOGO_PENDING} />
    </a>
  )
}

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const sentinel = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = sentinel.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => setScrolled(!e.isIntersecting))
    io.observe(el)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <>
      <div ref={sentinel} className="header-sentinel" aria-hidden />
      <header className={`header ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`}>
        <div className="rail header__bar">
          <Wordmark />
          <nav className="header__nav" aria-label="Seções da página">
            <ul role="list">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href}>{n.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <Button cta="header" className="header__cta">
            {headerCta}
          </Button>
          <button
            type="button"
            className="header__toggle"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
          </button>
        </div>
        <nav id="mobile-nav" className="header__panel" aria-label="Seções da página" hidden={!open}>
          <ul role="list" className="rail">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} onClick={() => setOpen(false)}>
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  )
}
