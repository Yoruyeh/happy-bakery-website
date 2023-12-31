import styles from './order.module.scss'
import Button from '../../components/button/Button'
import { Link, useNavigate } from 'react-router-dom'
import { useUserOrders } from '../../context/OrdersContext'
import { useAuth } from '../../context/AuthContext'
import { useEffect } from 'react'

const Orders = () => {
  const navigate = useNavigate()
  const { isAuthenticated } = useAuth()
  const { userOrders, handleCheckOrderClick } = useUserOrders()

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/happy-bakery-website/login')
    }
  }, [isAuthenticated, navigate])

  return userOrders && userOrders.length > 0 ? (
    <div className={styles.orders}>
      <table className={styles.table}>
        <thead className={styles.head}>
          <tr>
            <th>Order No.</th>
            <th>Order Date</th>
            <th>Total Price</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody className={styles.body}>
          {userOrders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.order_date}</td>
              <td>${order.total_price}</td>
              <td>{order.status}</td>
              <td>
                <Link
                  to={`${order.id}`}
                  onClick={() => handleCheckOrderClick(order.id)}
                >
                  <Button text={'Check'} />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <table className={styles.smallTable}>
        {userOrders.map((order) => (
          <thead className={styles.head} key={order.id}>
            <tr>
              <th>Order No.</th>
              <td>{order.id}</td>
            </tr>
            <tr>
              <th>Order Date</th>
              <td>{order.order_date}</td>
            </tr>
            <tr>
              <th>Total Price</th>
              <td>${order.total_price}</td>
            </tr>
            <tr>
              <th>Status</th>
              <td>{order.status}</td>
            </tr>
            <tr>
              <th></th>
              <td>
                <Link
                  to={`${order.id}`}
                  onClick={() => handleCheckOrderClick(order.id)}
                >
                  <Button text={'Check'} />
                </Link>
              </td>
            </tr>
          </thead>
        ))}
      </table>
    </div>
  ) : (
    <div className={styles.orders}>
      <div className={styles.text}>
        <p>No Orders</p>
      </div>
    </div>
  )
}

export default Orders
