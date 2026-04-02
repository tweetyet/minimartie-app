import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/app.css'
import router from './routes/router.jsx'
import { RouterProvider } from 'react-router-dom'
import 'flowbite'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
