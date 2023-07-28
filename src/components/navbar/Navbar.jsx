import './navbar.scss'
import { CaretDown, Logo, Search, User } from "../../assets/icons"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-list-wrapper">
        <ul className="nav-list">
          <li className="nav-item">Our Story</li>
          <li className="nav-item">
            Shop
            <CaretDown />
          </li>
          <li className="nav-item">Contact Us</li>
        </ul>
      </div>
      <div className="logo-wrapper">
        <Logo />
      </div>
      <div className="nav-icons-wrapper">
        <Search />
        <User />
        <div className="cart-count">2</div>
      </div>
    </div>
  )
}

export default Navbar