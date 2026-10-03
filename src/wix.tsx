import { createRoot, type Root } from 'react-dom/client'
import App from './App'
import { setCheckoutUrl } from './config'
import lexendLatin from '@fontsource-variable/lexend/files/lexend-latin-wght-normal.woff2'

/**
 * Wix build: the whole page as one custom element, <caminhos-landing>.
 * It renders inside a shadow root so Wix's CSS and the page's CSS never touch.
 * Set the `checkout-url` attribute in the Wix editor to point every CTA at checkout.
 */

// Every stylesheet of the app as a string, in cascade order: tokens, base, primitives, sections.
const sheets = import.meta.glob<string>(['./styles/*.css', './components/*.css', './sections/*.css'], {
  query: '?inline',
  import: 'default',
  eager: true,
})
const order = ['./styles/tokens.css', './styles/base.css']
const CSS = [...order, ...Object.keys(sheets).filter((k) => !order.includes(k))]
  .map((k) => sheets[k])
  .join('\n')
  // Document-level selectors become the shadow host.
  .replace(/:root/g, ':host')
  .replace(/(^|[}\s,])(?:html|body)(?=[\s{,])/g, '$1:host')

// @font-face only works from the document, not from inside a shadow root.
// The latin subset covers Portuguese, so it is the only one shipped.
const FONT = `@font-face{font-family:'Lexend Variable';font-style:normal;font-display:swap;font-weight:100 900;src:url(${lexendLatin}) format('woff2-variations')}`

// In-page links: hash navigation can't see ids inside a shadow root, so scroll by hand.
function onAnchorClick(e: Event) {
  const a = (e.target as Element).closest?.('a[href^="#"]')
  if (!a) return
  const root = a.getRootNode() as ShadowRoot
  const id = a.getAttribute('href')!.slice(1)
  const target = id === 'top' ? root.host : root.getElementById(id)
  if (!target) return
  e.preventDefault()
  const header = root.querySelector('.header')?.getBoundingClientRect().height ?? 0
  const top = target.getBoundingClientRect().top + window.scrollY - (id === 'top' ? 0 : header + 16)
  const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  window.scrollTo({ top, behavior: still ? 'auto' : 'smooth' })
}

class CaminhosLanding extends HTMLElement {
  static observedAttributes = ['checkout-url']
  private root: Root | null = null

  connectedCallback() {
    if (this.root) return
    setCheckoutUrl(this.getAttribute('checkout-url'))
    if (!document.getElementById('caminhos-landing-font')) {
      const font = document.createElement('style')
      font.id = 'caminhos-landing-font'
      font.textContent = FONT
      document.head.append(font)
    }
    const shadow = this.shadowRoot ?? this.attachShadow({ mode: 'open' })
    shadow.replaceChildren()
    const style = document.createElement('style')
    style.textContent = `${CSS}\n:host{display:block;position:relative}`
    const mount = document.createElement('div')
    shadow.append(style, mount)
    shadow.addEventListener('click', onAnchorClick)
    this.root = createRoot(mount)
    this.root.render(<App />)
  }

  attributeChangedCallback(name: string, _old: string | null, value: string | null) {
    if (name !== 'checkout-url') return
    setCheckoutUrl(value)
    this.root?.render(<App />)
  }

  disconnectedCallback() {
    this.shadowRoot?.removeEventListener('click', onAnchorClick)
    this.root?.unmount()
    this.root = null
  }
}

if (!customElements.get('caminhos-landing')) customElements.define('caminhos-landing', CaminhosLanding)
