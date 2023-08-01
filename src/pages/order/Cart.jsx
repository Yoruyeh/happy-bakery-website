import styles from './cart.module.scss'
import { Link } from 'react-router-dom'
import Recommend from '../../components/recommend/Recommend'
import CartCard from '../../components/card/CartCard'
import OrderSummaryCard from '../../components/card/OrderSummaryCard'
import Button from '../../components/button/Button'

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
          <div className={styles.summaryWrapper}>
            <OrderSummaryCard />
            <Link to="../shipment">
              <Button text={'CHECKOUT'} />
            </Link>
          </div>
        </div>
      </div>
      <Recommend />
    </>
  )
}

export default Cart