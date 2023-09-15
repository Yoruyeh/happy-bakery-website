import axios from 'axios'

const userBaseUrl = 'http://localhost:3000/api/users'
const adminBaseUrl = 'http://localhost:3000/api/admin'

const UserAxiosInstance = axios.create({
  baseUrl: userBaseUrl
})

UserAxiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    console.error(error)
    return Promise.reject(error)
  }
)

const AdminAxiosInstance = axios.create({
  baseUrl: adminBaseUrl
})

AdminAxiosInstance.interceptors.request.use(
  (config) => {
    const token =
      sessionStorage.getItem('token') || localStorage.getItem('token')
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    console.error(error)
    return Promise.reject(error)
  }
)

export { UserAxiosInstance, AdminAxiosInstance }