import styles from './bestSellers.module.scss'
import { VerticalDot } from '../../assets/icons'
import Button from '../button/Button'
import ProductImg from '../../assets/images/chocolate-cake.jpeg'

const CardBody = () => {
  return (
    <div className={styles.card}>
      <div className={styles.img}>
        <img src={ProductImg} alt="" />
      </div>
      <div className={styles.info}>
        <h6>Chocolate Cake</h6>
        <p>$125.00</p>
      </div>
      <div className={styles.amount}>
        <h6>$125.00</h6>
        <p>999 sales</p>
      </div>
    </div>
  )
}

const BestSellers = () => {
  return (
    <div className={styles.bestSellers}>
      <div className={styles.head}>
        <h6>Best Sellers</h6>
        <VerticalDot />
      </div>
      <div className={styles.body}>
        <CardBody />
        <CardBody />
        <CardBody />
      </div>
      <div className={styles.footer}>
        <Button text={'REPORT'} />
      </div>
    </div>
  )
}

export default BestSellers
