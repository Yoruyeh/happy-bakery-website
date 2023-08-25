import styles from './adminProductCard.module.scss'
import { Dot, ArrowUp } from '../../assets/icons'

const AdminProductCard = ({ product }) => {
  return (
    <div className={styles.adminProductCard}>
      <div className={styles.info}>
        <div className={styles.img}>
          <img src={product.cover} alt="" />
        </div>
        <div className={styles.text}>
          <h6>{product.name}</h6>
          {/* <p>6 inch</p> */}
          <p className={styles.price}>${product.price_regular}</p>
        </div>
        <div className={styles.btn}>
          <Dot />
        </div>
      </div>
      <div className={styles.description}>
        <h6>Summary</h6>
        <p>{product.description}</p>
      </div>
      <div className={styles.count}>
        <div className={styles.sale}>
          Sales
          <p>
            <ArrowUp />
            {product.salesCount}
          </p>
        </div>
        <hr />
        <div className={styles.remain}>
          Remaining Products
          <p>
            <span></span>
            {product.stock_quantity}
          </p>
        </div>
      </div>
    </div>
  )
}

export default AdminProductCard