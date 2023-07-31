import styles from './orderCard.module.scss'
import ProductImg from '../../assets/images/croissant.jpeg'

const OrderCard = () => {
  return (
    <div className={styles.orderCard}>
      <div className={styles.orderImg}>
        <img src={ProductImg} alt="" />
      </div>
      <div className={styles.orderContent}>
        <div className={styles.orderText}>
          <h5>CROISSANT (4 flavors)</h5>
          <p>Cream Cheese</p>
        </div>
        <div className={styles.orderOption}>
          <p>Size F</p>
          <p>Quantity 2</p>
        </div>
        <div className={styles.orderSubtotal}>$125.00</div>
      </div>
    </div>
  )
}

export default OrderCard
