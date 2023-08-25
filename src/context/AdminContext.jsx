import { createContext, useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AdminGetProducts } from '../api/admin.products'

const defaultAdminContext = {
  isAuthenticated: false,
  adminInfo: null,
  logout: null,
  adminProducts: null,
  productCount: 0,
  handleNavItemClick: () => {}
}

const AdminContext = createContext(defaultAdminContext)

export const useAdmin = () => useContext(AdminContext)

export const AdminProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const { pathname } = useLocation()
  const [adminProducts, setAdminProducts] = useState([])
  const [adminProductCount, setAdminProductCount] = useState(0)

  const handleNavItemClick = async ({ id, page, sort }) => {
    const { products, productCount } = await AdminGetProducts({
      id,
      page,
      sort
    })
    setAdminProducts(products)
    setAdminProductCount(productCount)
  }

  useEffect(() => {
    const checkTokenIsValid = async () => {
      const token = localStorage.getItem('token')
      if(!token) {
        setIsAuthenticated(false)
        return
      } else {
        setIsAuthenticated(true)
      }
    }
    checkTokenIsValid()
  }, [pathname])

  useEffect(() => {
    const AdminGetProductsAsync = async () => {
      const { products, productCount } = await AdminGetProducts({ id: '' })
      setAdminProducts(products)
      setAdminProductCount(productCount)
    }
    AdminGetProductsAsync()
  }, [])


  return (
    <AdminContext.Provider
      value={{
        isAuthenticated,
        logout: () => {
          localStorage.removeItem('token')
          setIsAuthenticated(false)
        },
        adminProducts,
        adminProductCount,
        handleNavItemClick
      }}
    >
      {children}
    </AdminContext.Provider>
  )
}