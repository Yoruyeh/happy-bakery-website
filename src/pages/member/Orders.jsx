import styles from './order.module.scss'
import Button from '../../components/button/Button'
import { Link } from 'react-router-dom'

const Orders = () => {
  return (
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
          <tr>
            <td>20230801123546</td>
            <td>2023-08-01</td>
            <td>$185.00</td>
            <td>Delivered</td>
            <td>
              <Link to=":id">
                <Button text={'Check'} />
              </Link>
            </td>
          </tr>
          <tr>
            <td>20230601784562</td>
            <td>2023-06-01</td>
            <td>$700.00</td>
            <td>Delivered</td>
            <td>
              <Link to=":id">
                <Button text={'Check'} />
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Orders
