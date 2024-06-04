import React from 'react'
import ReactDOM from 'react-dom/client'
import { ErrorBoundary } from 'react-error-boundary'

import './index.scss'
import App from './App'
import ErrorFallback from 'components/core/ErrorFallback/ErrorFallback'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <ErrorBoundary
      fallback={
        <ErrorFallback
          message="Sorry, something went wrong..."
          className="fullscreen flex-center"
        />
      }
    >
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
)
