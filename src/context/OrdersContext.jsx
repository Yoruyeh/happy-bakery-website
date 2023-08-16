import { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "./AuthContext";
import { GetUserOrders } from "../api/user.auth";
import { GetUserOrderById } from '../api/orders'

const defaultUserOrdersContext = {
  userOrders: null,
  handleCheckOrderClick: () => {},
  userOrderDetail: null
}

const UserOrdersContext = createContext(defaultUserOrdersContext)

export const useUserOrders = () => useContext(UserOrdersContext)

export const UserOrdersProvider = ({ children }) => {
  const { isAuthenticated } = useAuth()
  const [userOrders, setUserOrders] = useState([])
  const [userOrderDetail, setUserOrderDetail] = useState({})

  const handleCheckOrderClick = async (id) => {
    const { order } = await GetUserOrderById(id)
    setUserOrderDetail(order)
  }

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
    <UserOrdersContext.Provider
      value={{ userOrders, userOrderDetail, handleCheckOrderClick }}
    >
      {children}
    </UserOrdersContext.Provider>
  )
}