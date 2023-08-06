import OrderCard from '../../components/card/OrderCard'
import OrderSummaryCard from '../../components/card/OrderSummaryCard'
import styles from './orderDetail.module.scss'

const OrderDetail = () => {
  return (
    <div className={styles.orderDetail}>
      <div className={styles.orderInfo}>
        <div className={styles.summary}>
          <OrderSummaryCard />
        </div>
        <div className={styles.detail}>
          <h3>Order Details</h3>
          <div className={styles.cardWrapper}>
            <OrderCard />
            <OrderCard />
            <OrderCard />
            <OrderCard />
            <OrderCard />
          </div>
        </div>
      </div>
      <table className={styles.detailTable}>
        <thead className={styles.head}>
          <tr>
            <th>Order No.</th>
            <td>20230801123546</td>
          </tr>
          <tr>
            <th>Order Date</th>
            <td>2023-08-01</td>
          </tr>
          <tr>
            <th>Total Price</th>
            <td>$185.00</td>
          </tr>
          <tr>
            <th>Status</th>
            <td>Delivered</td>
          </tr>
          <tr>
            <th>Customer Name</th>
            <td>Yoru Yeh</td>
          </tr>
          <tr>
            <th>E-mail</th>
            <td>happybakery@gmail.com</td>
          </tr>
          <tr>
            <th>Address</th>
            <td>
              1F., No. 10, Ln. 67, Smile 1st St., Happy Dist., Taipei City,
              Taiwan
            </td>
          </tr>
          <tr>
            <th>Phone Number</th>
            <td>02-12345678</td>
          </tr>
          <tr>
            <th>Delivery Option</th>
            <td>Standard Delivery</td>
          </tr>
          <tr>
            <th>Payment Method</th>
            <td>Credit Card</td>
          </tr>
          <tr>
            <th>Payment Status</th>
            <td>Paid</td>
          </tr>
        </thead>
      </table>
    </div>
  )
}

export default OrderDetail