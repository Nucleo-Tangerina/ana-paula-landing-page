import { useRef } from 'react'
import { useReveal } from './useReveal'
import { PageThread } from './components/PageThread'
import { Header } from './sections/Header'
import { Hero } from './sections/Hero'
import { Pain } from './sections/Pain'
import { BigIdea } from './sections/BigIdea'
import { Transformation, Solution, Pillars, Benefits, Audience } from './sections/Journey'
import { Author, Study, Curriculum, Portfolio } from './sections/Proof'
import { Video, Testimonials } from './sections/Social'
import { Offer, Guarantee, Objections, Faq, Closing, Footer } from './sections/Close'

// Sections in block order (PAG - ANA PAULA.pdf, 01–23). Block 03 lives in Hero.
export default function App() {
  const main = useRef<HTMLElement>(null)
  useReveal(main)
  return (
    <>
      <a className="skip-link" href="#conteudo-principal">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo-principal" className="page" ref={main}>
        <Hero />
        <Video />
        <Pain />
        <BigIdea />
        <Transformation />
        <Solution />
        <Pillars />
        <Benefits />
        <Audience />
        <Author />
        <Testimonials />
        <Study />
        <Curriculum />
        <Portfolio />
        <Offer />
        <Guarantee />
        <Objections />
        <Faq />
        <Closing />
        <PageThread />
      </main>
      <Footer />
    </>
  )
}
