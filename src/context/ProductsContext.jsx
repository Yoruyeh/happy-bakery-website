import { createContext, useContext, useState, useEffect } from 'react'
import { GetProducts, GetProductById } from '../api/products'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

const defaultProductsContext = {
  products: null,
  productCount: 0,
  handleNavItemClick: () => {},
  handleSortClick: () => {},
  productDetail: null,
  handleViewProductClick: () => {}
}

const ProductsContext = createContext(defaultProductsContext)

export const useProducts = () => useContext(ProductsContext)

export const ProductsProvider = ({ children }) => {
  const navigate = useNavigate()
  const location = useLocation()
  let { category } = useParams()
  const [products, setProducts] = useState([])
  const [newProducts, setNewProducts]  = useState([])
  const [productCount, setProductCount] = useState(0)
  const [productDetail, setProductDetail] = useState({})

  const handleNavItemClick = async ({ id, page, sort }) => {
    const { products, productCount } = await GetProducts({
      id,
      page,
      sort
    })
    setProducts(products)
    setProductCount(productCount)
  }

  const handleViewProductClick = async (id, categoryName) => {
    const { product } = await GetProductById(id)
    setProductDetail(product)
    if (!category) {
      navigate(`${location.pathname}/products/${categoryName}/${id}`)
    } else {
      navigate(`${location.pathname}/${id}`)
    }
  }

  useEffect(() => {
    const getProductsAsync = async () => {
      const { products, productCount } = await GetProducts({
        id: '',
        sort: 'date_desc'
      })
      setProducts(products)
      setNewProducts(products.slice(0, 9))
      setProductCount(productCount)
    }
    getProductsAsync()
  }, [])

  return (
    <ProductsContext.Provider
      value={{
        products,
        newProducts,
        productCount,
        handleNavItemClick,
        productDetail,
        handleViewProductClick
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}
