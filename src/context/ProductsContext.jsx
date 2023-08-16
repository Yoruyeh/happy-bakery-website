import { createContext, useContext, useState, useEffect } from 'react'
import { GetProducts, GetProductById } from '../api/products'

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
  const [products, setProducts] = useState([])
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

  const handleViewProductClick = async (id) => {
    const { product } = await GetProductById(id)
    setProductDetail(product)
  }

  useEffect(() => {
    const getProductsAsync = async () => {
      const { products, productCount } = await GetProducts({
        id: '',
        sort: 'date_desc'
      })
      setProducts(products)
      setProductCount(productCount)
    }
    getProductsAsync()
  }, [])

  return (
    <ProductsContext.Provider
      value={{
        products,
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
