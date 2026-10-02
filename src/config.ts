const env = import.meta.env

// Every CTA routes here. Until the HeroSpark link exists, CTAs scroll to the offer.
export const CHECKOUT_URL: string = env.VITE_CHECKOUT_URL || '#oferta'

export const META_PIXEL_ID: string | undefined = env.VITE_META_PIXEL_ID || undefined
export const GTM_ID: string | undefined = env.VITE_GTM_ID || undefined
