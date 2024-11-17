import { createRoot } from 'react-dom/client'
import { Suspense } from "react"
import './index.css'
import Root from './root.js'

createRoot(document.getElementById('root')!).render(
  <Suspense fallback={<p>Loading...</p>}>
    <Root />
  </Suspense>
)
