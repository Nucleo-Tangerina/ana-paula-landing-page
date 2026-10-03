import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// One self-contained file for Wix: the custom element, its CSS, the font and the photos.
export default defineConfig({
  plugins: [react()],
  define: { 'process.env.NODE_ENV': '"production"' },
  publicDir: false,
  build: {
    outDir: 'dist-wix',
    emptyOutDir: true,
    assetsInlineLimit: () => true,
    cssCodeSplit: false,
    lib: {
      entry: 'src/wix.tsx',
      formats: ['iife'],
      name: 'CaminhosLanding',
      fileName: () => 'caminhos-landing.js',
    },
  },
})
