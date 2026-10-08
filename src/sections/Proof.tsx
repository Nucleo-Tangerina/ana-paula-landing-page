import {
  CirclePlay,
  Smartphone,
  Video,
  Hourglass,
  Award,
  Plus,
  GraduationCap,
  School,
  Landmark,
  Presentation,
  Microscope,
  BookOpen,
  Quote,
} from 'lucide-react'
import { author, study, curriculum, portfolio } from '../content'
import { Chip, Section, TwoTone } from '../components/ui'
import { toneAt } from '../components/tones'
import autora from '../assets/ana-autora.webp'
import './Proof.css'

// Blocks 11, 12, 14, 15, 16: who teaches, how it's studied, what's inside.

const CREDENTIAL_ICONS = [GraduationCap, School, Landmark, Presentation, Microscope, BookOpen]

export function Author() {
  return (
    <Section tone="paper" className="author" labelledBy="author-title">
      <div className="author__grid">
        <div className="author__photo">
        <img
          className="author__portrait"
          src={autora}
          alt={author.portraitAlt}
          width={880}
          height={1208}
          loading="lazy"
          decoding="async"
        />
        </div>
        <div>
          <h2 id="author-title" className="author__name">
            {author.heading}
          </h2>
          <p className="author__sub">{author.subheading}</p>
          <p className="author__bio">{author.bio}</p>

          <ul role="list" className="credentials" data-reveal>
            {author.credentials.map((c, i) => (
              <li key={c} className={`tone-${toneAt(i)}`}>
                <Chip icon={CREDENTIAL_ICONS[i]} size="sm" />
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <figure className="author__quote" data-reveal>
        <Quote className="author__quote-mark" size={44} strokeWidth={1.25} aria-hidden />
        <blockquote>
          <p>{author.quote.text}</p>
        </blockquote>
        <figcaption>{author.quote.by}</figcaption>
      </figure>
    </Section>
  )
}

const STUDY_ICONS = [CirclePlay, Smartphone, Video, Hourglass, Award]

export function Study() {
  return (
    <Section className="study" labelledBy="study-title">
      <div className="study__grid">
        <h2 id="study-title" className="heading study__heading">
          <TwoTone text={study.heading} />
        </h2>
        <ul role="list" className="study__list" data-reveal>
          {study.items.map((s, i) => {
            const Icon = STUDY_ICONS[i]
            return (
              <li key={s.title} className={`tone-${toneAt(i)}`}>
                <Chip icon={Icon} size="sm" />
                <div>
                  <strong>{s.title}</strong>
                  <span>{s.text}</span>
                </div>
              </li>
            )
          })}
        </ul>
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
            <TwoTone text={curriculum.heading} />
          </h2>
          <p className="lede">{curriculum.lede}</p>
        </div>

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
      </div>
    </Section>
  )
}

export function Portfolio() {
  return (
    <Section className="portfolio" labelledBy="portfolio-title">
      <div className="portfolio__panel" data-reveal>
        <h2 id="portfolio-title" className="heading">
          <TwoTone text={portfolio.heading} />
        </h2>
        <p className="lede">{portfolio.text}</p>
      </div>
    </Section>
  )
}
