import './navbar.scss'
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
    <div className="navbar">
      <div className="nav-list-wrapper">
        <ul className="nav-list">
          <Link to="about">
            <li className="nav-item">Our Story</li>
          </Link>
          <li
            className="nav-item dropdown"
            ref={productDropdownRef}
            onClick={handleOpenProductDropdown}
          >
            Shop
            <CaretDown />
            {openProductDropdown && (
              <div className="dropdown-menu">
                <ul className="dropdown-menu-list">
                  <Link to="products">
                    <li className="dropdown-menu-item">Birthday Cakes</li>
                  </Link>
                  <li className="dropdown-menu-item">Cupcakes</li>
                  <li className="dropdown-menu-item">European Breads</li>
                  <li className="dropdown-menu-item">Toasts</li>
                  <li className="dropdown-menu-item">Biscuits</li>
                  <li className="dropdown-menu-item">Croissants</li>
                  <li className="dropdown-menu-item">Donuts</li>
                  <li className="dropdown-menu-item">Scones</li>
                </ul>
              </div>
            )}
          </li>
          <Link to="contact">
            <li className="nav-item">Contact Us</li>
          </Link>
        </ul>
      </div>
      <Link to="/happy-bakery-website">
        <div className="logo-wrapper">
          <Logo />
        </div>
      </Link>
      <div className="nav-icons-wrapper">
        <div className="search-icon">
          <Search />
        </div>
        <div
          className="user-icon"
          ref={userDropdownRef}
          onClick={handleOpenUserDropdown}
        >
          <User />
          {openUserDropdown && (
            <div className="dropdown-user">
              <ul className="dropdown-user-list">
                <Link to="login">
                  <li className="dropdown-user-item">Login</li>
                </Link>
                <Link to="register">
                  <li className="dropdown-user-item">Register</li>
                </Link>
              </ul>
            </div>
          )}
        </div>
        <div className="cart-count">2</div>
      </div>
    </div>
  )
}

export default Navbar