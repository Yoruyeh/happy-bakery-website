import styles from './cartCard.module.scss'
import { Bin } from '../../assets/icons'
import SelectedButton from '../../components/button/SelectedButton'
import { useEffect, useState } from 'react'

const CartCard = ({ item }) => {
  const [quantity, setQuantity] = useState('')

  const handleQuantityChange = (value) => {
    setQuantity(value)
  }

  useEffect(() => {
    setQuantity(item.quantity)
  }, [item.quantity])

  return (
    <div className={styles.cartCard}>
      <div className={styles.cardImg}>
        <img src={item.Product.cover} alt="" />
      </div>
      <div className={styles.cardContent}>
        <div className={styles.cardText}>
          <div className={styles.cardInfo}>
            <h5>{item.Product.name}</h5>
            {/* <p>Cream Cheese</p> */}
            <div className={styles.option}>
              <label htmlFor="quantity">Quantity</label>
              <SelectedButton
                name="quantity"
                id="cartItem-quantity"
                value={quantity}
                onChange={(e) => handleQuantityChange(e.target.value)}
              >
                {Array.from({ length: 10 }, (_, index) => index + 1).map(
                  (num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  )
                )}
              </SelectedButton>
            </div>
          </div>
          <div className={styles.cardSubtotal}>${item.price_each}</div>
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
