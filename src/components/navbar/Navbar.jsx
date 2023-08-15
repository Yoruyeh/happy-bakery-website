import styles from './navbar.module.scss'
import { CaretDown, Logo, Search, User, MenuBar } from '../../assets/icons'
import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { menu, productMenu, userMenu, memberMenu } from '../../data'
import SearchInput from '../searchInput/SearchInput'
import { useAuth } from '../../context/AuthContext'
import Swal from 'sweetalert2'
import { useProducts } from '../../context/ProductsContext'

const DropDownMenu = ({ data, onClickLogout, onClick }) => {
  return (
    <div className={styles.dropdownMenu}>
      <ul className={styles.dropdownMenuList}>
        {data.map((item) => (
          <Link to={item.link} key={item.title} onClick={() => {
            if (item.title === 'Logout') {
              onClickLogout()
              return
            }
            onClick?.(item.id)
          }}>
            <li className={styles.dropdownMenuItem}>{item.title}</li>
          </Link>
        ))}
      </ul>
    </div>
  )
}

const Navbar = () => {
  const [openProductDropdown, setOpenProductDropdown] = useState(false)
  const [openUserDropdown, setOpenUserDropdown] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)
  const [openSearchInput, setOpenSearchInput] = useState(false)
  const productDropdownRef = useRef(null)
  const userDropdownRef = useRef(null)
  const menuRef = useRef(null)
  const searchInputRef = useRef(null)
  const { isAuthenticated, logout } = useAuth()
  const { handleNavItemClick } = useProducts()

  const handleOpenProductDropdown = () => {
    setOpenProductDropdown(!openProductDropdown)
  }

  const handleOpenUserDropdown = () => {
    setOpenUserDropdown(!openUserDropdown)
  }

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu)
  }

  const handleOpenSearchInput = () => {
    setOpenSearchInput(!openSearchInput)
  }

  const handleLogoutClick = () => {
    logout()
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
              <DropDownMenu data={productMenu} onClick={(id) => handleNavItemClick(id)} />
            )}
          </li>
          <Link to="contact">
            <li className={styles.navItem}>Contact Us</li>
          </Link>
        </ul>
      </div>
      <div className={styles.menuBar} onClick={handleOpenMenu} ref={menuRef}>
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
            onClick={handleOpenSearchInput}
          >
            <Search />
          </li>
          <li
            className={`${styles.navItem} ${styles.user}`}
            ref={userDropdownRef}
            onClick={handleOpenUserDropdown}
          >
            <User />
            {openUserDropdown && isAuthenticated && (
              <DropDownMenu
                data={memberMenu}
                onClickLogout={handleLogoutClick}
              />
            )}
            {openUserDropdown && !isAuthenticated && (
              <DropDownMenu data={userMenu} />
            )}
          </li>
          <Link to="cart">
            <li className={`${styles.navItem} ${styles.cartCount}`}>2</li>
          </Link>
        </ul>
      </div>
      {openSearchInput && <SearchInput onClick={handleOpenSearchInput} />}
    </div>
  )
}

export default Navbar
