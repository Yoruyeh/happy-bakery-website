import styles from './login.module.scss'
import { ArrowForward, FacebookColored } from "../../assets/icons"
import ClubInfo from '../../components/clubInfo/ClubInfo'
import Button from '../../components/button/Button'

const Login = () => {
  return (
    <div className={styles.login}>
      <form className={styles.loginForm}>
        <h3>Login</h3>
        <a href="/">Forgot your password?</a>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <label>
          <input type="checkbox" />
          Keep me logged in - applies to all log in options below.
        </label>
        <Button text={'EMAIL LOGIN'} price={<ArrowForward />} />
        <Button text={'USE FACEBOOK TO LOGIN'} price={<FacebookColored />} />
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
