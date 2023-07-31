import { ArrowForward } from '../../assets/icons'
import styles from './clubInfo.module.scss'
import Button from '../button/Button'

const ClubInfo = () => {
  return (
    <div className={styles.clubInfo}>
      <div className={styles.clubInfoText}>
        <h3>Join Happy Bakery Club Get Rewarded Today.</h3>
        <p>
          As Happy Bakery club member you get rewarded with what you love for
          doing what you love. Sign up today and receive immediate access to
          these Level 1 benefits:
        </p>
        <ul>
          <li>Free shipping</li>
          <li>A 15% off voucher for your next purchase</li>
          <li>Access to Members Only products and sales</li>
          <li>Special offers and promotions</li>
        </ul>
        <p>
          Join now to start earning points, reach new levels and unlock more
          rewards and benefits from adiClub.
        </p>
      </div>
      <Button text={'JOIN THE CLUB'} price={<ArrowForward />} />
    </div>
  )
}

export default ClubInfo