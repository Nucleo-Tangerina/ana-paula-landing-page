import { pain } from '../content'
import { CircleHelp, ShieldQuestion, Lightbulb, UserCheck } from 'lucide-react'
import { Chip, Section, TwoTone } from '../components/ui'
import { toneAt } from '../components/tones'
import './Pain.css'

const PAIN_ICONS = [CircleHelp, ShieldQuestion, Lightbulb, UserCheck]

// The doubts, set as white cards on a purple stage: the visitor reads their own questions.
export function Pain() {
  return (
    <Section stage="purple" className="pain" labelledBy="pain-title">
      <div className="pain__grid">
        <div>
          <p className="pain__lede">{pain.lede}</p>
          <h2 id="pain-title" className="heading pain__heading">
            <TwoTone text={pain.heading} />
          </h2>
        </div>

        <ul role="list" className="pain__list" data-reveal>
          {pain.items.map((p, i) => (
            <li key={p.question} className={`pain__item tone-${toneAt(i)}`}>
              <Chip icon={PAIN_ICONS[i]} size="sm" />
              <div>
                <h3 className="pain__question">{p.question}</h3>
                <p className="pain__voice">“{p.voice}”</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <p className="pain__closing">
        {pain.closing[0]}
        <strong>{pain.closing[1]}</strong>
      </p>
    </Section>
  )
}
