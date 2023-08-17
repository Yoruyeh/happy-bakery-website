import { createContext, useContext, useState, useEffect } from "react";
import { GetUserCartItems } from "../api/cart";
import { useAuth } from "./AuthContext";
import { AddCartItem, DeleteCartItem } from '../api/cart'
import Swal from 'sweetalert2'

const defaultUserCartItemsContext = {
  userCartItems: null,
  setUserCartIems: () => {},
  handleAddToCart: () => {},
  handleDeleteCart: () => {}
}

const UserCartItemsContext = createContext(defaultUserCartItemsContext)

export const useUserCartItems = () => useContext(UserCartItemsContext)

export const UserCartItemsProvider = ({ children }) => {
  const { isAuthenticated } = useAuth()
  const [userCartItems, setUserCartIems] = useState([])

  const handleAddToCart = async ({ id, quantity, price }) => {
    const { status, message } = await AddCartItem({
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
      setUserCartIems(cartItems)
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
      setUserCartIems(cartItems)
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
        setUserCartIems(cartItems)
      }
      GetUserCartItemsAsync()
    }
  }, [isAuthenticated])

  return (
    <UserCartItemsContext.Provider
      value={{
        userCartItems,
        setUserCartIems,
        handleAddToCart,
        handleDeleteCart
      }}
    >
      {children}
    </UserCartItemsContext.Provider>
  )
}