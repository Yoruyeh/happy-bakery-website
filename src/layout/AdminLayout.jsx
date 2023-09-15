import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import AdminNavbar from '../components/navbar/AdminNavbar'
import AdminFooter from '../components/footer/AdminFooter'
import Header from '../components/header/Header'
import { useAdmin } from '../context/AdminContext'
import { AdminProductsProvider } from '../context/AdminProductsContext'
import { AdminOrdersProvider } from '../context/AdminOrdersContext'
import { useEffect } from 'react'
import { AdminCheckPermission } from '../api/admin.auth'
import Swal from 'sweetalert2'

const AdminLayout = () => {
  const navigate = useNavigate()
  const { isAuthenticated, setIsAuthenticated } = useAdmin()

  const { pathname } = useLocation()

  useEffect(() => {
    const checkTokenIsValid = async () => {
      const token =
        sessionStorage.getItem('token') || localStorage.getItem('token')

      const { success } = await AdminCheckPermission(token)

      if (success) {
        setIsAuthenticated(true)
      } else {
        setIsAuthenticated(false)
      }
    }
    checkTokenIsValid()
  }, [pathname, setIsAuthenticated])

  useEffect(() => {
    if(!isAuthenticated) {
      Swal.fire({
        position: 'top',
        icon: 'warning',
        title: 'Unauthorized! Please Login!',
        showConfirmButton: false,
        timer: 1500
      })
      navigate('/happy-bakery-website/admin/login')
    }
  })

  return (
    isAuthenticated && (
      <AdminOrdersProvider>
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
      </AdminOrdersProvider>
    )
  )
}

export default AdminLayout
