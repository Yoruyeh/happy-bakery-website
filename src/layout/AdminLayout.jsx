import { Outlet } from 'react-router-dom'
import AdminNavbar from '../components/navbar/AdminNavbar'
import AdminFooter from '../components/footer/AdminFooter'
import Header from '../components/header/Header'
import { AdminProvider } from '../context/AdminContext'
import { AdminProductsProvider } from '../context/AdminProductContext'

const AdminLayout = () => {
  return (
    <AdminProvider>
      <AdminProductsProvider>
        <div className="admin">
          <AdminNavbar />
          <div className="adminContainer">
            <Header />
            <div className="outlet">
              <Outlet />
            </div>
            <AdminFooter />
          </div>
        </div>
      </AdminProductsProvider>
    </AdminProvider>
  )
}

export default AdminLayout
