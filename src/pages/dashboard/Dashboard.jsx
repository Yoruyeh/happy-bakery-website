import styles from './dashboard.module.scss'
import ChartBox from '../../components/chartBox/ChartBox'
import AmountCard from '../../components/adminCard/AmountCard'
import BestSellers from '../../components/adminCard/BestSellers'
import DataTable from '../../components/dataTable/DataTable'
import { DateInput } from '../../components/input/Input'
import { useAdminOrders } from '../../context/AdminOrdersContext'
import { useEffect } from 'react'

const Dashboard = () => {
  const { dateValue, handleDateChange, amountCardInfo } = useAdminOrders()
  

  useEffect(() => {
    const container = document.querySelector(
      '.outlet'
    )
    if (container) container.scrollTop = 0
  }, [])

  return (
    <div className={styles.dashboard}>
      <div className={styles.title}>
        <h5>Dashboard</h5>
        <div className={styles.text}>
          <p>Home ＞ Dashboard</p>
          <DateInput
            dateValue={dateValue}
            handleDateChange={handleDateChange}
          />
        </div>
      </div>
      <div className={styles.cards}>
        {amountCardInfo.map((card, index) => (
          <div className={styles.card} key={index}>
            <AmountCard card={card} />
          </div>
        ))}
        <div className={styles.card4}>
          <ChartBox />
        </div>
        <div className={styles.card5}>
          <BestSellers />
        </div>
        <div className={styles.card6}>
          <DataTable />
        </div>
      </div>
    </div>
  )
}

export default Dashboard