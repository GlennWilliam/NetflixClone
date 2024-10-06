import React from 'react'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import ReactDOM from 'react-dom/client'

import Landing from './pages/Landing'
import Browse from './pages/Browse'
import Watch from './pages/Watch'
import Register from './pages/Register'
import Login from './pages/Login'
import Favorite from './pages/Favorite'                                                                                                                                                                                                                                       

import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />
  },
  {
    path: "/browse",
    element: <Browse />
  },
  {
    path: "/watch/:id",
    element: <Watch />
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
    path: "/favorite",
    element: <Favorite />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)