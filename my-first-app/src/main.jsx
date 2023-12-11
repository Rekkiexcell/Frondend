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
import Register from "./Pages/Home/Register/index.jsx"
import Login from './Pages/Login/Login.jsx'
import DetailProduct from './Pages/DetailProduct/index.jsx'

const router = createBrowserRouter([
  { 
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/login", 
        element: <Login />
      },
      {
        path:'/detail-product/:slug',
        element: <DetailProduct />
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)