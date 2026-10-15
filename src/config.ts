const env = import.meta.env

// Every CTA routes here. VITE_CHECKOUT_URL overrides the Ticto checkout.
export const CHECKOUT_URL: string = env.VITE_CHECKOUT_URL || 'https://payment.ticto.app/O15C67760'

export const META_PIXEL_ID: string | undefined = env.VITE_META_PIXEL_ID || undefined
export const GTM_ID: string | undefined = env.VITE_GTM_ID || undefined
