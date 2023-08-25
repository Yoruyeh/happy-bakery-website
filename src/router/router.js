import { createBrowserRouter, Navigate } from 'react-router-dom'
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
  AdminLogin,
  Dashboard,
  AdminAllProducts,
  AdminOrders,
  AdminOrderDetail,
  AdminProductDetail,
  AdminAddProduct,
  AdminEdit,
  Blog
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
        path: 'blog',
        element: <Blog />
      },
      {
        path: 'products',
        children: [
          {
            index: true,
            element: (
              <Navigate to="/happy-bakery-website/products/all" replace />
            )
          },
          {
            path: ':category',
            element: <Products />
          },
          {
            path: ':category/:id',
            element: <ProductDetail />
          }
        ]
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
            element: (
              <Navigate to="/happy-bakery-website/member/setting" replace />
            )
          },
          {
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
    path: '/happy-bakery-website/admin/login',
    element: <AdminLogin />
  },
  {
    path: '/happy-bakery-website/admin',
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/happy-bakery-website/admin/dashboard" replace />
      },
      {
        path: 'dashboard',
        element: <Dashboard />
      },
      {
        path: 'all_products',
        element: <AdminAllProducts />
      },
      {
        path: 'all_products/new',
        element: <AdminAddProduct />
      },
      {
        path: ':category',
        element: <AdminAllProducts />,
      },
      {
        path: ':category/:id',
        element: <AdminProductDetail />
      },
      {
        path: 'orders',
        element: <AdminOrders />
      },
      {
        path: 'orders/:id',
        element: <AdminOrderDetail />
      },
      {
        path: 'setting',
        element: <AdminEdit />
      }
    ]
  }
])

export default router
