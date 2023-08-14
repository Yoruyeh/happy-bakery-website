import { createContext, useContext, useState, useEffect } from "react"
import { UserSignIn, UserSignUp, CheckPermission } from "../api/user.auth"
import { useLocation } from "react-router-dom"

const defaultAuthContext = {
  isAuthenticated: false,
  currentUser: null,
  signUp: null,
  signIn: null,
  logout: null
}

const AuthContext = createContext(defaultAuthContext)

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)
  const { pathname } = useLocation()

  useEffect(() => {
    // 載入網頁後測試token是否有效
    const checkTokenIsValid = async () => {
      const token = localStorage.getItem('token')

      // 如果token不存在
      if (!token) {
        setIsAuthenticated(false)
        setCurrentUser(null)
        return
      }

      // 如果token存在，丟進api測試
      const {success, user} = await CheckPermission(token)
      // 有結果回傳就是通過驗證，沒有就是不通過
      if (success) {
        setIsAuthenticated(true)
        setCurrentUser(user)
      } else {
        setIsAuthenticated(false)
        setCurrentUser(null)
      }
    }
    checkTokenIsValid()

    // 變換路由的時候都要執行測試
  }, [pathname])

  return (
    <AuthContext.Provider value={{ 
      isAuthenticated, 
      currentUser, 
      signIn: async (data) => {
        const { success, token } = await UserSignIn({
          email: data.email,
          password: data.password
        })
        if (success) {
          setIsAuthenticated(true)
          localStorage.setItem('token', token)
        } else {
          setIsAuthenticated(false)
          setCurrentUser(null)
        }
        return success
      },
      signUp: async (data) => {
        const { success, token } = await UserSignUp({
          firstName: data.firstName,
          lastName: data.lastName,
          gender: data.gender,
          email: data.email,
          password: data.password,
          termsAgreement: data.termsAgreement
        })
        if (success) {
          setIsAuthenticated(true)
          localStorage.setItem('token', token)
        } else {
          setIsAuthenticated(false)
          setCurrentUser(null)
        }
        return success
      },
      logout: () => {
        localStorage.removeItem('token')
        setCurrentUser(null)
        setIsAuthenticated(false)
      }
      }}>
      {children}
    </AuthContext.Provider>
  )
}