import { createContext, useContext, useState, useEffect } from 'react'
import { AdminGetOrders } from '../api/admin.orders'

const defaultAdminOrdersContext = {
  adminOrders: null,
}

const AdminOrdersContext = createContext(defaultAdminOrdersContext)

export const useAdminOrders = () => useContext(AdminOrdersContext)

export const AdminOrdersProvider = ({ children }) => {
  const [adminOrders, setAdminOrders] = useState([])
  
  useEffect(() => {
    const AdminGetOrdersAsync = async () => {
      const { orders } = await AdminGetOrders({ page: 1, startDate: '', endDate: ''})
      setAdminOrders(orders)
    }
    AdminGetOrdersAsync()
  }, [])


  return (
    <AdminOrdersContext.Provider
      value={{
        adminOrders
      }}
    >
      {children}
    </AdminOrdersContext.Provider>
  )
}
