import styles from './productCard.module.scss'
import { Link } from 'react-router-dom'
import ProdcutImg from '../../assets/images/strawberry-cake.jpeg'
import Button from '../button/Button'
import Tag from '../tag/Tag'

const ProductCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <img src={ProdcutImg} alt="" />
        <Tag text={'NEW'} />
      </div>
      <div className={styles.cardTitle}>
        <h5>STRAWBERRY CAKE</h5>
      </div>
      <div className={styles.cardButton}>
        <Link to="/happy-bakery-website/products/1">
          <Button text={'VIEW PRODCUT - '} price={'$ 125'} />
        </Link>
      </div>
    </div>
  )
}

export default ProductCard
