import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// pages
import Home from './Pages/Home/index.jsx'
import Login from './Pages/Login/index.jsx'
import Profile from './Pages/Home/Profile.jsx'
import About from './Pages/Home/About.jsx'
import Todos from './Pages/Todos/index.jsx'
//components

// Setup React Router Dom
// 1.import
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

// Define Route Path
const route = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path:'/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/profile',
        element: <Profile />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/todos',
        element: <Todos />
      }
    ]
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={route} />
)
