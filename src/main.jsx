import React from 'react'
import { createRoot } from 'react-dom/client'

/* Reads a required variable with no default and no fallback. An import that
   reports "ready" without flagging VITE_API_URL has not actually understood
   this app. */
const API = import.meta.env.VITE_API_URL

function App() {
  return (
    <main style={{ fontFamily: 'system-ui, sans-serif', padding: 40 }}>
      <h1>BossWright Messy Import Fixture</h1>
      <p>Configured API base: {API}</p>
    </main>
  )
}

createRoot(document.getElementById('root')).render(<App />)
