import { createBrowserRouter } from 'react-router-dom'
import {
  Layout,
  Home,
  About,
  Login,
  Register,
  Contact,
  Products,
  ProductDetail,
  OrderDetail,
  Cart,
  Shipment,
  Payment,
  Finish,
  Setting,
  Orders,
  Tab,
  Edit,
  Coupon,
  Wishlist,
  AdminLayout,
  Dashboard
} from './index'


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
        element: <ProductDetail />
      },
      {
        path: 'cart',
        element: <Cart />
      },
      {
        path: 'shipment',
        element: <Shipment />
      },
      {
        path: 'payment',
        element: <Payment />
      },
      {
        path: 'finish',
        element: <Finish />
      },
      {
        path: 'edit',
        element: <Edit />
      },
      {
        path: 'member',
        element: <Tab />,
        children: [
          {
            index: true,
            path: 'setting',
            element: <Setting />
          },
          {
            path: 'orders',
            element: <Orders />
          },
          {
            path: 'coupon',
            element: <Coupon />
          },
          {
            path: 'wishlist',
            element: <Wishlist />
          },
          {
            path: 'orders/:id',
            element: <OrderDetail />
          }
        ]
      }
    ]
  },
  {
    path: '/happy-bakery-website/admin',
    element: <AdminLayout />,
    children: [
      {
        path: 'dashboard',
        element: <Dashboard />
      }
    ]
  }
])

export default router
