import { Outlet } from 'react-router-dom'
import AdminNavbar from '../components/navbar/AdminNavbar'
import AdminFooter from '../components/footer/AdminFooter'
import Header from '../components/header/Header'

const AdminLayout = () => {
  return (
    <div className="admin">
        <AdminNavbar />
      <div className="adminContainer">
        <div className="adminHeader">
          <Header />
        </div>
        <div className="adminMain">
          <Outlet />
        </div>
        <div className="adminFooter">
          <AdminFooter />
        </div>
      </div>
    </div>
  )
}

export default AdminLayout
