import './login.scss'
import { ArrowForward, FacebookColored } from "../../assets/icons"

const Login = () => {
  return (
    <div className="login">
      <form className="login-form">
        <h2>Login</h2>
        <a href="/">Forgot your password?</a>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <label>
          <input type="checkbox" />
          Keep me logged in - applies to all log in options below.
        </label>
        <button type="submit">
          EMAIL LOGIN
          <ArrowForward />
        </button>
        <button>
          USE FACEBOOK TO LOGIN
          <FacebookColored />
        </button>
        <p>
          By clicking 'Log In' you agree to our website Terms & Conditions,
          <br />
          Privacy Notice and Terms & Conditions.
        </p>
      </form>
      <div className="club-info">
        <div className="club-info-text">
          <h2>Join Happy Bakery Club Get Rewarded Today.</h2>
          <p>
            As Happy Bakery club member you get rewarded with what you love for
            doing what you love. Sign up today and receive immediate access to
            these Level 1 benefits:
          </p>
          <ul>
            <li>Free shipping</li>
            <li>A 15% off voucher for your next purchase</li>
            <li>Access to Members Only products and sales</li>
            <li>Special offers and promotions</li>
          </ul>
          <p>
            Join now to start earning points, reach new levels and unlock more
            rewards and benefits from adiClub.​
          </p>
        </div>
        <button>
          JOIN THE CLUB <ArrowForward />
        </button>
      </div>
    </div>
  )
}

export default Login
