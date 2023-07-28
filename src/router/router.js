import * as React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/home/Home'
import About from '../pages/about/About'
import Login from '../pages/login/Login'
import Register from '../pages/register/Register'
import Contact from '../pages/contact/Contact'
import Products from '../pages/products/Products'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/contact',
    element: <Contact />
  },
  {
    path: '/products',
    element: <Products />
  }
])

export default router
