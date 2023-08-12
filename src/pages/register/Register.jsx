import styles from './register.module.scss'
import { ArrowForward, FacebookColored } from '../../assets/icons'
import ClubInfo from '../../components/clubInfo/ClubInfo'
import Button from '../../components/button/Button'
import { TextInput, CheckboxInput } from '../../components/input/Input'
import { useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

const Register = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [gender, setGender] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [termsAgreement, setTermsAgreement] = useState(false)
  const { signUp } = useAuth()
  const navigate = useNavigate()

  const handleRegisterClick = async () => {
    if (
      firstName.trim().length === 0 ||
      lastName.trim().length === 0 ||
      !gender ||
      email.trim().length === 0 ||
      password.trim().length === 0 ||
      !termsAgreement
    ) {
      Swal.fire({
        position: 'top',
        icon: 'error',
        title: 'Cannot be blank',
        showConfirmButton: false,
        timer: 1500
      })
      return
    }

    const success = await signUp({
      firstName,
      lastName,
      gender,
      email,
      password,
      termsAgreement
    })

    if (success) {
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'Successfully Signed Up',
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
      title: 'Register Failed',
      showConfirmButton: false,
      timer: 1500
    })
  }

  return (
    <div className={styles.register}>
      <form className={styles.registerForm}>
        <h3>Register</h3>
        <Button text={'SIGN UP WITH FACEBOOK'} price={<FacebookColored />} />

        <p>OR</p>

        <div className={styles.name}>
          <h5>Your Name</h5>
          <div className={styles.inputWrapper}>
            <TextInput
              type={'text'}
              placeholder={'First Name'}
              onChange={(firstNameInputValue) =>
                setFirstName(firstNameInputValue)
              }
            />
          </div>
          <div className={styles.inputWrapper}>
            <TextInput
              type={'text'}
              placeholder={'Last Name'}
              onChange={(lastNameInputValue) => setLastName(lastNameInputValue)}
            />
          </div>
        </div>

        <div className={styles.gender}>
          <h5>Gender</h5>
          <div className={styles.checkboxWrapper}>
            <div className={styles.inputWrapper}>
              <CheckboxInput
                type={'checkbox'}
                name={'gender'}
                value={'male'}
                label={'Male'}
                onChange={(isChecked) => {
                  if (isChecked) {
                    setGender('male')
                  } else {
                    setGender('')
                  }
                }}
                disabled={gender && gender !== 'male'}
              />
            </div>
            <div className={styles.inputWrapper}>
              <CheckboxInput
                type={'checkbox'}
                name={'gender'}
                value={'female'}
                label={'Female'}
                onChange={(isChecked) => {
                  if (isChecked) {
                    setGender('female')
                  } else {
                    setGender('')
                  }
                }}
                disabled={gender && gender !== 'female'}
              />
            </div>
            <div className={styles.inputWrapper}>
              <CheckboxInput
                type={'checkbox'}
                name={'gender'}
                value={'other'}
                label={'Other'}
                onChange={(isChecked) => {
                  if (isChecked) {
                    setGender('other')
                  } else {
                    setGender('')
                  }
                }}
                disabled={gender && gender !== 'other'}
              />
            </div>
          </div>
        </div>

        <div className={styles.loginInfo}>
          <h5>Login Details</h5>
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
        </div>

        <div className={styles.checkbox}>
          <div className={styles.inputWrapper}>
            <CheckboxInput
              type={'checkbox'}
              label={`By clicking "Log In" you agree to our website Terms & Conditions,
          Privacy Notice and Terms & Conditions.`}
              name={'termsAgreement'}
              onChange={(isChecked) => {
                setTermsAgreement(isChecked)
              }}
            />
          </div>
          <div className={styles.inputWrapper}>
            <CheckboxInput
              type={'checkbox'}
              label={'Keep me logged in - applies to all log in options below.'}
            />
          </div>
        </div>

        <Button
          text={'REGISTER'}
          price={<ArrowForward />}
          onClick={(e) => {
            e.preventDefault()
            handleRegisterClick()
          }}
        />
      </form>
      <ClubInfo />
    </div>
  )
}

export default Register
