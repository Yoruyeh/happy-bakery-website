import { Outlet } from 'react-router-dom'
import AdminNavbar from '../components/navbar/AdminNavbar'
import AdminFooter from '../components/footer/AdminFooter'
import Header from '../components/header/Header'
import { AdminProvider } from '../context/AdminContext'

const AdminLayout = () => {
  return (
    <AdminProvider>
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
    </AdminProvider>
  )
}

export default AdminLayout
