import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import About from './Components/About.jsx'
import Cart from './Components/Cart.jsx'
import ErrorPage from './Components/ErrorPage.jsx'
import Home from './Components/Home.jsx'
import Shop from './Components/Shop.jsx'
import './index.css'
import { productAndCartData } from './Loaders/getCart&ProductData.js'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path:'/about',
        element: <About></About>
      },
      {
        path:'/shop',
        element: <Shop></Shop>,
        loader:()=> fetch('products.json'),
      },
      {
        path:'/cart',
        element: <Cart></Cart>,
        loader: productAndCartData,
      }
    ]
  },
  {
    path:'/about',
    element:<About></About>
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}></RouterProvider>
)
