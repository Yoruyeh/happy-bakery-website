import styles from './cartCard.module.scss'
import { Heart, Bin } from '../../assets/icons'
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
            <h5>CROISSANT (4 flavors)</h5>
            <p>Cream Cheese</p>
            <div className={styles.cardOptions}>
              <div className={styles.option}>
                <label for="size">Size</label>
                <select id="size" name="size">
                  <option value="1">4"</option>
                  <option value="2">6"</option>
                  <option value="3">8"</option>
                </select>
              </div>
              <div className={styles.option}>
                <label for="quantity">Quantity</label>
                <select id="quantity" name="quantity">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
            </div>
          </div>
          <div className={styles.cardSubtotal}>$125.00</div>
        </div>
        <div className={styles.cardIcon}>
          <div className={styles.icon}>
            <Heart />
          </div>
          <div className={styles.icon}>
            <Bin />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartCard
