import { axiosInstance } from './axiosInstance'

const baseUrl = 'http://localhost:3000/api/cart'

export const GetUserCartItems = async () => {
  try {
    const { data } = await axiosInstance.get(baseUrl)

    return data

  } catch (error) {
    console.error('[Get User Cart Items Failed]: ', error)
    return { cartItems: [] }
  }
}

export const AddCartItem = async ({ id, quantity, price }) => {
  try {
    const { data } = await axiosInstance.post(baseUrl, {
      id,
      quantity,
      price
    })

    return data

  } catch (error) {
    console.error('[Add Cart Item Failed]: ', error)
    return error.response.data
  }
}