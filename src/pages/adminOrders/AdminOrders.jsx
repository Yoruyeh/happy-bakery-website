import styles from './adminOrders.module.scss'
import { Calendar } from '../../assets/icons'
import DataTable from '../../components/dataTable/DataTable'
import SelectedButton from '../../components/button/SelectedButton'

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
        <div className={styles.button}>
          <SelectedButton>
            <option value="">Change Status</option>
            <option value="pending">pending</option>
            <option value="delivered">delivered</option>
            <option value="canceled">canceled</option>
          </SelectedButton>
        </div>
      </div>
      <div className={styles.table}>
        <DataTable />
      </div>
    </div>
  )
}

export default AdminOrders