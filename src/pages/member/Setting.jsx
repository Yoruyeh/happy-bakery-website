import { Link } from 'react-router-dom'
import Button from '../../components/button/Button'
import { TextInput, CheckboxInput } from '../../components/input/Input'
import styles from './setting.module.scss'
import { useAuth } from '../../context/AuthContext'

const Setting = () => {
  const { currentUser } = useAuth()

  return (
    <div className={styles.setting}>
      <h3>Edit Member Info</h3>
      <form className={styles.settingForm}>
        <div className={styles.inputWrapper}>
          <label>First Name </label>
          <TextInput
            type={'text'}
            placeholder={'First Name'}
            defaultValue={currentUser.firstName}
            required={true}
          />
        </div>
        <div className={styles.inputWrapper}>
          <label>Last Name </label>
          <TextInput
            type={'text'}
            placeholder={'Last Name'}
            defaultValue={currentUser.lastName}
            required={true}
          />
        </div>
        <div className={styles.inputWrapper}>
          <label>Birthday </label>
          <TextInput
            type={'date'}
            placeholder={'Birthday'}
            defaultValue={currentUser.birthday}
          />
        </div>
        <div className={styles.inputWrapper}>
          <label>Email </label>
          <TextInput
            type={'email'}
            placeholder={'Email'}
            defaultValue={currentUser.email}
            required={true}
          />
        </div>
        <div className={styles.inputWrapper}>
          <label>Address </label>
          <TextInput
            type={'text'}
            placeholder={'Address'}
            defaultValue={currentUser.address}
          />
        </div>
        <div className={styles.inputWrapper}>
          <label>Phone Number </label>
          <TextInput
            type={'tel'}
            placeholder={'Phone Number'}
            defaultValue={currentUser.phone}
            required={true}
          />
        </div>
        <div className={styles.inputWrapper}>
          <label>Password </label>
          <Link to="../../edit">
            <Button text={'Edit Password'} />
          </Link>
        </div>
        <div className={styles.checkboxWrapper}>
          <CheckboxInput
            type={'checkbox'}
            name={'subscribe'}
            label={'Subscribe Our Newsletter'}
          />
        </div>
      </form>
      <div className={styles.button}>
        <Button text={'SAVE'} />
      </div>
    </div>
  )
}

export default Setting
