import axios from 'axios'
import { AdminAxiosInstance } from './axiosInstance'

const baseUrl = 'http://localhost:3000/api/admin'

export const AdminSignIn = async ({ email, password })  => {
  try {
    const { data } = await axios.post(`${baseUrl}/signin`, {
      email,
      password
    })
    
    const { token } = data

    if(token) {
      localStorage.setItem('token', token)
      return { success: true, ...data }
    }

    return data

  } catch (error) {
    console.error('[Admin Login failed]: ', error)
    return { success: false, error: error.message }
  }
}

export const AdminEditPassword = async ({ currentPW, newPW, confirmPW }) => {
  try {
    const { data } = await AdminAxiosInstance.put(`${baseUrl}/password`, {
      currentPW,
      newPW,
      confirmPW
    })

    return data
    
  } catch (error) {
    console.error('[Admin Edit Password Failed]: ', error)
    return error.response.data
  }
}

export const AdminCheckPermission = async (token) => {
  try {
    const { data } = await axios.get(baseUrl, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })

    return { success: true, ...data }
  } catch (error) {
    console.error('[Unauthorized]: ', error)
    return { success: false, error: error.message }
  }
}
