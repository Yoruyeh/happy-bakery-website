import styles from './cart.module.scss'
import { Heart,Bin } from '../../assets/icons'
import Recommend from '../../components/recommend/Recommend'
import Button from '../../components/button/Button'
import ProductImg from '../../assets/images/croissant.jpeg'

const Cart = () => {
  return (
    <>
      <div className={styles.cart}>
        <div className={styles.text}>
          <h3>Saving to celebrate </h3>
          <p>
            Enjoy up to 60% off thousands of styles during the End of Year sale
            - while suppiles last. No code needed.
          </p>
          <p>Join us or Sign-in</p>
        </div>
        <div className={styles.container}>
          <div className={styles.cartWrapper}>
            <div className={styles.cartText}>
              <h3>Your Bag </h3>
              <p>
                Items in your bag not reserved- check out now to make them
                yours.
              </p>
            </div>
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
          </div>
          <div className={styles.summary}>
            <h3>Order Summary</h3>
            <div className={styles.summaryItem}>
              <h6>1 ITEM</h6>
              <p>$125.00</p>
            </div>
            <div className={styles.summaryItem}>
              <h6>Delivery</h6>
              <p>$60.00</p>
            </div>
            <div className={styles.summaryItem}>
              <h6>Total</h6>
              <p>$185.00</p>
            </div>
            <Button text={'CHECKOUT'} />
          </div>
        </div>
      </div>
      <Recommend />
    </>
  )
}

export default Cart