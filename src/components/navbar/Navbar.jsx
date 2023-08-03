import styles from './navbar.module.scss'
import { CaretDown, Logo, Search, User } from "../../assets/icons"
import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { menu, userMenu } from '../../data'

const DropDownMenu = ({ data }) => {
  return (
    <div className={styles.dropdownMenu}>
      <ul className={styles.dropdownMenuList}>
        {data.map((item) => (
          <Link to={item.link} key={item.id}>
            <li className={styles.dropdownMenuItem}>{item.title}</li>
          </Link>
        ))}
        {/* <Link to={data.link}>
          <li className={styles.dropdownMenuItem}>All</li>
        </Link>
        <li className={styles.dropdownMenuItem}>New Drops</li>
        <li className={styles.dropdownMenuItem}>Birthday Cakes</li>
        <li className={styles.dropdownMenuItem}>Cupcakes</li>
        <li className={styles.dropdownMenuItem}>European Breads</li>
        <li className={styles.dropdownMenuItem}>Toasts</li>
        <li className={styles.dropdownMenuItem}>Biscuits</li>
        <li className={styles.dropdownMenuItem}>Croissants</li>
        <li className={styles.dropdownMenuItem}>Donuts</li>
        <li className={styles.dropdownMenuItem}>Scones</li> */}
      </ul>
    </div>
  )
}

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
            {openProductDropdown && <DropDownMenu data={menu} />}
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
      <div className={styles.navListWrapper}>
        <ul className={styles.navList}>
          <li className={`${styles.navItem} ${styles.search}`}>
            <Search />
          </li>
          <li
            className={`${styles.navItem} ${styles.user}`}
            onClick={handleOpenUserDropdown}
          >
            <User />
            {openUserDropdown && <DropDownMenu data={userMenu} />}
          </li>
          <li className={`${styles.navItem} ${styles.cartCount}`}>2</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar