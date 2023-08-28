import styles from './productCard.module.scss'
import Button from '../button/Button'
import Tag from '../tag/Tag'
import { useProducts } from '../../context/ProductsContext'

const ProductCard = ({ product }) => {
  const { newProducts, handleViewProductClick } = useProducts()

  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <img src={product.cover} alt="" />
        {newProducts.find((item) => item.id === product.id) ? (
          <Tag text={'NEW'} />
        ) : (
          ''
        )}
      </div>
      <div className={styles.cardTitle}>
        <h5>{product.name}</h5>
      </div>
      <div className={styles.cardButton}>
          <Button
            text={'VIEW PRODCUT - '}
            price={`$ ${product.price_regular}`}
            onClick={() => {
              handleViewProductClick(product.id)
            }}
          />
      </div>
    </div>
  )
}

export default ProductCard
