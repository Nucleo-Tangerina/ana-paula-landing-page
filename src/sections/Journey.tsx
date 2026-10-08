import type React from 'react'
import {
  Check,
  Minus,
  HandHeart,
  HeartHandshake,
  School,
  Presentation,
  BookOpen,
  Accessibility,
  Scale,
  Brain,
  MessagesSquare,
  Puzzle,
  HandHelping,
  ShieldCheck,
  Lightbulb,
  Compass,
  Sprout,
  Target,
  Users,
} from 'lucide-react'
import { transformation, solution, pillars, benefits, audience } from '../content'
import { Button, Chip, Section, TwoTone } from '../components/ui'
import { toneAt } from '../components/tones'
import './Journey.css'

// Blocks 06–10: from the shift the visitor wants to the course that makes it.

export function Transformation() {
  return (
    <Section className="shift" labelledBy="shift-title">
      <div className="shift__intro">
        <h2 id="shift-title" className="heading">
          <TwoTone text={transformation.heading} />
        </h2>
        <p className="lede">{transformation.text}</p>
      </div>

      <div className="shift__pair" data-reveal>
        <div className="shift__col shift__col--before">
          <h3 className="shift__label">Antes</h3>
          <ul role="list">
            {transformation.before.map((t) => (
              <li key={t}>
                <Minus size={18} strokeWidth={1.5} aria-hidden />
                {t}
              </li>
            ))}
          </ul>
        </div>
        <div className="shift__col shift__col--after">
          <h3 className="shift__label">Depois</h3>
          <ul role="list">
            {transformation.after.map((t) => (
              <li key={t}>
                <Check size={18} strokeWidth={2} aria-hidden />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}

export function Solution() {
  return (
    <Section id="formacao" tone="paper" className="solution" labelledBy="solution-title">
      <div className="solution__grid">
        <h2 id="solution-title" className="solution__title">
          {solution.heading}
          <span>{solution.subheading}</span>
        </h2>
        <p className="lede solution__lede">{solution.text}</p>
      </div>

      {/* The method is this band's picture: four steps across the whole rail. */}
      <ol className="method" aria-label="Método da formação" data-reveal>
        {solution.method.map((m, i) => (
          <li key={m} className={i === solution.method.length - 1 ? 'is-goal' : ''}>
            {m}
          </li>
        ))}
      </ol>
    </Section>
  )
}

const PILLAR_ICONS = [Scale, Brain, MessagesSquare, Puzzle, HandHelping]

export function Pillars() {
  return (
    <Section className="pillars" labelledBy="pillars-title">
      <h2 id="pillars-title" className="heading">
        <TwoTone text={pillars.heading} />
      </h2>
      <p className="lede">{pillars.lede}</p>

      <ol className="pillars__row" data-reveal>
        {pillars.items.map((p, i) => (
          <li key={p.title} className={`pillars__item tone-${toneAt(i)}`}>
            <Chip icon={PILLAR_ICONS[i]} />
            <h3 className="pillars__title">{p.title}</h3>
            <p>{p.text}</p>
          </li>
        ))}
      </ol>

      <Button variant="secondary" href="#conteudo" className="pillars__cta">
        {pillars.cta}
      </Button>
    </Section>
  )
}

const BENEFIT_ICONS = [ShieldCheck, Lightbulb, Users, Target, Compass, Sprout]

export function Benefits() {
  return (
    <Section tone="paper" className="benefits" labelledBy="benefits-title">
      <h2 id="benefits-title" className="heading benefits__heading">
        <TwoTone text={benefits.heading} />
      </h2>
      <dl className="benefits__grid" data-reveal>
        {benefits.items.map((b, i) => (
          <div key={b.title} className={`benefits__item tone-${toneAt(i)}`} style={{ '--i': i } as React.CSSProperties}>
            <Chip icon={BENEFIT_ICONS[i]} />
            <dt>{b.title}</dt>
            <dd>{b.text}</dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}

const AUDIENCE_ICONS = [HandHeart, HeartHandshake, School, Presentation, BookOpen, Accessibility]

export function Audience() {
  const [lead, tail] = audience.highlight.split(': ')
  return (
    <Section id="para-quem" className="audience" labelledBy="audience-title">
      <div className="audience__grid">
        <h2 id="audience-title" className="heading audience__heading">
          <TwoTone text={audience.heading} />
        </h2>
        <ul role="list" className="audience__list" data-reveal>
          {audience.items.map((a, i) => {
            const Icon = AUDIENCE_ICONS[i]
            return (
              <li key={a} className={`tone-${toneAt(i)}`}>
                <Chip icon={Icon} size="sm" />
                {a}
              </li>
            )
          })}
        </ul>
      </div>
      <p className="audience__highlight">
        {lead}: <strong>{tail}</strong>
      </p>
    </Section>
  )
}
