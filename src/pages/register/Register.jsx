import styles from './register.module.scss'
import { ArrowForward, FacebookColored } from '../../assets/icons'
import ClubInfo from '../../components/clubInfo/ClubInfo'
import Button from '../../components/button/Button'
import { TextInput, CheckboxInput } from '../../components/input/Input'

const Register = () => {
  return (
    <div className={styles.register}>
      <form className={styles.registerForm}>
        <h3>Register</h3>
        <Button text={'SIGN UP WITH FACEBOOK'} price={<FacebookColored />} />

        <p>OR</p>

        <h5>Your Name</h5>
        <div className={styles.inputWrapper}>
          <TextInput type={'text'} placeholder={'First Name'} />
        </div>
        <div className={styles.inputWrapper}>
          <TextInput type={'text'} placeholder={'Last Name'} />
        </div>

        <h5>Gender</h5>
        <div className={styles.checkboxWrapper}>
          <div className={styles.inputWrapper}>
            <CheckboxInput
              type={'checkbox'}
              name={'gender'}
              value={'male'}
              label={'Male'}
            />
          </div>
          <div className={styles.inputWrapper}>
            <CheckboxInput
              type={'checkbox'}
              name={'gender'}
              value={'female'}
              label={'Female'}
            />
          </div>
          <div className={styles.inputWrapper}>
            <CheckboxInput
              type={'checkbox'}
              name={'gender'}
              value={'other'}
              label={'Other'}
            />
          </div>
        </div>

        <h5>Login Details</h5>
        <div className={styles.inputWrapper}>
          <TextInput type={'email'} placeholder={'Email'} />
        </div>
        <div className={styles.inputWrapper}>
          <TextInput type={'password'} placeholder={'Password'} />
        </div>
        <div className={styles.inputWrapper}>
          <CheckboxInput
            type={'checkbox'}
            label={`By clicking "Log In" you agree to our website Terms & Conditions,
          Privacy Notice and Terms & Conditions.`}
          />
        </div>
        <div className={styles.inputWrapper}>
          <CheckboxInput
            type={'checkbox'}
            label={'Keep me logged in - applies to all log in options below.'}
          />
        </div>

        <Button text={'REGISTER'} price={<ArrowForward />} />
      </form>
      <ClubInfo />
    </div>
  )
}

export default Register
