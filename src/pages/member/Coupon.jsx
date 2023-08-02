import styles from './coupon.module.scss'
import Button from '../../components/button/Button'
import { useState } from 'react'

const Coupon = () => {
  const [status, setStatus] = useState('usable')

  const handleStatusChange = (status) => {
    setStatus(status)
  }

  return (
    <div className={styles.coupon}>
      <div className={styles.buttons}>
        <Button text={'usable'} onClick={() => handleStatusChange('usable')} />
        <Button text={'expired'} onClick={() => handleStatusChange('expired')} />
      </div>
      <div className={styles.content}>
        <p>
          {status === 'usable' ? 'No usable coupons' : 'No expired coupons'}
        </p>
      </div>
    </div>
  )
}

export default Coupon
