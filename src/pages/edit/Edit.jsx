import styles from './edit.module.scss'
import { TextInput } from '../../components/input/Input'
import Button from '../../components/button/Button'
import { EditPassword } from '../../api/user.auth'
import { useState } from 'react'
import Swal from 'sweetalert2'

const Edit = () => {
  const [currentPW, setCurrentPW] = useState('')
  const [newPW, setNewPW] = useState('')
  const [confirmPW, setConfirmPW] = useState('')

  const handleUpdateClick = async () => {
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

    const { status } = await EditPassword({
      currentPW,
      newPW,
      confirmPW
    })

    if (status === 'success') {
      setCurrentPW('')
      setNewPW('')
      setConfirmPW('')
      
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
    <div className={styles.edit}>
      <form>
        <h3>Update Password</h3>
        <div className={styles.inputWrapper}>
          <TextInput
            type={'password'}
            placeholder={'Current Password'}
            value={currentPW}
            required={true}
            onChange={(currentPWInputValue) =>
              setCurrentPW(currentPWInputValue)
            }
          />
          <TextInput
            type={'password'}
            placeholder={'New Password'}
            value={newPW}
            required={true}
            onChange={(newPWInputValue) => setNewPW(newPWInputValue)}
          />
          <TextInput
            type={'password'}
            placeholder={'Confirm New Password'}
            value={confirmPW}
            required={true}
            onChange={(confirmedPWInputValue) =>
              setConfirmPW(confirmedPWInputValue)
            }
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

export default Edit