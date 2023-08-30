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
import { useState } from 'react'
import { useAdminProducts } from '../../context/AdminProductsContext'

const DropDownMenu = ({ data, handleNavItemClick }) => {
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
            onClick={() => handleNavItemClick({ id: item.id })}
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
  const { handleNavItemClick, adminMenu } = useAdminProducts()
  const [openDropDown, setOpenDropDown] = useState(false)

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
            onClick={() => handleNavItemClick({ id: '' })}
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
          {openDropDown ? (
            <span onClick={() => setOpenDropDown(!openDropDown)}>
              <Up />
            </span>
          ) : (
            <span onClick={() => setOpenDropDown(!openDropDown)}>
              <Down />
            </span>
          )}
        </h6>
        {openDropDown && (
          <DropDownMenu
            data={adminMenu}
            handleNavItemClick={handleNavItemClick}
          />
        )}
      </div>
    </div>
  )
}

export default AdminNavbar