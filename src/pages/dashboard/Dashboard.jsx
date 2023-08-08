import styles from './dashboard.module.scss'
import ChartBox from '../../components/chartBox/ChartBox'

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <h1>Dashboard</h1>
      <ChartBox />
    </div>
  )
}

export default Dashboard