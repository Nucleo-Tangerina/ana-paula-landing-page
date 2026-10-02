import { useRef } from 'react'
import {
  CirclePlay,
  Smartphone,
  Video,
  Hourglass,
  Award,
  Plus,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import { author, testimonials, study, curriculum, portfolio, offer, live, isLive } from '../content'
import { Pending, Placeholder, Section } from '../components/ui'
import './Proof.css'

// Blocks 11–16: who teaches, who learned, how it's studied, what's inside.

export function Author() {
  return (
    <Section tone="paper" className="author" labelledBy="author-title">
      <div className="author__grid">
        <Placeholder
          className="author__portrait"
          label="Foto grande da Ana Paula Jorge: retrato profissional, ambiente escolar ou neutro"
          ratio="4 / 5"
        />
        <div>
          <h2 id="author-title" className="author__name">
            {author.heading}
          </h2>
          <p className="author__sub">{author.subheading}</p>
          {isLive(author.bio) && (
            <p className="author__bio">
              {author.bio.text}
              <Pending item={author.bio} />
            </p>
          )}

          <ul role="list" className="credentials" data-reveal>
            {author.credentials.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </div>

      {isLive(author.quote) && (
        <figure className="author__quote" data-reveal>
          <blockquote>
            <p>“{author.quote.text}”</p>
          </blockquote>
          <figcaption>
            {author.quote.by}
            <Pending item={author.quote} />
          </figcaption>
        </figure>
      )}
    </Section>
  )
}

export function Testimonials() {
  const track = useRef<HTMLUListElement>(null)
  const items = live(testimonials.items)
  if (!items.length) return null

  const scroll = (dir: 1 | -1) => {
    const el = track.current
    if (el) el.scrollBy({ left: dir * el.clientWidth * 0.85, behavior: 'smooth' })
  }

  return (
    <Section id="depoimentos" className="voices" labelledBy="voices-title">
      <div className="voices__head">
        <div>
          <h2 id="voices-title" className="heading">
            {testimonials.heading}
          </h2>
          <p className="lede">{testimonials.lede}</p>
        </div>
        {items.length > 3 && (
        <div className="voices__nav">
          <button type="button" onClick={() => scroll(-1)} aria-label="Depoimento anterior">
            <ChevronLeft size={20} strokeWidth={1.5} />
          </button>
          <button type="button" onClick={() => scroll(1)} aria-label="Próximo depoimento">
            <ChevronRight size={20} strokeWidth={1.5} />
          </button>
        </div>
        )}
      </div>

      <ul role="list" className="voices__track" ref={track} tabIndex={0} aria-label="Depoimentos">
        {items.map((t, i) => (
          <li key={i} className="voices__card">
            <blockquote>
              <p>“{t.quote}”</p>
            </blockquote>
            <div className="voices__who">
              {t.photo ? (
                <img src={t.photo} alt="" width={48} height={48} />
              ) : (
                <Placeholder label="Foto" ratio="1" className="voices__photo" />
              )}
              <div>
                <strong>{t.name}</strong>
                <span>{t.role}</span>
              </div>
            </div>
            <Pending item={t} />
          </li>
        ))}
      </ul>
    </Section>
  )
}

const STUDY_ICONS = [CirclePlay, Smartphone, Video, Hourglass, Award]

export function Study() {
  return (
    <Section className="study" labelledBy="study-title">
      <div className="study__grid">
        <Placeholder
          className="study__phone"
          label="Mockup de celular com o aplicativo da formação (print real)"
          ratio="9 / 16"
        />
        <div>
          <h2 id="study-title" className="heading">
            {study.heading}
          </h2>
          <ul role="list" className="study__list" data-reveal>
            {study.items.map((s, i) => {
              const Icon = STUDY_ICONS[i]
              return (
                <li key={s.title}>
                  <Icon size={22} strokeWidth={1.5} aria-hidden />
                  <div>
                    <strong>{s.title}</strong>
                    <span>{s.text}</span>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </Section>
  )
}

export function Curriculum() {
  return (
    <Section id="conteudo" tone="paper" className="curriculum" labelledBy="curriculum-title">
      <div className="curriculum__grid">
        <div className="curriculum__intro">
          <h2 id="curriculum-title" className="heading">
            {curriculum.heading}
          </h2>
          <p className="lede">{curriculum.lede}</p>
        </div>

        <div>
          <div className="modules">
            {curriculum.modules.map((m) => (
              <details key={m.n} className="modules__item">
                <summary>
                  <span className="modules__n tabular">Módulo {m.n}</span>
                  <span className="modules__title">{m.title}</span>
                  <span className="modules__hours tabular">{m.hours}h</span>
                  <Plus className="modules__icon" size={20} strokeWidth={1.5} aria-hidden />
                </summary>
                <p>{m.text}</p>
              </details>
            ))}
          </div>
          <p className="modules__total">
            <span>Carga horária total</span>
            <strong className="tabular">{offer.hours}h</strong>
          </p>
        </div>
      </div>
    </Section>
  )
}

export function Portfolio() {
  return (
    <Section className="portfolio" labelledBy="portfolio-title">
      <div className="portfolio__panel" data-reveal>
        <div className="portfolio__copy">
          <h2 id="portfolio-title" className="heading">
            {portfolio.heading}
          </h2>
          <p className="lede">{portfolio.text}</p>
        </div>
        <Placeholder
          className="portfolio__visual"
          label="Visual: pasta de portfólio com documentos e registros"
          ratio="4 / 3"
        />
      </div>
    </Section>
  )
}
