import styles from './shipment.module.scss'
import OrderSummaryCard from '../../components/card/OrderSummaryCard'
import Button from '../../components/button/Button'
import OrderCard from '../../components/card/OrderCard'
import { TextInput } from '../../components/input/Input'
import { Link } from 'react-router-dom'
import { useUserCartItems } from '../../context/CartContext'
import { useEffect, useState } from 'react'
import { useUserOrders } from '../../context/OrdersContext'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

const Shipment = () => {
  const navigate = useNavigate()
  const { userCartItems, totalPrice, shippingFee, setShippingFee } =
    useUserCartItems()
  const { handleShipmentDataChange, shipmentData } =
    useUserOrders()
  const [activeButton, setActiveButton] = useState(shippingFee === 60 ? 1 : 2)

  const orderProp = {
    item_count: userCartItems.length,
    total_price: totalPrice,
    shipping_fee: shippingFee
  }

  const handleNextStepClick = () => {
    const { email, firstName, lastName, address, phone } = shipmentData

    function isValidEmail(email) {
      const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
      return regex.test(email)
    }

    if (
      !email.trim() ||
      !firstName.trim() ||
      !lastName.trim() ||
      !address.trim() ||
      !phone.trim()
    ) {
      Swal.fire({
        position: 'top',
        icon: 'error',
        title: 'Cannot be blank',
        showConfirmButton: false,
        timer: 1500
      })
      return
    }

    if (!isValidEmail(email)) {
      Swal.fire({
        position: 'top',
        icon: 'error',
        title: 'Invalid Email',
        showConfirmButton: false,
        timer: 1500
      })
      return
    }

    if (phone.trim().length < 10) {
      Swal.fire({
        position: 'top',
        icon: 'error',
        title: 'Invalid Phone Number',
        showConfirmButton: false,
        timer: 1500
      })
      return
    }

    navigate('../payment')
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className={styles.shipment}>
      <form className={styles.shipmentForm}>
        <p>Login and Checkout faster</p>
        <div className={styles.contactInput}>
          <h3>Contact Details</h3>
          <p>
            We will use these details to keep you inform about your delivery.
          </p>
          <div className={styles.inputWrapper}>
            <TextInput
              type={'email'}
              placeholder={'Email*'}
              name={'email'}
              value={shipmentData.email}
              onChange={(e) => handleShipmentDataChange(e)}
            />
          </div>
        </div>
        <div className={styles.shipmentInput}>
          <h3>Shipping Address</h3>
          <div className={styles.inputWrapper}>
            <div className={styles.row}>
              <TextInput
                type={'text'}
                placeholder={'First Name*'}
                name={'firstName'}
                value={shipmentData.firstName}
                onChange={(e) => handleShipmentDataChange(e)}
              />
            </div>
            <div className={styles.row}>
              <TextInput
                type={'text'}
                placeholder={'Last Name*'}
                name={'lastName'}
                value={shipmentData.lastName}
                onChange={(e) => handleShipmentDataChange(e)}
              />
            </div>
            <div className={styles.row}>
              <TextInput
                type={'text'}
                placeholder={'Delivery Address*'}
                name={'address'}
                value={shipmentData.address}
                onChange={(e) => handleShipmentDataChange(e)}
              />
            </div>
            <div className={styles.row}>
              <TextInput
                type={'tel'}
                placeholder={'Phone Number*'}
                name={'phone'}
                value={shipmentData.phone}
                onChange={(e) => handleShipmentDataChange(e)}
              />
            </div>
          </div>
        </div>
        <div className={styles.deliveryButton}>
          <h3>Delivery Options</h3>
          <div
            className={`${styles.button} ${
              activeButton === 1 ? styles.active : ''
            }`}
            data-name="standard"
            onClick={(e) => {
              setActiveButton(1)
              setShippingFee(60)
              handleShipmentDataChange(e)
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
            data-name="store"
            onClick={(e) => {
              setActiveButton(2)
              setShippingFee(0)
              handleShipmentDataChange(e)
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
          <Button
            text={'NEXT STEP: PAYMENT'}
            onClick={(e) => {
              e.preventDefault()
              handleNextStepClick()
            }}
          />
        </div>
      </form>
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
