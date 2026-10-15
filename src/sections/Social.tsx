import { useState } from 'react'
import { Play } from 'lucide-react'
import { video, testimonials } from '../content'
import { Section, TwoTone } from '../components/ui'
import './Social.css'

/** Right after the first fold: a 16:9 stage for the presentation video. */
export function Video() {
  const [playing, setPlaying] = useState(false)
  return (
    <Section tone="ground" className="video" labelledBy="video-title">
      <h2 id="video-title" className="heading video__heading">
        <TwoTone text={video.heading} />
      </h2>
      <div className="video__frame">
        {playing ? (
          <iframe
            src={`${video.src}&autoplay=1`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button type="button" className="video__cover" onClick={() => setPlaying(true)} aria-label={`Assistir: ${video.title}`}>
            <img src={video.poster} alt="" loading="lazy" decoding="async" />
            <span className="video__play" aria-hidden>
              <Play size={30} strokeWidth={1.75} fill="currentColor" />
            </span>
          </button>
        )}
      </div>
    </Section>
  )
}

/** Students' own words: real prints, then their videos, on a magenta stage. */
export function Testimonials() {
  return (
    <Section id="depoimentos" stage="magenta" className="voices" labelledBy="voices-title">
      <div className="voices__head">
        <h2 id="voices-title" className="heading">
          <TwoTone text={testimonials.heading} />
        </h2>
        <p className="voices__lede">{testimonials.lede}</p>
      </div>

      <ul role="list" className="voices__prints" data-reveal>
        {testimonials.prints.map((p) => (
          <li key={p.src} className="voices__print">
            <img src={p.src} alt={p.alt} width={p.width} height={p.height} loading="lazy" decoding="async" />
          </li>
        ))}
      </ul>

      <h3 className="voices__sub">{testimonials.videosLabel}</h3>
      <ul role="list" className="voices__videos">
        {testimonials.videos.map((src, i) => (
          <li key={src} className="voices__video">
            {/* #t=0.1 makes iOS paint the first frame as the poster. */}
            <video src={`${src}#t=0.1`} controls playsInline preload="metadata" aria-label={`Depoimento em vídeo ${i + 1}`} />
          </li>
        ))}
      </ul>
    </Section>
  )
}
