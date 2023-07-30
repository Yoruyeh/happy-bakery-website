import styles from './productCard.module.scss'
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
      <div className={styles.cardTitle}>STRAWBERRY CAKE</div>
      <div className={styles.cardButton}>
        <Button text={'VIEW PRODCUT - '} price={'$ 125'} />
      </div>
    </div>
  )
}

export default ProductCard
