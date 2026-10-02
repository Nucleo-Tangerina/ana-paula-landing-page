import type { ReactNode } from 'react'
import { ChevronRight } from 'lucide-react'
import { CHECKOUT_URL } from '../config'
import { track } from '../track'
import type { Pending as PendingT } from '../content'
import './ui.css'

type ButtonProps = {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'inverse'
  href?: string
  /** Analytics id of the CTA's block, e.g. "hero". Omit for non-checkout links. */
  cta?: string
  className?: string
}

/** Every checkout CTA routes through here so the URL and tracking live in one place. */
export function Button({ children, variant = 'primary', href, cta, className = '' }: ButtonProps) {
  const target = href ?? CHECKOUT_URL
  return (
    <a
      className={`btn btn--${variant} ${className}`}
      href={target}
      onClick={cta ? () => track('InitiateCheckout', { cta }) : undefined}
    >
      <span>{children}</span>
      <ChevronRight className="btn__chevron" aria-hidden size={18} strokeWidth={2} />
    </a>
  )
}

type SectionProps = {
  id?: string
  tone?: 'ground' | 'paper' | 'lacquer'
  className?: string
  children: ReactNode
  labelledBy?: string
}

export function Section({ id, tone = 'ground', className = '', children, labelledBy }: SectionProps) {
  return (
    <section id={id} className={`band band--${tone} ${className}`} aria-labelledby={labelledBy}>
      <div className="rail">{children}</div>
    </section>
  )
}

/** Dev-only flag on unconfirmed content; renders nothing in production. */
export function Pending({ item }: { item: PendingT }) {
  if (!import.meta.env.DEV || !item.pending) return null
  return (
    <span className="pending" title={item.pending}>
      CONFIRMAR
    </span>
  )
}

type PlaceholderProps = {
  /** What the real asset is, e.g. "Foto da Ana Paula (retrato, fundo neutro)". */
  label: string
  ratio?: string
  className?: string
  tone?: 'light' | 'dark'
}

/** Reserves the final asset's box so the layout holds when real files arrive. */
export function Placeholder({ label, ratio = '4 / 5', className = '', tone = 'light' }: PlaceholderProps) {
  return (
    <div className={`ph ph--${tone} ${className}`} style={{ aspectRatio: ratio }} role="img" aria-label={label}>
      {import.meta.env.DEV && <span className="ph__label">{label}</span>}
    </div>
  )
}
