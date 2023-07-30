import styles from './register.module.scss'
import { ArrowForward, FacebookColored } from '../../assets/icons'

const Register = () => {
  return (
    <div className={styles.register}>
      <form className={styles.registerForm}>
        <h2>Register</h2>
        <button>
          SIGN UP WITH FACEBOOK
          <FacebookColored />
        </button>

        <p>OR</p>

        <h5>Your Name</h5>
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />

        <h5>Gender</h5>
        <div className={styles.checkboxWrapper}>
          <label>
            <input type="checkbox" name="gender" value="male" /> Male
          </label>
          <label>
            <input type="checkbox" name="gender" value="female" /> Female
          </label>
          <label>
            <input type="checkbox" name="gender" value="other" /> Other
          </label>
        </div>

        <h5>Login Details</h5>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />

        <label>
          <input type="checkbox" />
          By clicking 'Log In' you agree to our website Terms & Conditions,
          <br />
          Privacy Notice and Terms & Conditions.
        </label>

        <label>
          <input type="checkbox" />
          Keep me logged in - applies to all log in options below.
        </label>
        <button type="submit">
          REGISTER
          <ArrowForward />
        </button>
      </form>
      <div className={styles.clubInfo}>
        <div className={styles.clubInfoText}>
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
            rewards and benefits from adiClub.
          </p>
        </div>
        <button>
          JOIN THE CLUB <ArrowForward />
        </button>
      </div>
    </div>
  )
}

export default Register
