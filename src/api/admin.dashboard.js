import { AdminAxiosInstance } from './axiosInstance'

const baseUrl = 'http://localhost:3000/api/admin/sales'

export const AdminGetStatus = async ({ startDate, endDate }) => {
  try {
    let url = baseUrl + '/status'
    const queryParams = []

    if (startDate) {
      queryParams.push(`startDate=${startDate}`)
    }

    if (endDate) {
      queryParams.push(`endDate=${endDate}`)
    }

    const { data } = await AdminAxiosInstance.get(url)

    return data
  } catch (error) {
    console.error('[Admin Get Status failed]: ', error)
    return error.response.data
  }
}

export const AdminGetReport = async (year) => {
  try {
    const { data } = await AdminAxiosInstance.get(`${baseUrl}/interval?year=${year}`)

    return data
  } catch (error) {
    console.error('[Admin Get Report failed]: ', error)
    return error.response.data
  }
}
