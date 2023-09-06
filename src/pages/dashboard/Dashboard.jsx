import styles from './dashboard.module.scss'
import ChartBox from '../../components/chartBox/ChartBox'
import { Calendar } from '../../assets/icons'
import AmountCard from '../../components/adminCard/AmountCard'
import BestSellers from '../../components/adminCard/BestSellers'
import DataTable from '../../components/dataTable/DataTable'

const Dashboard = () => {
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

  return (
    <div className={styles.dashboard}>
      <div className={styles.title}>
        <h5>Dashboard</h5>
        <div className={styles.text}>
          <p>Home ＞ Dashboard</p>
          <p>
            <span>
              <Calendar />
            </span>
            Feb 16,2022 - Feb 20,2022
          </p>
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