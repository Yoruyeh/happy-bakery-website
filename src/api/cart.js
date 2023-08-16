import { axiosInstance } from './axiosInstance'

const baseUrl = 'http://localhost:3000/api/cart'

export const GetUserCartItems = async () => {
  try {
    const { data } = await axiosInstance.get(baseUrl)

    return data

  } catch (error) {
    console.error('[Get User Cart Items Failed]: ', error)
  }
}