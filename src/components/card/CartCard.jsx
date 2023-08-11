import styles from './cartCard.module.scss'
import { Bin } from '../../assets/icons'
import ProductImg from '../../assets/images/croissant.jpeg'

const CartCard = () => {
  return (
    <div className={styles.cartCard}>
      <div className={styles.cardImg}>
        <img src={ProductImg} alt="" />
      </div>
      <div className={styles.cardContent}>
        <div className={styles.cardText}>
          <div className={styles.cardInfo}>
            <h5>CROISSANT</h5>
            <p>Cream Cheese</p>
            <div className={styles.option}>
              <label htmlFor="quantity">Quantity</label>
              <select id="quantity" name="quantity">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
          </div>
          <div className={styles.cardSubtotal}>$125.00</div>
        </div>
        <div className={styles.cardIcon}>
          <div className={styles.icon}>
            <Bin />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartCard
