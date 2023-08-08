import { Outlet } from 'react-router-dom'
import AdminNavbar from '../components/navbar/AdminNavbar'
import AdminFooter from '../components/footer/AdminFooter'
import Header from '../components/header/Header'

const AdminLayout = () => {
  return (
    <div className="admin">
      <AdminNavbar />
      <div className="adminContainer">
        <Header />
        <Outlet />
        <AdminFooter />
      </div>
    </div>
  )
}

export default AdminLayout
