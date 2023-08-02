import { Outlet, NavLink } from 'react-router-dom'
import styles from './tab.module.scss'

const Tab = () => {
  return (
    <div className={styles.tab}>
      <ul className={styles.tablist}>
        <NavLink
          to={'setting'}
          className={({ isActive }) =>
            isActive
              ? `${styles.tabItem} ${styles.active}`
              : `${styles.tabItem}`
          }
        >
          <li>Member Info</li>
        </NavLink>
        <NavLink
          to={'orders'}
          className={({ isActive }) =>
            isActive
              ? `${styles.tabItem} ${styles.active}`
              : `${styles.tabItem}`
          }
        >
          <li>Order History</li>
        </NavLink>
        <NavLink
          to={'coupon'}
          className={({ isActive }) =>
            isActive
              ? `${styles.tabItem} ${styles.active}`
              : `${styles.tabItem}`
          }
        >
          <li>Coupon</li>
        </NavLink>
        <NavLink
          to={'wishlist'}
          className={({ isActive }) =>
            isActive
              ? `${styles.tabItem} ${styles.active}`
              : `${styles.tabItem}`
          }
        >
          <li>Wishlist</li>
        </NavLink>
      </ul>
      <div className={styles.memberWrapper}>
        <Outlet />
      </div>
    </div>
  )
}

export default Tab
