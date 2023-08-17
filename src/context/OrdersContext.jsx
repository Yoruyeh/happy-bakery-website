import { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "./AuthContext";
import { GetUserOrders } from "../api/user.auth";
import { GetUserOrderById } from '../api/orders'

const defaultUserOrdersContext = {
  userOrders: null,
  handleCheckOrderClick: () => {},
  userOrderDetail: null,
  shipmentData: {
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    phone: '',
    shippingMethod: ''
  },
  paymentData: {
    paymentMethod: ''
  },
  handleShipmentDataChange: () => {},
  handlePaymentDataChange: () => {}
}

const UserOrdersContext = createContext(defaultUserOrdersContext)

export const useUserOrders = () => useContext(UserOrdersContext)

export const UserOrdersProvider = ({ children }) => {
  const { isAuthenticated } = useAuth()
  const [userOrders, setUserOrders] = useState([])
  const [userOrderDetail, setUserOrderDetail] = useState({})
  const [shipmentData, setShipmentData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    phone: '',
    shippingMethod: ''
  })
  const [paymentData, setPaymentData] = useState({
    paymentMethod: ''
  })

  const handleCheckOrderClick = async (id) => {
    const { order } = await GetUserOrderById(id)
    setUserOrderDetail(order)
  }

  const handleShipmentDataChange = (event) => {
    if (event.type === 'click') {
      const method = event.currentTarget.dataset.name
      setShipmentData((prev) => ({
        ...prev,
        shippingMethod: method
      }))
      return
    }
    const { name, value } = event.target
    setShipmentData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handlePaymentDataChange = (value) => {
    setPaymentData({
      paymentMethod: value
    })
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
      value={{
        userOrders,
        userOrderDetail,
        handleCheckOrderClick,
        handleShipmentDataChange,
        handlePaymentDataChange
      }}
    >
      {children}
    </UserOrdersContext.Provider>
  )
}