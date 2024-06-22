import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { RouterProvider } from 'react-router-dom'
import { router } from './router/index.jsx'
import HostelProvider from './context/HostelProvider.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HostelProvider>
      <RouterProvider router={router}/>
    </HostelProvider>
  </React.StrictMode>,
)