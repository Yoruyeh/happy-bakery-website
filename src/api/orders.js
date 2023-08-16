import { axiosInstance } from './axiosInstance'

const baseUrl = 'http://localhost:3000/api/orders'

export const GetUserOrderById = async (id) => {
  try {
    const { data } = await axiosInstance.get(`${baseUrl}/${id}`)

    return data

  } catch (error) {
    console.error('[Get User Order Detail Failed]: ', error)
  }
}
