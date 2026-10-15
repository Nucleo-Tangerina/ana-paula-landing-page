import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource-variable/lexend'
import '@fontsource/young-serif/latin-400.css'
import './styles/tokens.css'
import './styles/base.css'
import App from './App.tsx'
import { initTracking } from './track'

initTracking()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
