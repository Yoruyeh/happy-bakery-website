import styles from './navbar.module.scss'
import { CaretDown, Logo, Search, User, MenuBar } from '../../assets/icons'
import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { menu, productMenu, userMenu, memberMenu } from '../../data'
import SearchInput from '../searchInput/SearchInput'
import { useAuth } from '../../context/AuthContext'
import Swal from 'sweetalert2'
import DropDownMenu from './DropDownMenu'
import CartPeek from './CartPeek'
import { useUserCartItems } from '../../context/CartContext'

const Navbar = () => {
  const [openProductDropdown, setOpenProductDropdown] = useState(false)
  const [openUserDropdown, setOpenUserDropdown] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)
  const [openSearchInput, setOpenSearchInput] = useState(false)
  const [openCartPeek, setOpenCartPeek] = useState(false)
  const productDropdownRef = useRef(null)
  const userDropdownRef = useRef(null)
  const menuRef = useRef(null)
  const searchInputRef = useRef(null)
  const cartPeekRef = useRef(null)
  const { isAuthenticated, logout } = useAuth()
  const { userCartItems, setUserCartIems } = useUserCartItems()


  const handleLogoutClick = () => {
    logout()
    setUserCartIems([])
    Swal.fire({
      position: 'top',
      icon: 'success',
      title: 'Successfully Logged Out',
      showConfirmButton: false,
      timer: 1500
    })
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

      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpenMenu(false)
      }

      if (cartPeekRef.current && !cartPeekRef.current.contains(e.target)) {
        setOpenCartPeek(false)
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
            onClick={() => setOpenProductDropdown(!openProductDropdown)}
          >
            Shop
            <CaretDown />
            {openProductDropdown && <DropDownMenu data={productMenu} />}
          </li>
          <Link to="contact">
            <li className={styles.navItem}>Contact Us</li>
          </Link>
        </ul>
      </div>
      <div
        className={styles.menuBar}
        onClick={() => setOpenMenu(!openMenu)}
        ref={menuRef}
      >
        <MenuBar />
        {openMenu && <DropDownMenu data={menu} />}
      </div>
      <Link to="/happy-bakery-website">
        <div className={styles.logoWrapper}>
          <Logo />
        </div>
      </Link>
      <div className={styles.navListWrapper}>
        <ul className={styles.navList}>
          <li
            className={`${styles.navItem} ${styles.search}`}
            ref={searchInputRef}
            onClick={() => setOpenSearchInput(!openSearchInput)}
          >
            <Search />
          </li>
          <li
            className={`${styles.navItem} ${styles.user}`}
            ref={userDropdownRef}
            onClick={() => setOpenUserDropdown(!openUserDropdown)}
          >
            <User />
            {openUserDropdown && isAuthenticated && (
              <DropDownMenu
                data={memberMenu}
                onClickLogout={() => handleLogoutClick()}
              />
            )}
            {openUserDropdown && !isAuthenticated && (
              <DropDownMenu data={userMenu} />
            )}
          </li>
          <li
            className={`${styles.navItem} ${styles.cartCount}`}
            ref={cartPeekRef}
            onClick={() => setOpenCartPeek(!openCartPeek)}
          >
            {userCartItems ? userCartItems.length : '0'}
            {openCartPeek && <CartPeek />}
          </li>
        </ul>
      </div>
      {openSearchInput && (
        <SearchInput onClick={() => setOpenSearchInput(!openSearchInput)} />
      )}
    </div>
  )
}

export default Navbar
