import { createContext, useContext, useState } from "react";

const defaultAdminContext = {
  isAuthenticated: false,
  logout: null,
}

const AdminContext = createContext(defaultAdminContext)

export const useAdmin = () => useContext(AdminContext)

export const AdminProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)


  return (
    <AdminContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
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