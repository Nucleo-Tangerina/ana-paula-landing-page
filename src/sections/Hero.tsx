import { Lock, ShieldCheck, CreditCard } from 'lucide-react'
import { hero, facts, trust } from '../content'
import { Button } from '../components/ui'
import retrato from '../assets/ana-hero.webp'
import { Thread } from '../components/Thread'
import './Hero.css'

const TRUST_ICONS = [Lock, ShieldCheck, CreditCard]

export function Hero() {
  const [before, emphasis, after] = hero.headline
  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="hero__thread">
        <Thread variant="hero" className="hero__thread-desk" />
        <Thread variant="hero-m" className="hero__thread-mob" />
      </div>

      <div className="rail hero__grid">
        <div className="hero__copy">
          <h1 id="hero-title" className="hero__title">
            {before}
            <span className="hero__em">{emphasis}</span>
            {after}
          </h1>
          <p className="hero__deck">{hero.deck}</p>
          <div className="hero__actions">
            <Button cta="hero">{hero.cta}</Button>
            <Button variant="secondary" href="#conteudo">
              {hero.secondary}
            </Button>
          </div>
          <ul role="list" className="hero__trust">
            {trust.map((t, i) => {
              const Icon = TRUST_ICONS[i]
              return (
                <li key={t}>
                  <Icon size={16} strokeWidth={1.5} aria-hidden />
                  {t}
                </li>
              )
            })}
          </ul>
        </div>

        <figure className="hero__portrait">
          <img
            src={retrato}
            alt="Ana Paula Jorge sorrindo, de blazer magenta, com os braços apoiados em uma mesa de madeira"
            width={880}
            height={964}
            fetchPriority="high"
            decoding="async"
          />
          <figcaption className="hero__caption">
            <strong>{hero.portraitCaption.name}</strong>
            <span>{hero.portraitCaption.role}</span>
          </figcaption>
        </figure>
      </div>

      <div className="rail">
        <ul role="list" className="facts" aria-label="A formação em números">
          {facts.map((f) => (
            <li key={f.value} className="facts__item">
              <span className="facts__value">{f.value}</span>
              <span className="facts__detail">{f.detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
