import { createBrowserRouter, Outlet } from 'react-router-dom'
import Home from '../pages/home/Home'
import About from '../pages/about/About'
import Login from '../pages/login/Login'
import Register from '../pages/register/Register'
import Contact from '../pages/contact/Contact'
import Products from '../pages/products/Products'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Detail from '../pages/detail/Detail'
import Cart from '../pages/cart/Cart'

const Layout = () => {
  return (
    <div className="main">
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/happy-bakery-website',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'register',
        element: <Register />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'products',
        element: <Products />
      },
      {
        path: 'products/:id',
        element: <Detail />
      },
      {
        path: 'cart',
        element: <Cart />
      }
    ]
  }
])

export default router
