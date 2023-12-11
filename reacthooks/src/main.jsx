import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

// Pages
import App from './App.jsx'
import Home from './Pages/Home';
import Profile from './Pages/Profile/Index';
import Hooks from './Pages/Hooks/Index.jsx'

const router = createBrowserRouter([
  { 
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/profile",
        element: <Profile />
      },
      {
        path: "/hooks",
        element: <Hooks />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <RouterProvider router={router} />

)