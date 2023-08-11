import axios from 'axios'

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
  }
}
