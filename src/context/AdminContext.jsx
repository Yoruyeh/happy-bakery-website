import { createContext, useContext, useState } from "react";

const defaultAdminContext = {
  isAuthenticated: false,
  logout: null,
}

const AdminContext = createContext(defaultAdminContext)

export const useAdmin = () => useContext(AdminContext)

export const AdminProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    Boolean(sessionStorage.getItem('token')) || Boolean(localStorage.getItem('token'))
    )

  return (
    <AdminContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        logout: () => {
          sessionStorage?.removeItem('token')
          localStorage?.removeItem('token')
          setIsAuthenticated(false)
        }
      }}
    >
      {children}
    </AdminContext.Provider>
  )
}