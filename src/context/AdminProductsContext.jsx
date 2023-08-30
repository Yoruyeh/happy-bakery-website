import { createContext, useContext, useState, useEffect } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import {
  AdminGetProducts,
  AdminGetProductById,
  AdminDeleteProduct
} from '../api/admin.products'
import { BaseAdminMenu } from '../data'
import Swal from 'sweetalert2'

const defaultAdminProductsContext = {
  adminProducts: null,
  productCount: 0,
  handleNavItemClick: () => {},
  handleProductCardClick: () => {},
  adminProductDetail: null,
  handleProductDelete: () => {}
}

const AdminProductsContext = createContext(defaultAdminProductsContext)

export const useAdminProducts = () => useContext(AdminProductsContext)

export const AdminProductsProvider = ({ children }) => {
  const navigate = useNavigate()
  const location = useLocation()
  let { category } = useParams()
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
  }, [adminProductCount])

  useEffect(() => {
    setActivePage(1)
  }, [category])

  return (
    <AdminProductsContext.Provider
      value={{
        adminProducts,
        adminProductCount,
        handleNavItemClick,
        adminMenu,
        handleProductCardClick,
        adminProduct,
        setAdminProducts,
        setAdminProductCount,
        activePage,
        setActivePage,
        handleProductDelete
      }}
    >
      {children}
    </AdminProductsContext.Provider>
  )
}
