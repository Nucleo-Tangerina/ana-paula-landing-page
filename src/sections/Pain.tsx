import { pain } from '../content'
import { CircleHelp, ShieldQuestion, Lightbulb, UserCheck } from 'lucide-react'
import { Chip, Section } from '../components/ui'
import { toneAt } from '../components/tones'
import './Pain.css'

const PAIN_ICONS = [CircleHelp, ShieldQuestion, Lightbulb, UserCheck]

export function Pain() {
  return (
    <Section tone="paper" className="pain" labelledBy="pain-title">
      <div className="pain__grid">
        <h2 id="pain-title" className="heading pain__heading">
          {pain.heading}
        </h2>
        <p className="lede pain__lede">{pain.lede}</p>
      </div>

      <ul role="list" className="pain__list" data-reveal>
        {pain.items.map((p, i) => (
          <li key={p.question} className={`pain__item tone-${toneAt(i)}`}>
            <Chip icon={PAIN_ICONS[i]} size="sm" />
            <h3 className="pain__question">{p.question}</h3>
            <p className="pain__voice">“{p.voice}”</p>
          </li>
        ))}
      </ul>

      <p className="pain__closing">
        {pain.closing[0]}
        <strong>{pain.closing[1]}</strong>
      </p>
    </Section>
  )
}
