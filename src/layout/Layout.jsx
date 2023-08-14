import Navbar from "../components/navbar/Navbar"
import Footer from "../components/footer/Footer"
import { Outlet } from "react-router-dom"
import { AuthProvider } from "../context/AuthContext"
import { ProductsProvider } from '../context/ProductsContext'


const Layout = () => {
  return (
    <AuthProvider>
      <ProductsProvider>
        <div className="main">
          <Navbar />
          <div className="container">
            <Outlet />
          </div>
          <Footer />
        </div>
      </ProductsProvider>
    </AuthProvider>
  )
}

export default Layout