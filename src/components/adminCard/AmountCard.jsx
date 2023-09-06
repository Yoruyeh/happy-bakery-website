import styles from './amountCard.module.scss'
import { VerticalDot ,Bag, ArrowUp } from '../../assets/icons'

const AmountCard = ({ card }) => {
  return (
    <div className={styles.amountCard}>
      <div className={styles.head}>
        <h6>{card.title}</h6>
        <VerticalDot />
      </div>
      <div className={styles.body}>
        <div className={styles.price}>
          <div className={styles.icon}>
            <Bag />
          </div>
          ${card.amount}
        </div>
        <div className={styles.percentage}>
          <ArrowUp /> 34.7%
        </div>
      </div>
      <div className={styles.footer}>
        <p>Compared to Jan 2022</p>
      </div>
    </div>
  )
}

export default AmountCard