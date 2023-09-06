import styles from './adminOrders.module.scss'
import DataTable from '../../components/dataTable/DataTable'
import { useAdminOrders } from '../../context/AdminOrdersContext'
import { DateInput } from '../../components/input/Input'

const AdminOrders = () => {
  const { dateValue, handleDateChange } = useAdminOrders()

  return (
    <div className={styles.adminOrders}>
      <div className={styles.title}>
        <h5>Order List</h5>
        <div className={styles.text}>
          <p>Home ＞ Order List</p>
          <DateInput
            dateValue={dateValue}
            handleDateChange={handleDateChange}
          />
        </div>
      </div>
      <div className={styles.table}>
        <DataTable />
      </div>
    </div>
  )
}

export default AdminOrders