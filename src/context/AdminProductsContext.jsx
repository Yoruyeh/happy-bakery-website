import { createContext, useContext, useState, useEffect } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import {
  AdminGetProducts,
  AdminGetProductById,
  AdminDeleteProduct
} from '../api/admin.products'
import { BaseAdminMenu } from '../data'
import Swal from 'sweetalert2'
import { GetBestSellers } from '../api/products'

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
  const [selectedCategoryId, setSelectedCategoryId] = useState('')
  const [bestSellers, setBestSellers] = useState([])

  const handleNavItemClick = async ({ id, page, sort, keyword }) => {
    const { products, productCount } = await AdminGetProducts({
      id,
      page,
      sort,
      keyword
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
        id: selectedCategoryId,
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

  const handleAdminViewProductClick = async (id, categoryName) => {
    const { product } = await AdminGetProductById(id)
    setAdminProduct(product)
    navigate(`/happy-bakery-website/admin/${categoryName}/${id}`)
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
    const getBestSellersAsync = async () => {
      const { products } = await GetBestSellers()
      setBestSellers(products)
    }
    getBestSellersAsync()
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
    const SelectedItem = BaseAdminMenu.find((item) =>
      item.link.includes(category)
    )
    if(!SelectedItem) {
      setSelectedCategoryId('')
      return
    } 
    setSelectedCategoryId(SelectedItem.id)
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
        handleProductDelete,
        selectedCategoryId,
        bestSellers,
        handleAdminViewProductClick
      }}
    >
      {children}
    </AdminProductsContext.Provider>
  )
}
