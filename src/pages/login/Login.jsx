import styles from './login.module.scss'
import { ArrowForward, FacebookColored } from "../../assets/icons"
import ClubInfo from '../../components/clubInfo/ClubInfo'
import Button from '../../components/button/Button'
import { TextInput, CheckboxInput } from '../../components/input/Input'
import { useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { signIn } = useAuth()
  const navigate = useNavigate()

  const handleLoginClick = async () => {
    if (email.trim().length === 0) {
      return
    }

    if (password.trim().length === 0) {
      return
    }

    const success = await signIn({
      email,
      password
    })

    if (success) {
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'Successfully Logged In',
        showConfirmButton: false,
        timer: 1500
      })
      setTimeout(() => {
        navigate('/happy-bakery-website')
      }, 1700)
      return
    }

    Swal.fire({
      position: 'top',
      icon: 'error',
      title: 'Wrong Email or Password',
      showConfirmButton: false,
      timer: 1500
    })
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
            onChange={(passwordInputValue) => 
              setPassword(passwordInputValue)
            }
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
            handleLoginClick()
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
