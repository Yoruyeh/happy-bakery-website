import Navbar from "../components/navbar/Navbar"
import Footer from "../components/footer/Footer"
import { Outlet } from "react-router-dom"


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

export default Layout