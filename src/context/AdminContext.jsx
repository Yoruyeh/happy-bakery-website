import { createContext, useContext, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AdminGetProducts, AdminGetProductById } from '../api/admin.products'
import { BaseAdminMenu } from '../data'

const defaultAdminContext = {
  isAuthenticated: false,
  adminInfo: null,
  logout: null,
  adminProducts: null,
  productCount: 0,
  handleNavItemClick: () => {},
  handleProductCardClick: () => {},
  adminProductDetail: null
}

const AdminContext = createContext(defaultAdminContext)

export const useAdmin = () => useContext(AdminContext)

export const AdminProvider = ({ children }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const { pathname } = useLocation()
  const [adminProducts, setAdminProducts] = useState([])
  const [adminProductCount, setAdminProductCount] = useState(0)
  const [adminMenu, setAdminMenu] = useState([])
  const [adminProduct, setAdminProduct] = useState({})

  const handleNavItemClick = async ({ id, page, sort }) => {
    const { products, productCount } = await AdminGetProducts({
      id,
      page,
      sort
    })
    setAdminProducts(products)
    setAdminProductCount(productCount)
  }

  const handleProductCardClick = async (id) => {
    const { product } = await AdminGetProductById(id)
    setAdminProduct(product)
    navigate(`${location.pathname}/${id}`)
  }

  useEffect(() => {
    const checkTokenIsValid = async () => {
      const token = localStorage.getItem('token')
      if(!token) {
        setIsAuthenticated(false)
        return
      } else {
        setIsAuthenticated(true)
      }
    }
    checkTokenIsValid()
  }, [pathname])

  useEffect(() => {
    const AdminGetProductsAsync = async () => {
      const { products, productCount } = await AdminGetProducts({ id: '' })
      setAdminProducts(products)
      setAdminProductCount(productCount)
    }
    AdminGetProductsAsync()
  }, [])

  useEffect(() => {
    const initializeAdminMenu = async () => {
      const promises = BaseAdminMenu.map(async (item) => {
        const { productCount } = await AdminGetProducts({ id: item.id })
        return {
          ...item,
          quantity: productCount
        }
      })

      return Promise.all(promises)
    }

    const loadAdminMenu = async () => {
      const menu = await initializeAdminMenu()
      setAdminMenu(menu)
    }
    loadAdminMenu()
  }, [])


  return (
    <AdminContext.Provider
      value={{
        isAuthenticated,
        logout: () => {
          localStorage.removeItem('token')
          setIsAuthenticated(false)
        },
        adminProducts,
        adminProductCount,
        handleNavItemClick,
        adminMenu,
        handleProductCardClick,
        adminProduct
      }}
    >
      {children}
    </AdminContext.Provider>
  )
}