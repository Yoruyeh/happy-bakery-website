import { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "./AuthContext";
import { GetUserOrders } from "../api/user.auth";
import { GetUserOrderById, AddNewOrder } from '../api/orders'
import { useUserCartItems } from "./CartContext";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

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
  const navigate = useNavigate()
  const { isAuthenticated } = useAuth()
  const { orderItems, totalPrice, setUserCartItems } = useUserCartItems()
  const [userOrders, setUserOrders] = useState([])
  const [userOrderDetail, setUserOrderDetail] = useState({})
  const [shipmentData, setShipmentData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    phone: '',
    shippingMethod: 'standard'
  })
  const [paymentData, setPaymentData] = useState({
    paymentMethod: ''
  })
  const [isConfirmChecked, setIsConfirmChecked] = useState({
    confirmInfo: false,
    confirmAge: false
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

  const handleNewOrderSubmit = async () => {
      if (!paymentData.paymentMethod) {
      Swal.fire({
        position: 'top',
        icon: 'warning',
        title: 'Please Choose Payment Method',
        showConfirmButton: false,
        timer: 1500
      })
      return
    }

    if (!isConfirmChecked.confirmInfo) {
      Swal.fire({
        position: 'top',
        icon: 'warning',
        title: 'Please Confirm Your Info Are The Same',
        showConfirmButton: false,
        timer: 1500
      })
      return
    }

    if (!isConfirmChecked.confirmAge) {
      Swal.fire({
        position: 'top',
        icon: 'warning',
        title: 'Please Confirm You are over 13',
        showConfirmButton: false,
        timer: 1500
      })
      return
    }

    const { status, message } = await AddNewOrder({
      orderItems: orderItems,
      total: totalPrice,
      shipment: shipmentData,
      payment: paymentData
    })

    if (status === 'success') {
      navigate('/happy-bakery-website/finish')
      setUserCartItems([])
      const { userOrders } = await GetUserOrders()
      setUserOrders(userOrders)
      setShipmentData({
        email: '',
        firstName: '',
        lastName: '',
        address: '',
        phone: '',
        shippingMethod: 'standard'
      })
      setPaymentData({
        paymentMethod: ''
      })
      setIsConfirmChecked({
        confirmInfo: false,
        confirmAge: false
      })
      return
    }

    Swal.fire({
      position: 'top',
      icon: 'error',
      title: `${message}`,
      showConfirmButton: false,
      timer: 1500
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
        shipmentData,
        paymentData,
        setIsConfirmChecked,
        handleCheckOrderClick,
        handleShipmentDataChange,
        handlePaymentDataChange,
        handleNewOrderSubmit
      }}
    >
      {children}
    </UserOrdersContext.Provider>
  )
}