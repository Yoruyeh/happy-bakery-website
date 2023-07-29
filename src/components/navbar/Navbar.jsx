import './navbar.scss'
import { CaretDown, Logo, Search, User } from "../../assets/icons"
import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(false)
  const dropdownRef= useRef(null)

  const handleOpenDropdown = () => {
    setOpenDropdown(!openDropdown)
  }

  useEffect(() => {
    const handleClickOutside = (e) => {
      //  dropdownRef不為空且點擊事件的目標元素不在 dropdown-menu 的範圍之內
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenDropdown(false)
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
          <li className="nav-item dropdown" onClick={handleOpenDropdown}>
            Shop
            <CaretDown />
            {openDropdown && (
              <div className="dropdown-menu" ref={dropdownRef}>
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
        <Search />
        <User />
        <div className="cart-count">2</div>
      </div>
    </div>
  )
}

export default Navbar