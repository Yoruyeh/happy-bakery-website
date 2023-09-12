import styles from './reviewCard.module.scss'
import { StarRate } from '../../assets/icons'

const ReviewCard = ({ avatar, title, text, productImg }) => {
  return (
    <div className={styles.card}>
      <div className={styles.body}>
        <div className={styles.text}>
          <h5>{title}</h5>
          <p>{text}</p>
          <div className={styles.rate}>
            <StarRate />
            <StarRate />
            <StarRate />
            <StarRate />
            <StarRate />
            <span>5.0</span>
          </div>
        </div>
        <div className={styles.avatar}>
          <img src={avatar} alt="" />
        </div>
      </div>
      <div className={styles.image}>
        <img src={productImg} alt="" />
      </div>
    </div>
  )
}

export default ReviewCard