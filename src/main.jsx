import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home.jsx'
import './index.css'
import About from './Components/About.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element:<Home></Home>
  },
  {
    path:'/about',
    element:<About></About>
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}></RouterProvider>
)
