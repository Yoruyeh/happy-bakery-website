import styles from './shipment.module.scss'
import OrderSummaryCard from '../../components/card/OrderSummaryCard'
import Button from '../../components/button/Button'
import OrderCard from '../../components/card/OrderCard'
import { TextInput } from '../../components/input/Input'
import { Link } from 'react-router-dom'
import { useUserCartItems } from '../../context/CartContext'
import { useEffect, useState } from 'react'


const Shipment = () => {
  const { userCartItems, shippingFee, setShippingFee } = useUserCartItems()
  const [activeButton, setActiveButton] = useState(shippingFee === 60 ? 1 : 2)

  const totalPrice = userCartItems.reduce((total, item) => {
    return total + item.quantity * item.price_each
  }, 0)

  const orderProp = {
    item_count: userCartItems.length,
    total_price: totalPrice,
    shipping_fee: shippingFee
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className={styles.shipment}>
      <div className={styles.shipmentForm}>
        <p>Login and Checkout faster</p>
        <div className={styles.contactInput}>
          <h3>Contact Details</h3>
          <p>
            We will use these details to keep you inform about your delivery.
          </p>
          <div className={styles.inputWrapper}>
            <TextInput type={'email'} placeholder={'Email'} />
          </div>
        </div>
        <div className={styles.shipmentInput}>
          <h3>Shipping Address</h3>
          <div className={styles.inputWrapper}>
            <div className={styles.row}>
              <TextInput type={'text'} placeholder={'First Name*'} />
            </div>
            <div className={styles.row}>
              <TextInput type={'text'} placeholder={'Last Name*'} />
            </div>
            <div className={styles.row}>
              <TextInput type={'text'} placeholder={'Delivery Address*'} />
            </div>
            <div className={styles.row}>
              <TextInput type={'tel'} placeholder={'Phone Number*'} />
            </div>
          </div>
        </div>
        <div className={styles.deliveryButton}>
          <h3>Delivery Options</h3>
          <div
            className={`${styles.button} ${
              activeButton === 1 ? styles.active : ''
            }`}
            onClick={() => {
              setActiveButton(1)
              setShippingFee(60)
            }}
          >
            <div className={styles.text}>
              <h6>Standard Delivery</h6>
              <p>Enter your address to see when you’ll get your order</p>
            </div>
            <div className={styles.price}>$60</div>
          </div>
          <div
            className={`${styles.button} ${
              activeButton === 2 ? styles.active : ''
            }`}
            onClick={() => {
              setActiveButton(2)
              setShippingFee(0)
            }}
          >
            <div className={styles.text}>
              <h6>Collect in store</h6>
              <p>Pay now, collect in store</p>
            </div>
            <div className={styles.price}>Free</div>
          </div>
        </div>
        <div className={styles.link}>
          <Link to="../cart" className={styles.back}>
            <Button text={'BACK'} />
          </Link>
          <Link to="../payment">
            <Button text={'NEXT STEP: PAYMENT'} />
          </Link>
        </div>
      </div>
      <div className={styles.orderInfo}>
        <div className={styles.summary}>
          <OrderSummaryCard order={orderProp} />
        </div>
        <div className={styles.detail}>
          <h3>Order Details</h3>
          <div className={styles.cardWrapper}>
            {userCartItems &&
              userCartItems.map((item) => (
                <OrderCard item={item} key={item.Product.name} />
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shipment
