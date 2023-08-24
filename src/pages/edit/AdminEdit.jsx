import styles from './adminEdit.module.scss'
import { TextInput } from '../../components/input/Input'
import Button from '../../components/button/Button'
import { AdminEditPassword } from '../../api/admin.auth'
import { useState } from 'react'
import Swal from 'sweetalert2'

const AdminEdit = () => {
  const [passwords, setPassowrds] = useState({
    currentPW: '',
    newPW: '',
    confirmPW: ''
  })

  const handleEditInputChange = (event) => {
    const { name, value } = event.target
    setPassowrds((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleUpdateClick = async () => {
    const { currentPW, newPW, confirmPW } = passwords

    if (
      currentPW.trim().length === 0 ||
      newPW.trim().length === 0 ||
      confirmPW.trim().length === 0
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

    if (newPW !== confirmPW) {
      Swal.fire({
        position: 'top',
        icon: 'error',
        title: 'Passwords do not match',
        showConfirmButton: false,
        timer: 1500
      })
      return
    }

    const { status } = await AdminEditPassword({
      currentPW,
      newPW,
      confirmPW
    })

    if (status === 'success') {
      setPassowrds({
        currentPW: '',
        newPW: '',
        confirmPW: ''
      })

      Swal.fire({
        position: 'top',
        icon: 'success',
        title: `Successfully Updated`,
        showConfirmButton: false,
        timer: 1500
      })
      return
    }

    Swal.fire({
      position: 'top',
      icon: 'error',
      title: 'Update Password Failed',
      showConfirmButton: false,
      timer: 1500
    })
  }

  return (
    <div className={styles.adminEdit}>
      <form>
        <h3>Update Password</h3>
        <div className={styles.inputWrapper}>
          <TextInput
            type={'password'}
            placeholder={'Current Password'}
            value={passwords.currentPW}
            required={true}
            name={'currentPW'}
            onChange={(e) => handleEditInputChange(e)}
          />
          <TextInput
            type={'password'}
            placeholder={'New Password'}
            value={passwords.newPW}
            required={true}
            name={'newPW'}
            onChange={(e) => handleEditInputChange(e)}
          />
          <TextInput
            type={'password'}
            placeholder={'Confirm New Password'}
            value={passwords.confirmPW}
            required={true}
            name={'confirmPW'}
            onChange={(e) => handleEditInputChange(e)}
          />
        </div>
        <Button
          text={'UPDATE'}
          onClick={(e) => {
            e.preventDefault()
            handleUpdateClick()
          }}
        />
      </form>
    </div>
  )
}

export default AdminEdit
