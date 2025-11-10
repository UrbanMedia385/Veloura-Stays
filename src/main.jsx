import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HeadProvider } from "react-head";
import { Analytics } from '@vercel/analytics/react';

createRoot(document.getElementById('root')).render(
  <HeadProvider>
    <Analytics />
    <App />
  </HeadProvider>
)
