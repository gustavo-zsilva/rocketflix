import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import { MovieProvider } from './contexts/MovieContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MovieProvider>
      <App />
    </MovieProvider>
  </React.StrictMode>,
)
