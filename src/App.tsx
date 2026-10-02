import { useReveal } from './useReveal'
import { PageThread } from './components/PageThread'
import { Header } from './sections/Header'
import { Hero } from './sections/Hero'
import { Pain } from './sections/Pain'
import { BigIdea } from './sections/BigIdea'
import { Transformation, Solution, Pillars, Benefits, Audience } from './sections/Journey'
import { Author, Testimonials, Study, Curriculum, Portfolio } from './sections/Proof'
import { Bonuses, Offer, Guarantee, Objections, Faq, Closing, Footer } from './sections/Close'

// Sections in block order (PAG - ANA PAULA.pdf, 01–23). Block 03 lives in Hero.
export default function App() {
  useReveal()
  return (
    <>
      <a className="skip-link" href="#conteudo-principal">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo-principal" className="page">
        <Hero />
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
        <Bonuses />
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
