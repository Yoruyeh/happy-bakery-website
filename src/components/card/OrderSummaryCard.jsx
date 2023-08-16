import styles from './orderSummaryCard.module.scss'

const OrderSummaryCard = ({ order }) => {
  return (
    <div className={styles.summary}>
      <h3>Order Summary</h3>
      <div className={styles.summaryItem}>
        <p>{order.item_count} ITEM</p>
        <p>${order.total_price}</p>
      </div>
      <div className={styles.summaryItem}>
        <p>Delivery</p>
        <p>${order.shipping_fee}</p>
      </div>
      <div className={styles.summaryItem}>
        <p>Total</p>
        <p>${order.total_price}</p>
      </div>
    </div>
  )
}

export default OrderSummaryCard
