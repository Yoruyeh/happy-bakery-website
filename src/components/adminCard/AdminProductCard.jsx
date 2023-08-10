import styles from './adminProductCard.module.scss'
import { Dot, ArrowUp } from '../../assets/icons'
import ProdcutImg from '../../assets/images/chocolate-cake.jpeg'

const AdminProductCard = () => {
  return (
    <div className={styles.adminProductCard}>
      <div className={styles.info}>
        <div className={styles.img}>
          <img src={ProdcutImg} alt="" />
        </div>
        <div className={styles.text}>
          <h6>Chocolate Cake</h6>
          <p>6 inch</p>
          <p className={styles.price}>$600.00</p>
        </div>
        <div className={styles.btn}>
          <Dot />
        </div>
      </div>
      <div className={styles.description}>
        <h6>Summary</h6>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
        </p>
      </div>
      <div className={styles.count}>
        <div className={styles.sale}>
          Sales
          <p>
            <ArrowUp />
            1269
          </p>
        </div>
        <hr />
        <div className={styles.remain}>
          Remaining Products
          <p>
            <span></span>1269
          </p>
        </div>
      </div>
    </div>
  )
}

export default AdminProductCard