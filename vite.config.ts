import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ command, mode }) => {
  // og:* tags in index.html need an absolute URL, or the WhatsApp preview breaks.
  if (command === 'build' && !loadEnv(mode, process.cwd()).VITE_SITE_URL) {
    throw new Error('VITE_SITE_URL is missing: set it in .env.production (see README).')
  }
  return { plugins: [react()] }
})
