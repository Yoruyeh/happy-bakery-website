import styles from './adminAllProducts.module.scss'
import Button from '../../components/button/Button'
import { AddCircle } from '../../assets/icons'

const AdminAllProducts = () => {
  return (
    <div className={styles.allProducts}>
      <div className={styles.title}>
        <div className={styles.text}>
          <h5>All Products</h5>
          <p>Home ＞ All Products</p>
        </div>
        <Button text={'ADD NEW PRODUCT'} price={<AddCircle />} />
      </div>
      <div className={styles.cards}></div>
    </div>
  )
}

export default AdminAllProducts
