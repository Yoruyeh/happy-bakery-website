import styles from './orderSummaryCard.module.scss'
import Button from '../../components/button/Button'


const OrderSummaryCard = () => {
  return (
    <div className={styles.summary}>
      <h3>Order Summary</h3>
      <div className={styles.summaryItem}>
        <h6>1 ITEM</h6>
        <p>$125.00</p>
      </div>
      <div className={styles.summaryItem}>
        <h6>Delivery</h6>
        <p>$60.00</p>
      </div>
      <div className={styles.summaryItem}>
        <h6>Total</h6>
        <p>$185.00</p>
      </div>
      <Button text={'CHECKOUT'} />
    </div>
  )
}

export default OrderSummaryCard
