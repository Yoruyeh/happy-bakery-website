import axios from 'axios'

const baseUrl = 'http://localhost:3000/api/users'

const axiosInstance = axios.create({
  baseUrl: baseUrl
})

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    console.error(error)
  }
)

export { axiosInstance }