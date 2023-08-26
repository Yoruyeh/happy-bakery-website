import styles from './adminOrders.module.scss'
import { Calendar } from '../../assets/icons'
import DataTable from '../../components/dataTable/DataTable'
import { useState } from 'react'
import Swal from 'sweetalert2'

const AdminOrders = () => {
  const currentDate = new Date()
  const sevenDaysAgo = new Date()
  // 設置日期為7天前
  sevenDaysAgo.setDate(currentDate.getDate() - 7)

  const formattedInputValue = (date) => {
     const year = date.getFullYear()
     const month = date.getMonth() + 1
     const day = date.getDate()
     const format = `${year}-${month < 10 ? '0' + month : month}-${
       day < 10 ? '0' + day : day
     }`
     return format
  }

  const formattedCurrentDate = formattedInputValue(currentDate)
  const formattedSevenDaysAgo = formattedInputValue(sevenDaysAgo)

  const [dateValue, setDateValue] = useState({
    startDate: formattedSevenDaysAgo,
    endDate: formattedCurrentDate
  })

  const handleDateChange = (e) => {
    const { name, value } = e.target

    const startDateObj = new Date(dateValue.startDate)
    const endDateObj = new Date(dateValue.endDate)

    if (name === 'startDate' && new Date(value) >= endDateObj) {
      Swal.fire({
        position: 'top',
        icon: 'warning',
        title: 'Invalid Date',
        text: 'Start date should not be later than end date.',
        showConfirmButton: false,
        timer: 2000
      })
      return
    }

    if (name === 'endDate' && new Date(value) <= startDateObj) {
      Swal.fire({
        position: 'top',
        icon: 'warning',
        title: 'Invalid Date',
        text: 'End date should not be earlier than start date.',
        showConfirmButton: false,
        timer: 2000
      })
      return
    }

      setDateValue((prev) => ({
        ...prev,
        [name]: value
      }))
  }

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