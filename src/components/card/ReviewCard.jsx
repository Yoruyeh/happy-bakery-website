import styles from './reviewCard.module.scss'
import ReviewImg from '../../assets/images/chocolate-cake.jpeg'
import { StarRate } from '../../assets/icons'

const ReviewCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.body}>
        <div className={styles.text}>
          <h5>Delicious!</h5>
          <p>
            I highly recommend shopping from Happy Bakery
          </p>
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
          <img
            src="https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
            alt=""
          />
        </div>
      </div>
      <div className={styles.image}>
        <img src={ReviewImg} alt="" />
      </div>
    </div>
  )
}

export default ReviewCard