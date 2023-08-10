import styles from './adminOrders.module.scss'
import { Calendar } from '../../assets/icons'
import DataTable from '../../components/dataTable/DataTable'

const AdminOrders = () => {
  return (
    <div className={styles.adminOrders}>
      <div className={styles.title}>
        <h5>Order List</h5>
        <div className={styles.text}>
          <p>Home ＞ Order List</p>
          <p>
            <span>
              <Calendar />
            </span>
            Feb 16,2022 - Feb 20,2022
          </p>
        </div>
      </div>
      <div className={styles.table}>
        <DataTable />
      </div>
    </div>
  )
}

export default AdminOrders