import { createContext, useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AdminCheckPermission } from "../api/admin.auth";

const defaultAdminContext = {
  isAuthenticated: false,
  logout: null,
}

const AdminContext = createContext(defaultAdminContext)

export const useAdmin = () => useContext(AdminContext)

export const AdminProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const checkTokenIsValid = async () => {
      const token = localStorage.getItem('token')
      if (!token) {
        setIsAuthenticated(false)
        return
      }

      const { success } = await AdminCheckPermission(token)

      if (success) {
        setIsAuthenticated(true)
      } else {
        setIsAuthenticated(false)
      }
    }
    checkTokenIsValid()
  }, [pathname])


  return (
    <AdminContext.Provider
      value={{
        isAuthenticated,
        logout: () => {
          localStorage.removeItem('token')
          setIsAuthenticated(false)
        }
      }}
    >
      {children}
    </AdminContext.Provider>
  )
}