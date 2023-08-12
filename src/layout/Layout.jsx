import Navbar from "../components/navbar/Navbar"
import Footer from "../components/footer/Footer"
import { Outlet } from "react-router-dom"
import { AuthProvider } from "../context/AuthContext"


const Layout = () => {
  return (
    <AuthProvider>
      <div className="main">
        <Navbar />
        <div className="container">
          <Outlet />
        </div>
        <Footer />
      </div>
    </AuthProvider>
  )
}

export default Layout