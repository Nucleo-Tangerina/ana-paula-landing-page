import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Absolute URLs in index.html (canonical, og:*) read this; empty until the domain exists.
process.env.VITE_SITE_URL ??= ''

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
