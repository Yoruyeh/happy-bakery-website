import styles from './orderSummaryCard.module.scss'

const OrderSummaryCard = () => {
  return (
    <div className={styles.summary}>
      <h3>Order Summary</h3>
      <div className={styles.summaryItem}>
        <p>1 ITEM</p>
        <p>$125.00</p>
      </div>
      <div className={styles.summaryItem}>
        <p>Delivery</p>
        <p>$60.00</p>
      </div>
      <div className={styles.summaryItem}>
        <p>Total</p>
        <p>$185.00</p>
      </div>
    </div>
  )
}

export default OrderSummaryCard
