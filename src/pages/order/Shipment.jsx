import styles from './shipment.module.scss'
import OrderSummaryCard from '../../components/card/OrderSummaryCard'
import Button from '../../components/button/Button'
import OrderCard from '../../components/card/OrderCard'
import { TextInput } from '../../components/input/Input'
import { Link } from 'react-router-dom'


const Shipment = () => {
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
          <div className={`${styles.button} ${styles.active}`}>
            <div className={styles.text}>
              <h6>Standard Delivery</h6>
              <p>Enter your address to see when you’ll get your order</p>
            </div>
            <div className={styles.price}>$6.00</div>
          </div>
          <div className={styles.button}>
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
          <Link to="../order/payment">
            <Button text={'NEXT STEP: PAYMENT'} />
          </Link>
        </div>
      </div>
      <div className={styles.orderInfo}>
        <div className={styles.cardWrapper}>
          <OrderSummaryCard />
        </div>
        <div className={styles.cardWrapper}>
          <h3>Order Details</h3>
          <OrderCard />
          <OrderCard />
        </div>
      </div>
    </div>
  )
}

export default Shipment
