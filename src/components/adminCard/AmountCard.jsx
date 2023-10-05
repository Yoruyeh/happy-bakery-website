import styles from './amountCard.module.scss'
import { VerticalDot ,Bag, ArrowUp, ArrowDown } from '../../assets/icons'

const AmountCard = ({ card }) => {
  const key = Object.keys(card)[0]
  const percentageNumber = Number(card[key].YOY.slice(0, card[key].YOY.length - 1 ))

  return (
    <div className={styles.amountCard}>
      <div className={styles.head}>
        <h6>{key} Orders</h6>
        <VerticalDot />
      </div>
      <div className={styles.body}>
        <div className={styles.price}>
          <div className={styles.icon}>
            <Bag />
          </div>
          ${card[key].sales}
        </div>
        <div className={styles.percentage}>
          {percentageNumber > 0 ? <ArrowUp /> : <ArrowDown />}
          {card[key].YOY}
        </div>
      </div>
      <div className={styles.footer}>
        <p>Compared to {card[key].compareTo}</p>
      </div>
    </div>
  )
}

export default AmountCard