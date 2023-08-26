import { AdminAxiosInstance } from './axiosInstance'

const baseUrl = 'http://localhost:3000/api/admin/order'

export const AdminGetOrders = async ({ page, startDate, endDate }) => {
  try {
    let url = baseUrl + 's'
    const queryParams = []

    if (page) {
      queryParams.push(`page=${page}`)
    }

    if (startDate) {
      queryParams.push(`startDate=${startDate}`)
    } 

    if (endDate) {
      queryParams.push(`endDate=${endDate}`)
    } 

    if (queryParams.length) {
      url += `?${queryParams.join('&')}`
    }

    const { data } = await AdminAxiosInstance.get(url)

    return data
  } catch (error) {
    console.error('[Admin Get All Orders failed]: ', error)
    return error.response.data
  }
}