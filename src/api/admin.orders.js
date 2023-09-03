import { AdminAxiosInstance } from './axiosInstance'

const baseUrl = 'http://localhost:3000/api/admin/order'

export const AdminGetOrders = async ({ page, perPage, startDate, endDate }) => {
  try {
    let url = baseUrl + 's'
    const queryParams = []

    if (page) {
      queryParams.push(`page=${page}`)
    }

    if (perPage) {
      queryParams.push(`perPage=${perPage}`)
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

export const AdminGetOrderById = async (id) => {
  try {
    const { data } = await AdminAxiosInstance.get(`${baseUrl}/${id}`)

    return data
  } catch (error) {
    console.error('[Admin Get Order failed]: ', error)
    return error.response.data
  }
}

export const AdminModifyOrder = async (id, { orderStatus, note }) => {
  try {
    const { data } = await AdminAxiosInstance.put(`${baseUrl}/${id}`, {
      orderStatus,
      note
    })

    return data
  } catch (error) {
    console.error('[Admin Modify Order failed]: ', error)
    return error.response.data
  }
}