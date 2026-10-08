import type { ReactNode } from 'react'
import type { LucideIcon } from 'lucide-react'
import { ChevronRight } from 'lucide-react'
import { CHECKOUT_URL } from '../config'
import { track } from '../track'
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
  /** Renders the content inside a saturated rounded panel instead of a flat band. */
  stage?: 'purple' | 'blue' | 'magenta'
  className?: string
  children: ReactNode
  labelledBy?: string
}

export function Section({ id, tone = 'ground', stage, className = '', children, labelledBy }: SectionProps) {
  if (stage)
    return (
      <section id={id} className={`band band--stage ${className}`} aria-labelledby={labelledBy}>
        <div className="rail">
          <div className={`stage stage--${stage}`}>{children}</div>
        </div>
      </section>
    )
  return (
    <section id={id} className={`band band--${tone} ${className}`} aria-labelledby={labelledBy}>
      <div className="rail">{children}</div>
    </section>
  )
}

/** "Lead |accent" → lead in ink, the part after the bar in the accent colour. */
export function TwoTone({ text }: { text: string }) {
  const [lead, accent] = text.split('|')
  if (accent === undefined) return <>{text}</>
  return (
    <>
      {lead}
      <span className="accent">{accent}</span>
    </>
  )
}

export function Chip({ icon: Icon, size = 'md' }: { icon: LucideIcon; size?: 'md' | 'sm' }) {
  return (
    <span className={`chip ${size === 'sm' ? 'chip--sm' : ''}`} aria-hidden>
      <Icon size={size === 'sm' ? 18 : 24} strokeWidth={1.75} />
    </span>
  )
}
