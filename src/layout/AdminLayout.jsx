import { Outlet } from 'react-router-dom'
import AdminNavbar from '../components/navbar/AdminNavbar'
import AdminFooter from '../components/footer/AdminFooter'
import Header from '../components/header/Header'
import { AdminProvider } from '../context/AdminContext'
import { AdminProductsProvider } from '../context/AdminProductsContext'
import { AdminOrdersProvider } from '../context/AdminOrdersContext'

const AdminLayout = () => {
  return (
    <AdminProvider>
      <AdminProductsProvider>
        <AdminOrdersProvider>
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
        </AdminOrdersProvider>
      </AdminProductsProvider>
    </AdminProvider>
  )
}

export default AdminLayout
