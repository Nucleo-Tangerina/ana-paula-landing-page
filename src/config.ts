const env = import.meta.env

// Every CTA routes here. Until a checkout link exists, CTAs scroll to the offer.
// The Wix build sets it from the custom element's `checkout-url` attribute.
export let CHECKOUT_URL: string = env.VITE_CHECKOUT_URL || '#oferta'

export function setCheckoutUrl(url: string | null) {
  if (url) CHECKOUT_URL = url
}

export const META_PIXEL_ID: string | undefined = env.VITE_META_PIXEL_ID || undefined
export const GTM_ID: string | undefined = env.VITE_GTM_ID || undefined
