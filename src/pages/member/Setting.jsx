import { Link } from 'react-router-dom'
import Button from '../../components/button/Button'
import { TextInput, CheckboxInput } from '../../components/input/Input'
import styles from './setting.module.scss'
import { useAuth } from '../../context/AuthContext'
import { useState } from 'react'
import { EditUserInfo } from '../../api/user.auth'
import Swal from 'sweetalert2'

const Setting = () => {
  const { currentUser } = useAuth()
  const [firstName, setFirstName] = useState(currentUser.firstName || '')
  const [lastName, setLastName] = useState(currentUser.lastName || '')
  const [birthday, setBirthday] = useState(currentUser.birthday || '')
  const [email, setEmail] = useState(currentUser.email || '')
  const [address, setAddress] = useState(currentUser.address || '')
  const [phone, setPhone] = useState(currentUser.phone || '')
  const [gender, setGender] = useState(currentUser.gender || '')

  const handleSaveClick = async () => {
    if (email.trim().length === 0) {
      Swal.fire({
        position: 'top',
        icon: 'error',
        title: 'Email Cannot be blank',
        showConfirmButton: false,
        timer: 1500
      })
      return
    }

    const data = await EditUserInfo({
      firstName,
      lastName,
      birthday,
      email,
      address,
      phone,
      gender
    })
    console.log(data)
  }

  return (
    <div className={styles.setting}>
      <h3>Edit Member Info</h3>
      <form className={styles.settingForm}>
        <div className={styles.inputWrapper}>
          <label>First Name </label>
          <TextInput
            type={'text'}
            placeholder={'First Name'}
            defaultValue={firstName}
            required={true}
            onChange={(firstNameInputValue) =>
              setFirstName(firstNameInputValue)
            }
          />
        </div>
        <div className={styles.inputWrapper}>
          <label>Last Name </label>
          <TextInput
            type={'text'}
            placeholder={'Last Name'}
            defaultValue={lastName}
            required={true}
            onChange={(lastNameInputValue) => setLastName(lastNameInputValue)}
          />
        </div>
        <div className={styles.inputWrapper}>
          <label>Birthday </label>
          <TextInput
            type={'date'}
            placeholder={'Birthday'}
            defaultValue={birthday}
            onChange={(birthdayInputValue) => setBirthday(birthdayInputValue)}
          />
        </div>
        <div className={styles.inputWrapper}>
          <label>Email </label>
          <TextInput
            type={'email'}
            placeholder={'Email'}
            defaultValue={email}
            required={true}
            onChange={(emailInputValue) => setEmail(emailInputValue)}
          />
        </div>
        <div className={styles.inputWrapper}>
          <label>Address </label>
          <TextInput
            type={'text'}
            placeholder={'Address'}
            defaultValue={address}
            onChange={(addressInputValue) => setAddress(addressInputValue)}
          />
        </div>
        <div className={styles.inputWrapper}>
          <label>Phone Number </label>
          <TextInput
            type={'tel'}
            placeholder={'Phone Number'}
            defaultValue={phone}
            required={true}
            onChange={(phoneInputValue) => setPhone(phoneInputValue)}
          />
        </div>
        <div className={styles.inputWrapper}>
          <h6>Gender</h6>
          <div className={styles.checkboxes}>
            <div className={styles.checkbox}>
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
                checked={gender === 'male'}
                disabled={gender && gender !== 'male'}
              />
            </div>
            <div className={styles.checkbox}>
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
                checked={gender === 'female'}
                disabled={gender && gender !== 'female'}
              />
            </div>
            <div className={styles.checkbox}>
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
                checked={gender === 'other'}
                disabled={gender && gender !== 'other'}
              />
            </div>
          </div>
        </div>
        <div className={styles.inputWrapper}>
          <label>Password </label>
          <Link to="../../edit">
            <Button text={'Edit Password'} />
          </Link>
        </div>
      </form>
      <div className={styles.button}>
        <Button
          text={'SAVE'}
          onClick={(e) => {
            e.preventDefault()
            handleSaveClick()
          }}
        />
      </div>
    </div>
  )
}

export default Setting
