import { Link } from 'react-router-dom'
import styles from './cartPeek.module.scss'
import Button from '../../components/button/Button'
import { useUserCartItems } from '../../context/CartContext'

const CartPeek = () => {
  const { userCartItems } = useUserCartItems()

  return userCartItems && userCartItems.length > 0 ? (
    <div className={styles.cartPeek}>
      {userCartItems.map((item) => (
        <div className={styles.cartItem} key={item.Product.name}>
          <div className={styles.cartImg}>
            <img src={item.Product.cover} alt="" />
          </div>
          <div className={styles.cartContent}>
            <h6>{item.Product.name}</h6>
            <p className={styles.quantity}>Quantity: {item.quantity}</p>
            <p className={styles.price}>${item.price_each}</p>
          </div>
        </div>
      ))}
      <Link to="cart">
        <Button text={'CHECKOUT'} />
      </Link>
    </div>
  ) : (
    <div className={styles.cartPeek}>
      <p className={styles.empty}>Your Cart is Empty</p>
    </div>
  )
}

export default CartPeek
