import { useEffect, useRef } from 'react'
import { Check, ShieldCheck, Lock, CreditCard, Plus, Gift } from 'lucide-react'
import {
  bonuses,
  offerBlock,
  offer,
  guarantee,
  objections,
  faq,
  closing,
  footer,
  live,
  isLive,
  type QA,
} from '../content'
import { Button, Pending, Section } from '../components/ui'
import { Wordmark } from './Header'
import { Seal } from '../components/Seal'
import { track } from '../track'
import './Close.css'

// Blocks 17–23: what you get, what it costs, what if, and the last word.

export function Bonuses() {
  const items = live(bonuses.items)
  if (!items.length) return null
  return (
    <Section tone="paper" className="bonuses" labelledBy="bonuses-title">
      <h2 id="bonuses-title" className="heading">
        {bonuses.heading}
      </h2>
      <ul role="list" className="bonuses__list" data-reveal>
        {items.map((b) => (
          <li key={b.title}>
            <Gift size={22} strokeWidth={1.5} aria-hidden />
            <span className="bonuses__label">{b.label}</span>
            <strong>{b.title}</strong>
            <Pending item={b} />
          </li>
        ))}
      </ul>
      <p className="bonuses__badge">{bonuses.badge}</p>
    </Section>
  )
}

const TRUST_ICONS = [Lock, ShieldCheck, CreditCard]

export function Offer() {
  const card = useRef<HTMLDivElement>(null)

  // ViewContent fires once, the first time the price is actually seen.
  useEffect(() => {
    const el = card.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      track('ViewContent', { block: 'oferta' })
      io.disconnect()
    }, { threshold: 0.5 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Section id="oferta" tone="lacquer" className="offer" labelledBy="offer-title">
      <div className="offer__grid">
        <div>
          <h2 id="offer-title" className="offer__title">
            {offerBlock.heading}
          </h2>
          <ul role="list" className="offer__includes">
            {live(offerBlock.includes).map((i) => (
              <li key={i.text}>
                <Check size={18} strokeWidth={2} aria-hidden />
                {i.text}
                <Pending item={i} />
              </li>
            ))}
          </ul>
        </div>

        <div className="price" ref={card}>
          <p className="price__name">
            {offer.name}
            <span>{offer.subtitle}</span>
          </p>
          <p className="price__seats">
            <span>{offerBlock.seatsLabel}</span>
            <strong className="tabular">Apenas {offer.seats} vagas</strong>
          </p>
          <p className="price__from">
            De <s className="tabular">{offer.priceFrom}</s>
          </p>
          <p className="price__now">
            <span className="price__lead">{offerBlock.priceLead}</span>
            <strong className="tabular">{offer.price}</strong>
          </p>
          <p className="price__installments">
            {offerBlock.priceOr} <strong className="tabular">{offer.installments}</strong>
          </p>
          <Button cta="oferta" className="price__cta">
            {offerBlock.cta}
          </Button>
          <ul role="list" className="price__trust">
            {offerBlock.trust.map((t, i) => {
              const Icon = TRUST_ICONS[i]
              return (
                <li key={t}>
                  <Icon size={15} strokeWidth={1.5} aria-hidden />
                  {t}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </Section>
  )
}

export function Guarantee() {
  return (
    <Section className="guarantee" labelledBy="guarantee-title">
      <div className="guarantee__panel" data-reveal>
        <Seal
          className="guarantee__seal"
          figure={String(offer.guaranteeDays)}
          unit="DIAS"
          ring="PARA CONHECER A FORMAÇÃO · CAMINHOS DA INCLUSÃO · "
        />
        <div>
          <h2 id="guarantee-title" className="guarantee__title">
            {guarantee.heading}
          </h2>
          <p className="guarantee__sub">{guarantee.subheading}</p>
          <p className="guarantee__text">{guarantee.text}</p>
          {isLive(guarantee.terms) && (
            <p className="guarantee__terms">
              {guarantee.terms.text || 'Termos exatos da garantia.'}
              <Pending item={guarantee.terms} />
            </p>
          )}
        </div>
      </div>
    </Section>
  )
}

function Accordion({ items }: { items: QA[] }) {
  return (
    <div className="qa">
      {items.map((i) => (
        <details key={i.q} className="qa__item">
          <summary>
            <span>
              {i.q}
              <Pending item={i} />
            </span>
            <Plus className="qa__icon" size={20} strokeWidth={1.5} aria-hidden />
          </summary>
          <p>{i.a || '—'}</p>
        </details>
      ))}
    </div>
  )
}

export function Objections() {
  const items = live(objections.items)
  if (!items.length) return null
  return (
    <Section tone="paper" className="doubts" labelledBy="doubts-title">
      <div className="doubts__grid">
        <h2 id="doubts-title" className="heading doubts__heading">
          {objections.heading}
        </h2>
        <Accordion items={items} />
      </div>
    </Section>
  )
}

export function Faq() {
  const items = live(faq.items)
  if (!items.length) return null
  // Structured data only ever carries confirmed answers.
  const confirmed = faq.items.filter((i) => !i.pending && i.a)
  return (
    <Section id="faq" tone="paper" className="doubts" labelledBy="faq-title">
      {confirmed.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: confirmed.map((i) => ({
                '@type': 'Question',
                name: i.q,
                acceptedAnswer: { '@type': 'Answer', text: i.a },
              })),
            }).replace(/</g, '\\u003c'),
          }}
        />
      )}
      <div className="doubts__grid">
        <h2 id="faq-title" className="heading doubts__heading">
          {faq.heading}
        </h2>
        <Accordion items={items} />
      </div>
    </Section>
  )
}

export function Closing() {
  return (
    <Section className="closing" labelledBy="closing-title">
      <h2 id="closing-title" className="closing__title">
        {closing.heading}
      </h2>
      <div className="closing__grid">
        <div>
          {closing.text.map((t) => (
            <p key={t} className="closing__text">
              {t}
            </p>
          ))}
          <p className="closing__emphasis">{closing.emphasis}</p>
        </div>

        <div className="closing__buy">
          <p className="closing__invite">{closing.invite}</p>
          <ul role="list" className="closing__summary">
            {closing.summary.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
          <p className="closing__price">
            <strong className="tabular">{offer.price}</strong>
            <span>
              ou <span className="tabular">{offer.installments}</span>
            </span>
          </p>
          <Button cta="fechamento" className="closing__cta">
            {closing.cta}
          </Button>
          <p className="closing__guarantee">
            <ShieldCheck size={16} strokeWidth={1.5} aria-hidden />
            {closing.guaranteeNote}
          </p>
        </div>
      </div>
    </Section>
  )
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="rail">
        <div className="footer__top">
          <div>
            <Wordmark inverse />
            <p className="footer__product">
              {offer.name}: {offer.subtitle}
            </p>
          </div>
          <nav aria-label="Links institucionais">
            {live(footer.legal).length > 0 && (
            <ul role="list" className="footer__links">
              {live(footer.legal).map((l) => (
                <li key={l.label}>
                  <a href={l.href}>{l.label}</a>
                  <Pending item={l} />
                </li>
              ))}
            </ul>
            )}
            <ul role="list" className="footer__links">
              {live(footer.social).map((l) => (
                <li key={l.label}>
                  <a href={l.href} target="_blank" rel="noopener noreferrer">
                    {l.label}
                  </a>
                  <Pending item={l} />
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="footer__bottom">
          {isLive(footer.company) && (
            <p>
              {footer.company.text || 'Razão social · CNPJ · Endereço'}
              <Pending item={footer.company} />
            </p>
          )}
          <p>{footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
