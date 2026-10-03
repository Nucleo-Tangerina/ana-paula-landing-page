import { bigIdea, offer } from '../content'
import { Section } from '../components/ui'
import { Thread } from '../components/Thread'
import './BigIdea.css'

// The thread's crossing is the "≠": it leaves one statement and arrives at the other.
export function BigIdea() {
  const [lead, rest] = bigIdea.closing.split(offer.name)
  return (
    <Section tone="lacquer" className="idea" labelledBy="idea-title">
      <h2 id="idea-title" className="idea__lede">
        {bigIdea.lede}
      </h2>

      <div className="idea__span">
        <div className="idea__thread">
          <Thread variant="bridge" />
        </div>

        <div className="idea__side">
          <p className="idea__title">{bigIdea.know.title}</p>
          <p className="idea__text">{bigIdea.know.text}</p>
        </div>

        <div className="idea__cross" aria-hidden>
          <Thread variant="bridge-v" />
        </div>
        <span className="visually-hidden">não é o mesmo que</span>

        <div className="idea__side idea__side--act">
          <p className="idea__title">{bigIdea.act.title}</p>
          <p className="idea__text">{bigIdea.act.text}</p>
        </div>
      </div>

      <p className="idea__closing">
        {lead}
        <strong>{offer.name}</strong>
        {rest}
      </p>
    </Section>
  )
}
