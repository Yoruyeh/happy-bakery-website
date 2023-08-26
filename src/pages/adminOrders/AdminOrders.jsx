import styles from './adminOrders.module.scss'
import { Calendar } from '../../assets/icons'
import DataTable from '../../components/dataTable/DataTable'
import { useAdminOrders } from '../../context/AdminOrdersContext'

const AdminOrders = () => {
  const { dateValue, handleDateChange } = useAdminOrders()

  const formattedDate = (inputValue) => {
    // 解析日期
    const date = new Date(inputValue)

    // 定義月份名稱
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ]

    // 獲取年、月和日
    const year = date.getFullYear()
    const month = months[date.getMonth()]
    const day = date.getDate()

    // 返回格式化的日期
    return `${month} ${day}, ${year}`
  }

  return (
    <div className={styles.adminOrders}>
      <div className={styles.title}>
        <h5>Order List</h5>
        <div className={styles.text}>
          <p>Home ＞ Order List</p>
          <div className={styles.dateInput}>
            <span>
              <Calendar />
            </span>
            <div className={styles.date}>
              {formattedDate(dateValue.startDate)}
              <input
                type="date"
                name="startDate"
                value={dateValue.startDate}
                onChange={(e) => handleDateChange(e)}
              />
            </div>
            <span>-</span>
            <div className={styles.date}>
              {formattedDate(dateValue.endDate)}
              <input
                type="date"
                name="endDate"
                value={dateValue.endDate}
                onChange={(e) => handleDateChange(e)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.table}>
        <DataTable />
      </div>
    </div>
  )
}

export default AdminOrders