import styles from './login.module.scss'
import { ArrowForward, FacebookColored } from "../../assets/icons"
import ClubInfo from '../../components/clubInfo/ClubInfo'
import Button from '../../components/button/Button'
import { TextInput, CheckboxInput } from '../../components/input/Input'
import { useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { signIn } = useAuth()
  const navigate = useNavigate()

  const handleClick = async () => {
    const success = await signIn({
      email,
      password
    })

    if (success) {
      navigate('/happy-bakery-website')
    }
  }

  return (
    <div className={styles.login}>
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
      <ClubInfo />
    </div>
  )
}

export default Login
