import { Outlet, Link } from 'react-router-dom'
import styles from './tab.module.scss'

const Tab = () => {
  return (
    <div className={styles.tab}>
      <ul className={styles.tablist}>
        <Link to="setting" className={`${styles.tabItem} ${styles.active}`}>
          <li>Member Info</li>
        </Link>
        <Link to="orders" className={styles.tabItem}>
          <li>Order History</li>
        </Link>
        <Link className={styles.tabItem}>
          <li>Discount Voucher</li>
        </Link>
        <Link className={styles.tabItem}>
          <li>Wishlist</li>
        </Link>
        <Link className={styles.tabItem}>
          <li>Message</li>
        </Link>
      </ul>
      <div className={styles.memberWrapper}>
        <Outlet />
      </div>
    </div>
  )
}

export default Tab
