import axios from 'axios'
import { UserAxiosInstance } from './axiosInstance'

const baseUrl = 'http://localhost:3000/api/users'

export const UserSignIn = async ({ email, password }) => {
  try {
    const { data } = await axios.post(`${baseUrl}/signin`, {
      email,
      password
    })

    const { token } = data

    if(token) {
      return { success: true, ...data }
    }

    return data

  } catch (error) {
    console.error('[User Login Failed]: ', error)
    return { success: false, error: error.message }
  }
}

export const UserSignUp = async ({
  firstName,
  lastName,
  gender,
  email,
  password,
  termsAgreement
}) => {
  try {
    const { data } = await axios.post(baseUrl, {
      firstName,
      lastName,
      gender,
      email,
      password,
      termsAgreement
    })

    const { token } = data

    if (token) {
      return { success: true, ...data }
    }

    return data

  } catch (error) {
    console.error('[User Register Failed]: ', error)
    return { success: false, error: error.message }
  }
}

export const CheckPermission = async (token) => {
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

export const EditPassword = async ({ currentPW, newPW, confirmPW }) => {
  try {
    const { data } = await UserAxiosInstance.put(`${baseUrl}/password`, {
      currentPW,
      newPW,
      confirmPW
    })

    return data

  } catch (error) {
    console.error('[Edit Password Failed]: ', error)
    return error.response.data
  }
}

export const EditUserInfo = async ({
  firstName,
  lastName,
  birthday,
  email,
  address,
  phone,
  gender
}) => {
  try {
    const { data } = await UserAxiosInstance.put(baseUrl, {
      firstName,
      lastName,
      birthday,
      email,
      address,
      phone,
      gender
    })

    return data

  } catch (error) {
    console.error('[Edit User Info Failed]: ', error)
    return error.response.data
  }
}

export const GetUserOrders = async () => {
  try {
    const { data } = await UserAxiosInstance.get(`${baseUrl}/orders`)

    return data

  } catch (error) {
    console.error('[Get User Orders Failed]: ', error)
    return error.response.data
  }
}

