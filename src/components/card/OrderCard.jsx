import styles from './orderCard.module.scss'


const OrderCard = ({ item }) => {
  return (
    <div className={styles.orderCard}>
      <div className={styles.orderImg}>
        <img src={item.Product.cover} alt="" />
      </div>
      <div className={styles.orderContent}>
        <div className={styles.orderText}>
          <h6>{item.Product.name}</h6>
          {/* <p>Cream Cheese</p> */}
        </div>
        <div className={styles.orderOption}>
          <p>Quantity {item.quantity}</p>
        </div>
        <div className={styles.orderSubtotal}>${item.price_each}</div>
      </div>
    </div>
  )
}

export default OrderCard
