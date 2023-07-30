import styles from './register.module.scss'
import { ArrowForward, FacebookColored } from '../../assets/icons'
import ClubInfo from '../../components/clubInfo/ClubInfo'

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
      <ClubInfo />
    </div>
  )
}

export default Register
