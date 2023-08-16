import { createContext, useContext, useState, useEffect } from "react";
import { GetUserCartItems } from "../api/cart";
import { useAuth } from "./AuthContext";

const defaultUserCartItemsContext = {
  userCartItems: null,
  setUserCartIems: () => {},
  handleAddToCart: () => {}
}

const UserCartItemsContext = createContext(defaultUserCartItemsContext)

export const useUserCartItems = () => useContext(UserCartItemsContext)

export const UserCartItemsProvider = ({ children }) => {
  const { isAuthenticated } = useAuth()
  const [userCartItems, setUserCartIems] = useState([])

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
    <UserCartItemsContext.Provider value={{ userCartItems, setUserCartIems }}>
      {children}
    </UserCartItemsContext.Provider>
  )
}