import styles from './payment.module.scss'
import OrderSummaryCard from '../../components/card/OrderSummaryCard'
import Button from '../../components/button/Button'
import OrderCard from '../../components/card/OrderCard'
import { TextInput, CheckboxInput } from '../../components/input/Input'
import { Link } from 'react-router-dom'
import { useUserCartItems } from '../../context/CartContext'
import { useEffect } from 'react'
import { useUserOrders } from '../../context/OrdersContext'
import { PaymentMethod } from '../../data'

const Payment = () => {
  const { userCartItems, shippingFee } = useUserCartItems()
  const { handlePaymentDataChange } = useUserOrders()
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
    <div className={styles.payment}>
      <div className={styles.paymentForm}>
        <p>Login and Checkout faster</p>
        <div className={styles.methodInput}>
          <h3>Payment Method</h3>
          <p>Please Choose a payment method and fill out the payment info.</p>
          <div className={styles.radioWrapper}>
            {PaymentMethod.map((method) => (
              <div className={styles.inputWrapper} key={method.id}>
                <CheckboxInput
                  type={'radio'}
                  name={'paymentMethod'}
                  label={method.name}
                  value={method.value}
                  onChange={(isChecked) => {
                    handlePaymentDataChange(method.value)
                  }}
                />
              </div>
            ))}
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

export default Payment
