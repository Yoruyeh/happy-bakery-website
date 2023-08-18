import { Link, useNavigate } from 'react-router-dom'
import Button from '../../components/button/Button'
import { TextInput, CheckboxInput } from '../../components/input/Input'
import styles from './setting.module.scss'
import { useAuth } from '../../context/AuthContext'
import { useEffect, useState } from 'react'
import { EditUserInfo } from '../../api/user.auth'
import Swal from 'sweetalert2'

const Setting = () => {
  const navigate = useNavigate()
  const { currentUser, isAuthenticated } = useAuth()
  const [editUserInfo, setEditUserInfo] = useState({
    firstName: currentUser?.firstName || '',
    lastName: currentUser?.lastName || '',
    birthday: currentUser?.birthday || '',
    address: currentUser?.address || '',
    email: currentUser?.email || '',
    phone: currentUser?.phone || '',
    gender: currentUser?.gender || ''
  })

   const handleEditInputChange = (event) => {
     const { name, value } = event.target
     setEditUserInfo((prev) => ({
       ...prev,
       [name]: value
     }))
   }

  const handleSaveClick = async () => {
    const { firstName, lastName, gender, email, birthday, address, phone } =
      editUserInfo
    if (
      firstName.trim().length === 0 ||
      lastName.trim().length === 0 ||
      !gender ||
      email.trim().length === 0 ||
      !birthday ||
      phone.trim().length === 0
    ) {
      Swal.fire({
        position: 'top',
        icon: 'error',
        title: '* Are Required Fields.',
        showConfirmButton: false,
        timer: 1500
      })
      return
    }

    if (phone.trim().length < 10) {
      Swal.fire({
        position: 'top',
        icon: 'error',
        title: 'Invalid Phone Number',
        showConfirmButton: false,
        timer: 1500
      })
      return
    }


    const { status } = await EditUserInfo({
      firstName,
      lastName,
      birthday,
      email,
      address,
      phone,
      gender
    })
    
    if (status === 'success') {
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'Successfully Saved',
        showConfirmButton: false,
        timer: 1500
      })
      return
    }

    Swal.fire({
      position: 'top',
      icon: 'error',
      title: 'Edit Member Info Failed',
      showConfirmButton: false,
      timer: 1500
    })
  }

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/happy-bakery-website/login')
    }
  }, [isAuthenticated, navigate])

  return (
    <div className={styles.setting}>
      <h3>Edit Member Info</h3>
      <form className={styles.settingForm}>
        <div className={styles.inputWrapper}>
          <label>
            First Name <span>*</span>
          </label>
          <TextInput
            type={'text'}
            placeholder={'First Name'}
            defaultValue={editUserInfo.firstName}
            required={true}
            name={'firstName'}
            onChange={(e) => handleEditInputChange(e)}
          />
        </div>
        <div className={styles.inputWrapper}>
          <label>
            Last Name <span>*</span>
          </label>
          <TextInput
            type={'text'}
            placeholder={'Last Name'}
            defaultValue={editUserInfo.lastName}
            required={true}
            name={'lastName'}
            onChange={(e) => handleEditInputChange(e)}
          />
        </div>
        <div className={styles.inputWrapper}>
          <label>
            Birthday <span>*</span>
          </label>
          <TextInput
            type={'date'}
            placeholder={'Birthday'}
            defaultValue={editUserInfo.birthday}
            name={'birthday'}
            onChange={(e) => handleEditInputChange(e)}
          />
        </div>
        <div className={styles.inputWrapper}>
          <label>
            Email <span>*</span>
          </label>
          <TextInput
            type={'email'}
            placeholder={'Email'}
            defaultValue={editUserInfo.email}
            required={true}
            name={'email'}
            onChange={(e) => handleEditInputChange(e)}
          />
        </div>
        <div className={styles.inputWrapper}>
          <label>Address </label>
          <TextInput
            type={'text'}
            placeholder={'Address'}
            defaultValue={editUserInfo.address}
            name={'address'}
            onChange={(e) => handleEditInputChange(e)}
          />
        </div>
        <div className={styles.inputWrapper}>
          <label>
            Phone Number <span>*</span>
          </label>
          <TextInput
            type={'tel'}
            placeholder={'Should be 10 numbers'}
            defaultValue={editUserInfo.phone}
            required={true}
            name={'phone'}
            onChange={(e) => handleEditInputChange(e)}
          />
        </div>
        <div className={styles.inputWrapper}>
          <h6>
            Gender<span>*</span>
          </h6>
          <div className={styles.checkboxes}>
            <div className={styles.checkbox}>
              <CheckboxInput
                type={'checkbox'}
                name={'gender'}
                value={'male'}
                label={'Male'}
                onChange={(isChecked) => {
                  if (isChecked) {
                    setEditUserInfo((prev) => ({
                      ...prev,
                      gender: 'male'
                    }))
                  } else {
                    setEditUserInfo((prev) => ({
                      ...prev,
                      gender: ''
                    }))
                  }
                }}
                disabled={editUserInfo.gender && editUserInfo.gender !== 'male'}
                checked={editUserInfo.gender && editUserInfo.gender === 'male'}
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
                    setEditUserInfo((prev) => ({
                      ...prev,
                      gender: 'female'
                    }))
                  } else {
                    setEditUserInfo((prev) => ({
                      ...prev,
                      gender: ''
                    }))
                  }
                }}
                disabled={
                  editUserInfo.gender && editUserInfo.gender !== 'female'
                }
                checked={
                  editUserInfo.gender && editUserInfo.gender === 'female'
                }
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
                    setEditUserInfo((prev) => ({
                      ...prev,
                      gender: 'other'
                    }))
                  } else {
                    setEditUserInfo((prev) => ({
                      ...prev,
                      gender: ''
                    }))
                  }
                }}
                disabled={
                  editUserInfo.gender && editUserInfo.gender !== 'other'
                }
                checked={editUserInfo.gender && editUserInfo.gender === 'other'}
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
