import { createContext, useContext, useState, useEffect } from 'react'
import { GetProducts, GetProductById, GetRecommendProducts } from '../api/products'
import { useNavigate } from 'react-router-dom'

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
  const [products, setProducts] = useState([])
  const [newProducts, setNewProducts]  = useState([])
  const [recommendProducts, setRecommendProducts]  = useState([])
  const [productCount, setProductCount] = useState(0)
  const [productDetail, setProductDetail] = useState({})

  const handleNavItemClick = async ({ id, page, sort, keyword }) => {
    const { products, productCount } = await GetProducts({
      id,
      page,
      sort,
      keyword
    })
    setProducts(products)
    if(!keyword) {
      setProductCount(productCount)
    }
  }

  const handleViewProductClick = async (id, categoryName) => {
    const { product } = await GetProductById(id)
    setProductDetail(product)
    navigate(`/happy-bakery-website/products/${categoryName}/${id}`)
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

  useEffect(() => {
    const getRecommendProductsAsync = async () => {
      const { products } = await GetRecommendProducts()
      setRecommendProducts(products)
    }
    getRecommendProductsAsync()
  }, [])

  return (
    <ProductsContext.Provider
      value={{
        products,
        newProducts,
        productCount,
        handleNavItemClick,
        productDetail,
        handleViewProductClick,
        recommendProducts,
        setProductCount,
        setProducts
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}
