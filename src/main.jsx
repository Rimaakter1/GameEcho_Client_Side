import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './route/router'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './components/AuthProvider/AuthProvider'
import 'react-tooltip/dist/react-tooltip.css'
import '@smastrom/react-rating/style.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />

    </AuthProvider>

  </StrictMode>
)
