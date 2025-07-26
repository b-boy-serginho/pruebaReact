// src/main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import PublicRoute from './route/PublicRoute.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>   
    <PublicRoute />     
    {/* <App /> */}
  </StrictMode>
)

