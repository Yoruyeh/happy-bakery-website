import { Facebook, Instagram, Logo, Tiktok, Twitter } from '../../assets/icons'
import './footer.scss'

const Footer = () => {
  return (
    <div className="footer">
      <div className="upper-footer">
        <div className="subscribe">
          <h3>Join Happy Bakery Club & get 15% off</h3>
          <p>Sign up for free! Join the community.</p>
          <div className="subscribe-input">
            <input type="email" placeholder="Email address" />
            <button>Submit</button>
          </div>
        </div>
        <div className="logo">
          <Logo />
        </div>
      </div>
      <div className="lower-footer">
        <div className="about">
          <h3>About Us</h3>
          <p>
            We are the biggest hyperstore in the universe. We got you all cover
            with our exclusive collections and latest drops.
          </p>
        </div>
        <div className="categories">
          <h4>Categories</h4>
          <ul className="link-list">
            <li className="link-item">Birthday Cakes</li>
            <li className="link-item">Cupcakes</li>
            <li className="link-item">European Breads</li>
            <li className="link-item">Toasts</li>
            <li className="link-item">Biscuits</li>
            <li className="link-item">Croissants</li>
            <li className="link-item">Donuts</li>
            <li className="link-item">Scones</li>
          </ul>
        </div>
        <div className="company">
          <h4>Company</h4>
          <ul className="link-list">
            <li className="link-item">About</li>
            <li className="link-item">Contact</li>
            <li className="link-item">Blog</li>
          </ul>
        </div>
        <div className="social-media">
          <h4>Follow Us</h4>
          <div className="social-media-icons">
            <Facebook />
            <Twitter />
            <Instagram />
            <Tiktok />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer