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

export const AddNewOrder = async (payload) => {
  try {
    const {orderItems, total, shipment, payment} = payload
    const { data } = await axiosInstance.post(baseUrl, {
      orderItems,
      total,
      shipment,
      payment
    })

    return data

  } catch (error) {
    console.error('[Add New Order Failed]: ', error)
    return error.response.data
  }
}


