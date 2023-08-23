import { createContext, useContext, useState, useEffect } from "react";
import { GetUserCartItems, ModifyCartItemQty } from "../api/cart";
import { useAuth } from "./AuthContext";
import { AddCartItem, DeleteCartItem } from '../api/cart'
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";

const defaultUserCartItemsContext = {
  userCartItems: null,
  setUserCartItems: () => {},
  handleAddToCart: () => {},
  handleBuyItNowClick: () => {},
  handleDeleteCart: () => {},
  totalPrice: 0,
  shippingFee: 60,
  setShippingFee: () => {},
  orderItems: []
}

const UserCartItemsContext = createContext(defaultUserCartItemsContext)

export const useUserCartItems = () => useContext(UserCartItemsContext)

export const UserCartItemsProvider = ({ children }) => {
  const navigate = useNavigate()
  const { isAuthenticated } = useAuth()
  const [userCartItems, setUserCartItems] = useState([])
  const [shippingFee, setShippingFee] = useState(60)
  const [orderItems, setOrderItems] = useState([])
  const totalPrice = userCartItems && userCartItems.reduce((total, item) => {
    return total + item.quantity * item.price_each
  }, 0)

  const handleAddToCart = async ({ id, quantity, price }) => {
    if (!isAuthenticated) {
      Swal.fire({
        position: 'top',
        icon: 'warning',
        title: 'Please Login first',
        showConfirmButton: false,
        timer: 1500
      }).then(() => {
        navigate('login')
      })
      return
    }

    const { status } = await AddCartItem({
      id,
      quantity,
      price
    })

    if (status === 'success') {
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: quantity === 1 ? `Successfully Added ${quantity} Item` : `Successfully Add ${quantity} Items`,
        showConfirmButton: false,
        timer: 1500
      })
      const { cartItems } = await GetUserCartItems()
      setUserCartItems(cartItems)
      return
    }

    Swal.fire({
      position: 'top',
      icon: 'warning',
      title: 'Product Already In Cart',
      showConfirmButton: false,
      timer: 1500
    })
  }

  const handleBuyItNowClick = async ({ id, quantity, price }) => {
    if (!isAuthenticated) {
      Swal.fire({
        position: 'top',
        icon: 'warning',
        title: 'Please Login first',
        showConfirmButton: false,
        timer: 1500
      }).then(() => {
        navigate('login')
      })
      return
    }

    const { status } = await AddCartItem({
      id,
      quantity,
      price
    })

    if (status === 'success') {
      const { cartItems } = await GetUserCartItems()
      setUserCartItems(cartItems)
      navigate('cart')
      return
    }

    Swal.fire({
      position: 'top',
      icon: 'warning',
      title: 'Product Already In Cart',
      showConfirmButton: false,
      timer: 1500
    }).then(() => {
      navigate('cart')
    })
  }

  const handleDeleteCart = async (id) => {
    const { status, message } = await DeleteCartItem(id)

    if (status === 'success') {
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: `${message}`,
        showConfirmButton: false,
        timer: 1500
      })
      const { cartItems } = await GetUserCartItems()
      setUserCartItems(cartItems)
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

  const handleCartItemQtyChange = async ({ id, quantity }) => {
    const { status, message } = await ModifyCartItemQty(id, quantity)

    if (status === 'success') {
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: `Successfully Changed to ${quantity}`,
        showConfirmButton: false,
        timer: 1000
      })
      const { cartItems } = await GetUserCartItems()
      setUserCartItems(cartItems)
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
      const GetUserCartItemsAsync = async () => {
        const { cartItems } = await GetUserCartItems()
        setUserCartItems(cartItems)
      }
      GetUserCartItemsAsync()
    }
  }, [isAuthenticated])

  useEffect(() => {
    if (isAuthenticated) {
      const initialOrderItems =
        userCartItems &&
        userCartItems.map((item) => ({
          id: item.Product.id,
          quantity: item.quantity,
          price: Number(item.price_each)
        }))
      setOrderItems(initialOrderItems) 
    }
  }, [isAuthenticated, userCartItems])

  return (
    <UserCartItemsContext.Provider
      value={{
        userCartItems,
        setUserCartItems,
        handleAddToCart,
        handleBuyItNowClick,
        handleDeleteCart,
        handleCartItemQtyChange,
        totalPrice,
        shippingFee,
        setShippingFee,
        orderItems
      }}
    >
      {children}
    </UserCartItemsContext.Provider>
  )
}