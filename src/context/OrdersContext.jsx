import { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "./AuthContext";
import { GetUserOrders } from "../api/user.auth";

const defaultUserOrdersContext = {
  orders: null,
  orderDetail: null
}

const UserOrdersContext = createContext(defaultUserOrdersContext)

export const useUserOrders = () => useContext(UserOrdersContext)

export const UserOrdersProvider = ({ children }) => {
  const { isAuthenticated } = useAuth()
  const [userOrders, setUserOrders] = useState([])

  useEffect(() => {
    if (isAuthenticated) {
      const GetUserOrdersAsync = async () => {
        const { userOrders } = await GetUserOrders()
        setUserOrders(userOrders)
      }
      GetUserOrdersAsync()
    }
  }, [isAuthenticated])

  return (
    <UserOrdersContext.Provider value={{ userOrders }}>
      {children}
    </UserOrdersContext.Provider>
  )
}