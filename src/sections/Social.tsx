import { Play, Quote } from 'lucide-react'
import { video, testimonials } from '../content'
import { Section, TwoTone } from '../components/ui'
import './Social.css'

/** Right after the first fold: a 16:9 stage for the presentation video. */
export function Video() {
  return (
    <Section tone="ground" className="video" labelledBy="video-title">
      <h2 id="video-title" className="heading video__heading">
        <TwoTone text={video.heading} />
      </h2>
      <div className="video__frame">
        {video.src ? (
          <iframe
            src={video.src}
            title={video.title}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div className="video__soon" role="img" aria-label={video.soon}>
            <span className="video__play" aria-hidden>
              <Play size={30} strokeWidth={1.75} fill="currentColor" />
            </span>
            <span className="video__label">{video.soon}</span>
          </div>
        )}
      </div>
    </Section>
  )
}

/** Students' own words on a magenta stage, each in a white card. */
export function Testimonials() {
  return (
    <Section id="depoimentos" stage="magenta" className="voices" labelledBy="voices-title">
      <div className="voices__head">
        <h2 id="voices-title" className="heading">
          <TwoTone text={testimonials.heading} />
        </h2>
        <p className="voices__lede">{testimonials.lede}</p>
      </div>

      <ul role="list" className="voices__list" data-reveal>
        {testimonials.items.map((t) => (
          <li key={t.name} className="voices__card">
            <Quote className="voices__mark" size={28} strokeWidth={1.5} aria-hidden />
            <blockquote>
              <p>{t.quote}</p>
            </blockquote>
            <footer className="voices__who">
              <span className="voices__avatar" aria-hidden>
                {t.name.replace('@', '').charAt(0).toUpperCase()}
              </span>
              <span>
                <strong>{t.name}</strong>
                <span>{t.source}</span>
              </span>
            </footer>
          </li>
        ))}
      </ul>
    </Section>
  )
}
