import styles from './dashboard.module.scss'
import ChartBox from '../../components/chartBox/ChartBox'
import { Calendar } from '../../assets/icons'

const Dashboard = () => {
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
        <div className={styles.card1}>1</div>
        <div className={styles.card2}>2</div>
        <div className={styles.card3}>3</div>
        <div className={styles.card4}>
          <ChartBox />
        </div>
        <div className={styles.card5}>5</div>
        <div className={styles.card6}>6</div>
      </div>
    </div>
  )
}

export default Dashboard