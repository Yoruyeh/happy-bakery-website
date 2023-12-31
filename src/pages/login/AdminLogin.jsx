import styles from './adminLogin.module.scss'
import { ArrowForward, FacebookColored, AdminLogo } from '../../assets/icons'
import Button from '../../components/button/Button'
import { TextInput, CheckboxInput } from '../../components/input/Input'
import AdminCover from '../../assets/images/admin-cover.jpg'
import { AdminSignIn } from '../../api/admin.auth'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { useAdmin } from '../../context/AdminContext'

const AdminLogin = () => {
  const { setIsAuthenticated } = useAdmin()

  const [AdminloginInfo, setAdminLoginInfo] = useState({
    email: '',
    password: ''
  })
  const [keepLogin, setKeepLogin] = useState(false)
  const navigate = useNavigate()

  const handleLoginInputChange = (event) => {
    const { name, value } = event.target
    setAdminLoginInfo((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleAdminLoginClick = async () => {
    const { email, password } = AdminloginInfo 
    if (email.trim().length === 0 || password.trim().length === 0) {
      Swal.fire({
        position: 'top',
        icon: 'error',
        title: 'Cannot be blank',
        showConfirmButton: false,
        timer: 1500
      })
      return
    }
    const { success, token } = await AdminSignIn({
      email,
      password
    })

    if (success) {
      setIsAuthenticated(true)
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'Successfully Logged In',
        showConfirmButton: false,
        timer: 1500
      })
      setTimeout(() => {
        navigate('/happy-bakery-website/admin/dashboard')
      }, 1500)

      if (keepLogin) {
        localStorage.setItem('token', token)
      } else {
        sessionStorage.setItem('token', token)
      }
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
            name={'email'}
            onChange={(e) => handleLoginInputChange(e)}
          />
        </div>
        <div className={styles.inputWrapper}>
          <TextInput
            type={'password'}
            placeholder={'Password'}
            name={'password'}
            onChange={(e) => handleLoginInputChange(e)}
          />
        </div>
        <div className={styles.inputWrapper}>
          <CheckboxInput
            type={'checkbox'}
            label={'Keep me logged in - applies to all log in options below.'}
            onChange={(checked) => setKeepLogin(checked)}
          />
        </div>
        <Button
          text={'EMAIL LOGIN'}
          price={<ArrowForward />}
          onClick={(e) => {
            e.preventDefault()
            handleAdminLoginClick()
          }}
        />
        <Button text={'USE FACEBOOK TO LOGIN'} price={<FacebookColored />} />
        <p>
          By clicking 'Log In' you agree to our website Terms & Conditions,
          <br />
          Privacy Notice and Terms & Conditions.
        </p>
        <Link to="/happy-bakery-website">Back to happy bakery website</Link>
      </form>
    </div>
  )
}

export default AdminLogin
