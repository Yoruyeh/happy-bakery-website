import styles from './cart.module.scss'
import { Link } from 'react-router-dom'
// import Recommend from '../../components/recommend/Recommend'
import CartCard from '../../components/card/CartCard'
import OrderSummaryCard from '../../components/card/OrderSummaryCard'
import Button from '../../components/button/Button'
import { useUserCartItems } from '../../context/CartContext'

const Cart = () => {
  const { userCartItems } = useUserCartItems()
  const totalPrice = userCartItems.reduce((total, item) => {
    return total + item.quantity * item.price_each
  }, 0)

  const orderProp = {
    item_count: userCartItems.length,
    total_price: totalPrice,
    shipping_fee: 0
  }

  return (
    <div className={styles.cart}>
      <div className={styles.text}>
        <h3>Saving to celebrate </h3>
        <p>
          Enjoy up to 60% off thousands of styles during the End of Year sale -
          while suppiles last. No code needed.
        </p>
        <p>Join us or Sign-in</p>
      </div>
      <div className={styles.container}>
        <div className={styles.cartWrapper}>
          <div className={styles.cartText}>
            <h3>Your Bag </h3>
            <p>
              Items in your bag not reserved- check out now to make them yours.
            </p>
          </div>
          <div className={styles.cardWrapper}>
            {userCartItems &&
              userCartItems.map((item) => (
                <CartCard item={item} key={item.Product.id} />
              ))}
          </div>
        </div>
        <div className={styles.summaryWrapper}>
          <OrderSummaryCard order={orderProp} />
          <Link to="../shipment">
            <Button text={'CHECKOUT'} />
          </Link>
        </div>
      </div>
      {/* <Recommend /> */}
    </div>
  )
}

export default Cart