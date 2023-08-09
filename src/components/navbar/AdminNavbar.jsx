import styles from './adminNavbar.module.scss'
import {
  AdminLogo,
  Dashboard,
  Product,
  Document,
  Down,
  Up
} from '../../assets/icons'
import { NavLink } from 'react-router-dom'
import { adminMenu } from '../../data'

const DropDownMenu = ({ data }) => {
  return (
    <div className={styles.dropdownMenu}>
      <ul className={styles.dropdownMenuList}>
        {data.map((item) => (
          <NavLink
            to={item.link}
            key={item.id}
            className={({ isActive }) =>
              isActive
                ? `${styles.dropdownMenuItem} ${styles.active}`
                : `${styles.dropdownMenuItem}`
            }
          >
            <li>
              {item.title}
              <span>{item.quantity}</span>
            </li>
          </NavLink>
        ))}
      </ul>
    </div>
  )
}

const AdminNavbar = () => {
  return (
    <div className={styles.adminNavbar}>
      <div className={styles.logo}>
        <AdminLogo />
      </div>
      <div className={styles.navWrapper}>
        <ul className={styles.navList}>
          <NavLink
            to={'dashboard'}
            className={({ isActive }) =>
              isActive
                ? `${styles.navItem} ${styles.active}`
                : `${styles.navItem}`
            }
          >
            <li>
              <span>
                <Dashboard />
              </span>
              DASHBOARD
            </li>
          </NavLink>
          <NavLink
            to={'all_products'}
            className={({ isActive }) =>
              isActive
                ? `${styles.navItem} ${styles.active}`
                : `${styles.navItem}`
            }
          >
            <li>
              <span>
                <Product />
              </span>
              ALL PRODUCTS
            </li>
          </NavLink>
          <NavLink
            to={'orders'}
            className={({ isActive }) =>
              isActive
                ? `${styles.navItem} ${styles.active}`
                : `${styles.navItem}`
            }
          >
            <li>
              <span>
                <Document />
              </span>
              ORDER LIST
            </li>
          </NavLink>
        </ul>
      </div>
      <div className={styles.categoryWrapper}>
        <h6>
          Categories
          <span>
            <Down />
            <Up />
          </span>
        </h6>
        <DropDownMenu data={adminMenu} />
      </div>
    </div>
  )
}

export default AdminNavbar