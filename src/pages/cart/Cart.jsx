import styles from './cart.module.scss'
import Recommend from '../../components/recommend/Recommend'
import Button from '../../components/button/Button'
import CartCard from '../../components/card/CartCard'

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
            <CartCard />
            <CartCard />
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