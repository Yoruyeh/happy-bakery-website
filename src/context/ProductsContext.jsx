import { createContext, useContext, useState, useEffect } from 'react'
import { GetProducts } from '../api/products'

const defaultProductsContext = {
  products: null,
  productCount: 0,
  handleNavItemClick: () => {},
  handleSortClick: () => {},
  productDetail: null
}

const ProductsContext = createContext(defaultProductsContext)

export const useProducts = () => useContext(ProductsContext)

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const [productCount, setProductCount] = useState(0)
  
  const handleNavItemClick = async (id) => {
    const { products, productCount } = await GetProducts({
      id
    })
    setProducts(products)
    setProductCount(productCount)
  }

  const handleSortClick = async (sort) => {
    const { products } = await GetProducts({
      sort
    })
    setProducts(products)
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
      value={{ products, productCount, handleNavItemClick, handleSortClick }}
    >
      {children}
    </ProductsContext.Provider>
  )
}