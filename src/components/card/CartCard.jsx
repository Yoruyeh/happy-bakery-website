import styles from './cartCard.module.scss'
import { Bin } from '../../assets/icons'
import SelectedButton from '../../components/button/SelectedButton'
import { useEffect, useState } from 'react'
import { useUserCartItems } from '../../context/CartContext'

const CartCard = ({ item }) => {
  const [quantity, setQuantity] = useState('')
  const { handleDeleteCart, handleCartItemQtyChange } = useUserCartItems()


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
                onChange={(e) => {
                  setQuantity(e.target.value)
                  handleCartItemQtyChange({ 
                    id: item.Product.id, 
                    quantity: Number(e.target.value)})
                }}
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
          <div className={styles.icon} onClick={() => handleDeleteCart(item.Product.id)}>
            <Bin />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartCard
