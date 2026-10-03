import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Absolute URLs in index.html (og:*) read this. On Netlify it falls back to the
// site's own URL, which Netlify exposes to every build as URL.
process.env.VITE_SITE_URL ??= process.env.URL ?? ''

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
