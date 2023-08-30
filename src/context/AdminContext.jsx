import { createContext, useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const defaultAdminContext = {
  isAuthenticated: false,
  adminInfo: null,
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
      } else {
        setIsAuthenticated(true)
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