import Navbar from "../components/navbar/Navbar"
import Footer from "../components/footer/Footer"
import { Outlet } from "react-router-dom"
import { AuthProvider } from "../context/AuthContext"
import { ProductsProvider } from '../context/ProductsContext'
import { UserOrdersProvider } from '../context/OrdersContext'
import { UserCartItemsProvider } from "../context/CartContext"


const Layout = () => {
  return (
    <AuthProvider>
      <ProductsProvider>
        <UserCartItemsProvider>
          <UserOrdersProvider>
            <div className="main">
              <Navbar />
              <div className="container">
                <Outlet />
              </div>
              <Footer />
            </div>
          </UserOrdersProvider>
        </UserCartItemsProvider>
      </ProductsProvider>
    </AuthProvider>
  )
}

export default Layout