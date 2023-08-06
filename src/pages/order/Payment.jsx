import styles from './payment.module.scss'
import OrderSummaryCard from '../../components/card/OrderSummaryCard'
import Button from '../../components/button/Button'
import OrderCard from '../../components/card/OrderCard'
import { TextInput, CheckboxInput } from '../../components/input/Input'
import { Link } from 'react-router-dom'

const Payment = () => {
  return (
    <div className={styles.payment}>
      <div className={styles.paymentForm}>
        <p>Login and Checkout faster</p>
        <div className={styles.methodInput}>
          <h3>Payment Method</h3>
          <p>Please Choose a payment method and fill out the payment info.</p>
          <div className={styles.radioWrapper}>
            <div className={styles.inputWrapper}>
              <CheckboxInput
                type={'radio'}
                name={'paymentMethod'}
                label={'Credit Card'}
              />
            </div>
            <div className={styles.inputWrapper}>
              <CheckboxInput
                type={'radio'}
                name={'paymentMethod'}
                label={'Bank Transfer'}
              />
            </div>
            <div className={styles.inputWrapper}>
              <CheckboxInput
                type={'radio'}
                name={'paymentMethod'}
                label={'Line Pay'}
              />
            </div>
          </div>
        </div>
        <div className={styles.paymentInput}>
          <h3>Payment Information</h3>
          <div className={styles.inputWrapper}>
            <div className={styles.row}>
              <TextInput type={'text'} placeholder={'Creadit Card Numbers'} />
            </div>
            <div className={styles.row}>
              <TextInput type={'text'} placeholder={'Expire Date MM/YY'} />
            </div>
            <div className={styles.row}>
              <TextInput type={'text'} placeholder={'CVV / CSC'} />
            </div>
            <div className={styles.row}>
              <TextInput type={'text'} placeholder={'Cardholder Name'} />
            </div>
          </div>
        </div>
        <div className={styles.checkboxWrapper}>
          <div className={styles.inputWrapper}>
            <CheckboxInput
              type={'checkbox'}
              label={'My billing and delivery information are the same'}
            />
          </div>
          <div className={styles.inputWrapper}>
            <CheckboxInput type={'checkbox'} label={`I'm 13+ year old`} />
          </div>
          <div className={styles.inputWrapper}>
            <h6>Also want product updates with our newsletter?</h6>
            <CheckboxInput
              type={'checkbox'}
              label={`Yes, I'd like to receive emails about exclusive sales and more.`}
            />
          </div>
        </div>
        <div className={styles.link}>
          <Link to="../shipment" className={styles.back}>
            <Button text={'BACK'} />
          </Link>
          <Link to="../finish">
            <Button text={'REVIEW AND PAY'} />
          </Link>
        </div>
      </div>
      <div className={styles.orderInfo}>
        <div className={styles.summary}>
          <OrderSummaryCard />
        </div>
        <div className={styles.detail}>
          <h3>Order Details</h3>
          <div className={styles.cardWrapper}>
            <OrderCard />
            <OrderCard />
            <OrderCard />
            <OrderCard />
            <OrderCard />
            <OrderCard />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment
