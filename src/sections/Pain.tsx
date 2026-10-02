import { pain } from '../content'
import { Placeholder, Section } from '../components/ui'
import './Pain.css'

export function Pain() {
  return (
    <Section tone="paper" className="pain" labelledBy="pain-title">
      <div className="pain__grid">
        <Placeholder
          className="pain__photo"
          label="Foto: mediadora acompanhando um aluno em atividade na sala de aula"
          ratio="16 / 10"
        />
        <div>
          <h2 id="pain-title" className="heading pain__heading">
            {pain.heading}
          </h2>
          <p className="lede">{pain.lede}</p>
        </div>
      </div>

      <ul role="list" className="pain__list" data-reveal>
        {pain.items.map((p) => (
          <li key={p.question} className="pain__item">
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
