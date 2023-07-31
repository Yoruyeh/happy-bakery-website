import styles from './shipment.module.scss'
import OrderSummaryCard from '../../components/card/OrderSummaryCard'
import Button from '../../components/button/Button'
import OrderCard from '../../components/card/OrderCard'


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
          <input type="email" placeholder="Email" />
        </div>
        <div className={styles.shipmentInput}>
          <h3>Shipping Address</h3>
          <input type="text" placeholder="First Name*" />
          <input type="text" placeholder="Last Name*" />
          <input type="text" placeholder="Delivery Address*" />
          <input type="phone" placeholder="Phone Number*" />
        </div>
        <div className={styles.deliveryButton}>
          <div className={styles.button}>
            <div className={styles.text}>
              <h6>Standard Delivery</h6>
              <p>Enter your address to see when you’ll get your order</p>
            </div>
            <div className={styles.price}>$6</div>
          </div>
          <div className={styles.button}>
            <div className={styles.text}>
              <h6>Collect in store</h6>
              <p>Pay now, collect in store</p>
            </div>
            <div className={styles.price}>Free</div>
          </div>
        </div>
        <div className={styles.checkboxWrapper}>
          <input type="checkbox" />
          <label>My billing and delivery information are the same</label>
          <input type="checkbox" />
          <label>I’m 13+ year old</label>
          <p>Also want product updates with our newsletter?</p>
          <input type="checkbox" />
          <label>
            Yes, I’d like to receive emails about exclusive sales and more.
          </label>
        </div>
        <Button text={'Next Step: Payment'} />
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
