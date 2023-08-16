import OrderCard from '../../components/card/OrderCard'
import OrderSummaryCard from '../../components/card/OrderSummaryCard'
import styles from './orderDetail.module.scss'
import { useUserOrders } from '../../context/OrdersContext'
import { useEffect } from 'react'

const OrderDetail = () => {
  const { userOrderDetail } = useUserOrders()
  const orderItemArray = userOrderDetail.OrderItems

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className={styles.orderDetail}>
      <div className={styles.orderInfo}>
        <div className={styles.summary}>
          <OrderSummaryCard order={userOrderDetail} />
        </div>
        <div className={styles.detail}>
          <h3>Order Details</h3>
          <div className={styles.cardWrapper}>
            {orderItemArray &&
              orderItemArray.map((item) => (
                <OrderCard item={item} key={item.id} />
              ))}
          </div>
        </div>
      </div>
      <table className={styles.detailTable}>
        <thead className={styles.head}>
          <tr>
            <th>Order No.</th>
            <td>{userOrderDetail.id}</td>
          </tr>
          <tr>
            <th>Order Date</th>
            <td>{userOrderDetail.order_date}</td>
          </tr>
          <tr>
            <th>Total Price</th>
            <td>${userOrderDetail.total_price}</td>
          </tr>
          <tr>
            <th>Status</th>
            <td>{userOrderDetail.status}</td>
          </tr>
          <tr>
            <th>Customer Name</th>
            <td>{userOrderDetail.customer_name}</td>
          </tr>
          <tr>
            <th>E-mail</th>
            <td>{userOrderDetail.email}</td>
          </tr>
          <tr>
            <th>Address</th>
            <td>{userOrderDetail.address}</td>
          </tr>
          <tr>
            <th>Phone Number</th>
            <td>{userOrderDetail.phone}</td>
          </tr>
          <tr>
            <th>Delivery Option</th>
            <td>{userOrderDetail.shipping_method}</td>
          </tr>
          <tr>
            <th>Payment Method</th>
            <td>{userOrderDetail.payment_method}</td>
          </tr>
          {/* <tr>
            <th>Payment Status</th>
            <td>Paid</td>
          </tr> */}
        </thead>
      </table>
    </div>
  )
}

export default OrderDetail