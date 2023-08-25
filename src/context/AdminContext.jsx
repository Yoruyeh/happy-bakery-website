import { createContext, useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AdminGetAllProducts } from "../api/admin.products";

const defaultAdminContext = {
  isAuthenticated: false,
  adminInfo: null,
  logout: null,
  adminProducts: null
}

const AdminContext = createContext(defaultAdminContext)

export const useAdmin = () => useContext(AdminContext)

export const AdminProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const { pathname } = useLocation()
  const [adminProducts, setAdminProducts] = useState([])

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
    const AdminGetAllProductsAsync = async () => {
      const { products } = await AdminGetAllProducts({id: ''})
      setAdminProducts(products)
    }
    AdminGetAllProductsAsync()
  }, [])

  return (
    <AdminContext.Provider
      value={{
        isAuthenticated,
        logout: () => {
          localStorage.removeItem('token')
          setIsAuthenticated(false)
        },
        adminProducts
      }}
    >
      {children}
    </AdminContext.Provider>
  )
}