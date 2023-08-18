import styles from './coupon.module.scss'
import Button from '../../components/button/Button'
import { useEffect, useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Coupon = () => {
  const [status, setStatus] = useState('usable')
  const { isAuthenticated } = useAuth()
  const navigate = useNavigate()

  const handleStatusChange = (status) => {
    setStatus(status)
  }

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/happy-bakery-website/login')
    }
  }, [isAuthenticated, navigate])

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
