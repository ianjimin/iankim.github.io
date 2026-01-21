import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

console.log('Starting React app...')

const rootElement = document.getElementById('root')

if (!rootElement) {
  console.error('❌ Root element not found!')
  document.body.innerHTML = '<div style="padding: 20px; color: red;">Error: Root element not found!</div>'
} else {
  console.log('✅ Root element found, mounting React app...')
  try {
    const root = ReactDOM.createRoot(rootElement)
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    )
    console.log('✅ React app mounted successfully!')
  } catch (error) {
    console.error('❌ Error mounting React app:', error)
    rootElement.innerHTML = `<div style="padding: 20px; color: red;">Error: ${error.message}</div>`
  }
}
