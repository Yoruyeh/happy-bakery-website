import { createBrowserRouter } from 'react-router-dom'
import {
  Layout,
  Home,
  About,
  Login,
  Register,
  Contact,
  Products,
  Detail,
  Cart,
  Shipment,
  Payment,
  Finish,
  MemberSetting,
  MemberOrders,
  Tab
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
        element: <Detail />
      },
      {
        path: 'order',
        children: [
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
          }
        ]
      },
      {
        path: 'member',
        element: <Tab />,
        children: [
          {
            index: true,
            path: 'setting',
            element: <MemberSetting />
          },
          {
            path: 'orders',
            element: <MemberOrders />
          }
        ]
      }
    ]
  }
])

export default router
