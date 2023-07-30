import styles from './login.module.scss'
import { ArrowForward, FacebookColored } from "../../assets/icons"
import ClubInfo from '../../components/clubInfo/ClubInfo'

const Login = () => {
  return (
    <div className={styles.login}>
      <form className={styles.loginForm}>
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
      <ClubInfo />
    </div>
  )
}

export default Login
