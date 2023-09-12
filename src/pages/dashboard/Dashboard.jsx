import styles from './dashboard.module.scss'
import ChartBox from '../../components/chartBox/ChartBox'
import AmountCard from '../../components/adminCard/AmountCard'
import BestSellers from '../../components/adminCard/BestSellers'
import DataTable from '../../components/dataTable/DataTable'
import { DateInput } from '../../components/input/Input'
import { useAdminOrders } from '../../context/AdminOrdersContext'
import { useEffect } from 'react'

const Dashboard = () => {
  const { dateValue, handleDateChange } = useAdminOrders()
  
  const AmountCardInfo = [
    {
      id: 'card1',
      title: 'Total Orders',
      amount: '126.500'
    },
    {
      id: 'card2',
      title: 'Active Orders',
      amount: '126.500'
    },
    {
      id: 'card3',
      title: 'Shipped Orders',
      amount: '126.500'
    }
  ]

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
        {AmountCardInfo.map((card) => (
          <div className={styles.card} key={card.id}>
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