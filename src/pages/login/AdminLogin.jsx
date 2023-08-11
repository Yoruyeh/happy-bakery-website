import styles from './adminLogin.module.scss'
import { ArrowForward, FacebookColored, AdminLogo } from '../../assets/icons'
import Button from '../../components/button/Button'
import { TextInput, CheckboxInput } from '../../components/input/Input'
import AdminCover from '../../assets/images/admin-cover.jpg'
import { AdminSignIn } from '../../api/admin.auth'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AdminLogin = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleClick = async () => {
    try {
      const res = await AdminSignIn({email, password})
      if (res.success) {
        navigate('/happy-bakery-website/admin/dashboard')
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className={styles.adminLogin}>
      <div className={styles.adminCover}>
        <img src={AdminCover} alt="" />
        <AdminLogo />
      </div>
      <form className={styles.loginForm}>
        <h3>Login</h3>
        <a href="/">Forgot your password?</a>
        <div className={styles.inputWrapper}>
          <TextInput
            type={'email'}
            placeholder={'Email'}
            onChange={(emailInputValue) => setEmail(emailInputValue)}
          />
        </div>
        <div className={styles.inputWrapper}>
          <TextInput
            type={'password'}
            placeholder={'Password'}
            onChange={(passwordInputValue) => setPassword(passwordInputValue)}
          />
        </div>
        <div className={styles.inputWrapper}>
          <CheckboxInput
            type={'checkbox'}
            label={'Keep me logged in - applies to all log in options below.'}
          />
        </div>
        <Button
          text={'EMAIL LOGIN'}
          price={<ArrowForward />}
          onClick={(e) => {
            e.preventDefault()
            handleClick()
          }}
        />
        <Button text={'USE FACEBOOK TO LOGIN'} price={<FacebookColored />} />
        <p>
          By clicking 'Log In' you agree to our website Terms & Conditions,
          <br />
          Privacy Notice and Terms & Conditions.
        </p>
      </form>
    </div>
  )
}

export default AdminLogin
