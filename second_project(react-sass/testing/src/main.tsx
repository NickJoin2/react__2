import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/all.scss'
import './components/Nav'
import  './components/Header'
import  './components/Select'
import './components/Hero'
import  './components/Package'
import './components/Team'
import './components/Footer'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
