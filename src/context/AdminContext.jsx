import { createContext, useContext, useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  AdminGetProducts,
  AdminGetProductById,
  AdminDeleteProduct
} from '../api/admin.products'
import { BaseAdminMenu } from '../data'
import Swal from 'sweetalert2'

const defaultAdminContext = {
  isAuthenticated: false,
  adminInfo: null,
  logout: null,
  adminProducts: null,
  productCount: 0,
  handleNavItemClick: () => {},
  handleProductCardClick: () => {},
  adminProductDetail: null,
  handleProductDelete: () => {}
}

const AdminContext = createContext(defaultAdminContext)

export const useAdmin = () => useContext(AdminContext)

export const AdminProvider = ({ children }) => {
  const navigate = useNavigate()
  const location = useLocation()
  let { category } = useParams()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const { pathname } = useLocation()
  const [adminProducts, setAdminProducts] = useState([])
  const [adminProductCount, setAdminProductCount] = useState(0)
  const [adminMenu, setAdminMenu] = useState([])
  const [adminProduct, setAdminProduct] = useState({})
  const [activePage, setActivePage] = useState(1)

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

  const handleProductDelete = async (id) => {
    const SelectedItem = BaseAdminMenu.find((item) =>
      item.link.includes(category)
    )
    const { status } = await AdminDeleteProduct(id)
    if (status === 'success') {
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: `Successfully Deleted`,
        showConfirmButton: false,
        timer: 1500
      })
      const { products, productCount } = await AdminGetProducts({
        id: SelectedItem ? SelectedItem.id : '',
        page: activePage
      })
      setAdminProducts(products)
      setAdminProductCount(productCount)
      navigate(-1)
      return
    }
    Swal.fire({
      icon: 'error',
      title: 'Delete Failed!',
      text: 'Please try again.',
      showConfirmButton: true
    })
  }

  useEffect(() => {
    const checkTokenIsValid = async () => {
      const token = localStorage.getItem('token')
      if (!token) {
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

  useEffect(() => {
    setActivePage(1)
  }, [category])

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
        adminProduct,
        activePage,
        setActivePage,
        handleProductDelete
      }}
    >
      {children}
    </AdminContext.Provider>
  )
}