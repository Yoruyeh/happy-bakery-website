import { createContext, useContext, useState, useEffect } from 'react'
import { GetProducts } from '../api/products'

const defaultProductsContext = {
  products: null,
  handleNavItemClick: () => {},
  productDetail: null
}

const ProductsContext = createContext(defaultProductsContext)

export const useProducts = () => useContext(ProductsContext)

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  
  const handleNavItemClick = async (id) => {
    const { products } = await GetProducts({
      id
    })
    setProducts(products)
  }

   useEffect(() => {
     const getProductsAsync = async () => {
       const { products } = await GetProducts({
         id: '',
         sort: 'date_desc'
       })
       setProducts(products)
     }
     getProductsAsync()
   }, [])

  return (
    <ProductsContext.Provider
      value={{ products, handleNavItemClick }}
    >
      {children}
    </ProductsContext.Provider>
  )
}