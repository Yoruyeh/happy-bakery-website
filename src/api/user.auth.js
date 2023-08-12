import axios from 'axios'

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
  }
}

