import styles from './navbar.module.scss'
import { CaretDown, Logo, Search, User, MenuBar, ErrorCircle } from '../../assets/icons'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { menu, productMenu, userMenu, memberMenu } from '../../data'
import { useAuth } from '../../context/AuthContext'
import Swal from 'sweetalert2'
import DropDownMenu from './DropDownMenu'
import CartPeek from './CartPeek'
import { useUserCartItems } from '../../context/CartContext'
import { GetSearchedProducts } from '../../api/products'
import SearchDropDown from './SearchDropDown'
import { useProducts } from '../../context/ProductsContext'

const Navbar = () => {
  const navigate = useNavigate()
  const [openProductDropdown, setOpenProductDropdown] = useState(false)
  const [openUserDropdown, setOpenUserDropdown] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)
  const [openSearchInput, setOpenSearchInput] = useState(false)
  const [searchInputValue, setSearchInputValue] = useState('')
  const [searchProducts, setSearchProducts] = useState([])
  const [openCartPeek, setOpenCartPeek] = useState(false)
  const searchRef = useRef(null)
  const productDropdownRef = useRef(null)
  const userDropdownRef = useRef(null)
  const menuRef = useRef(null)
  const searchInputRef = useRef(null)
  const cartPeekRef = useRef(null)
  const { isAuthenticated, logout } = useAuth()
  const { userCartItems, setUserCartItems } = useUserCartItems()
  const { setProductCount, setProducts } = useProducts()
  const showProducts =
    searchProducts && searchProducts.length > 0 && searchProducts.slice(0, 3)

  const handleLogoutClick = () => {
    logout()
    setUserCartItems([])
    Swal.fire({
      position: 'top',
      icon: 'success',
      title: 'Successfully Logged Out',
      showConfirmButton: false,
      timer: 1500
    })
  }

  const handleSearchChange = async (value) => {
    if (value.trim().length < 2) {
      setSearchProducts([])
      return
    }

    const { products } = await GetSearchedProducts(value)
    if (!products) {
      setSearchProducts([])
      return
    }
    setSearchProducts(products)
  }

  const handleSeeAllClick = () => {
    setProducts(searchProducts)
    setProductCount(searchProducts.length)
    navigate(`products/all?search=${searchInputValue}`)
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
      
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setOpenSearchInput(false)
        setSearchInputValue('')
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
            className={
              openSearchInput
                ? `${styles.search} ${styles.activeSearch}`
                : `${styles.search}`
            }
            ref={searchRef}
            onClick={() => {
              setOpenSearchInput(!openSearchInput)
              setSearchInputValue('')
            }}
          >
            <Search />
            <input
              ref={searchInputRef}
              type="text"
              value={searchInputValue}
              className={openSearchInput ? `${styles.activeInput}` : ''}
              onClick={(e) => e.stopPropagation()}
              onChange={(e) => {
                setSearchInputValue(e.target.value)
                handleSearchChange(e.target.value)
              }}
            />
            {searchInputValue && (
              <div
                className={styles.cancelbtn}
                onClick={(e) => {
                  e.stopPropagation()
                  setSearchInputValue('')
                }}
              >
                <ErrorCircle />
              </div>
            )}
            {searchInputValue && (
              <SearchDropDown
                products={showProducts}
                handleSeeAllClick={handleSeeAllClick}
              />
            )}
          </li>
          <li
            className={styles.user}
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
            className={styles.cartCount}
            ref={cartPeekRef}
            onClick={() => setOpenCartPeek(!openCartPeek)}
          >
            {userCartItems ? userCartItems.length : '0'}
            {openCartPeek && <CartPeek />}
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
