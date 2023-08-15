import styles from './productCard.module.scss'
import { Link } from 'react-router-dom'
import Button from '../button/Button'
import Tag from '../tag/Tag'

const ProductCard = ({ product }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <img src={product.cover} alt="" />
        <Tag text={'NEW'} />
      </div>
      <div className={styles.cardTitle}>
        <h5>{product.name}</h5>
      </div>
      <div className={styles.cardButton}>
        <Link
          to={`/happy-bakery-website/products/${product.Category.name}/${product.id}`}
        >
          <Button
            text={'VIEW PRODCUT - '}
            price={`$ ${product.price_regular}`}
          />
        </Link>
      </div>
    </div>
  )
}

export default ProductCard
