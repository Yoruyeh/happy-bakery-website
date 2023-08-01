import styles from './navbar.module.scss'
import { CaretDown, Logo, Search, User } from "../../assets/icons"
import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'

const Navbar = () => {
  const [openProductDropdown, setOpenProductDropdown] = useState(false)
  const [openUserDropdown, setOpenUserDropdown] = useState(false)
  const productDropdownRef= useRef(null)
  const userDropdownRef = useRef(null)


  const handleOpenProductDropdown = () => {
    setOpenProductDropdown(!openProductDropdown)
  }

  const handleOpenUserDropdown = () => {
    setOpenUserDropdown(!openUserDropdown)
  }

  useEffect(() => {
    const handleClickOutside = (e) => {
      //  dropdownRef不為空且點擊事件的目標元素不在 dropdown-menu 的範圍之內
      if (
        productDropdownRef.current &&
        !productDropdownRef.current.contains(e.target)
      ) {
        setOpenProductDropdown(false)
      }

      if (
        userDropdownRef.current &&
        !userDropdownRef.current.contains(e.target)
      ) {
        setOpenUserDropdown(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    // 移除監聽
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className={styles.navbar}>
      <div className={styles.navListWrapper}>
        <ul className={styles.navList}>
          <Link to="about">
            <li className={styles.navItem}>Our Story</li>
          </Link>
          <li
            className={styles.navItem}
            ref={productDropdownRef}
            onClick={handleOpenProductDropdown}
          >
            Shop
            <CaretDown />
            {openProductDropdown && (
              <div className={styles.dropdownMenu}>
                <ul className={styles.dropdownMenuList}>
                  <Link to="products">
                    <li className={styles.dropdownMenuItem}>Birthday Cakes</li>
                  </Link>
                  <li className={styles.dropdownMenuItem}>Cupcakes</li>
                  <li className={styles.dropdownMenuItem}>European Breads</li>
                  <li className={styles.dropdownMenuItem}>Toasts</li>
                  <li className={styles.dropdownMenuItem}>Biscuits</li>
                  <li className={styles.dropdownMenuItem}>Croissants</li>
                  <li className={styles.dropdownMenuItem}>Donuts</li>
                  <li className={styles.dropdownMenuItem}>Scones</li>
                </ul>
              </div>
            )}
          </li>
          <Link to="contact">
            <li className={styles.navItem}>Contact Us</li>
          </Link>
        </ul>
      </div>
      <Link to="/happy-bakery-website">
        <div className={styles.logoWrapper}>
          <Logo />
        </div>
      </Link>
      <div className={styles.navIconsWrapper}>
        <div className={styles.searchIcon}>
          <Search />
        </div>
        <div
          className={styles.userIcon}
          ref={userDropdownRef}
          onClick={handleOpenUserDropdown}
        >
          <User />
          {openUserDropdown && (
            <div className={styles.dropdownUser}>
              <ul className={styles.dropdownUserList}>
                <Link to="login">
                  <li className={styles.dropdownUserItem}>Login</li>
                </Link>
                <Link to="register">
                  <li className={styles.dropdownUserItem}>Register</li>
                </Link>
                <Link to="member">
                  <li className={styles.dropdownUserItem}>Member Center</li>
                </Link>
              </ul>
            </div>
          )}
        </div>
        <Link to="cart">
          <div className={styles.cartCount}>2</div>
        </Link>
      </div>
    </div>
  )
}

export default Navbar