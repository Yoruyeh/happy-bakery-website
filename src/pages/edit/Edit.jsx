import styles from './edit.module.scss'
import { TextInput } from '../../components/input/Input'
import Button from '../../components/button/Button'

const Edit = () => {
  return (
    <div className={styles.edit}>
      <form>
        <h3>Update Password</h3>
        <div className={styles.inputWrapper}>
          <TextInput
            type={'text'}
            placeholder={'Current Password'}
            required={true}
          />
          <TextInput
            type={'text'}
            placeholder={'New Password'}
            required={true}
          />
          <TextInput
            type={'text'}
            placeholder={'Confirm New Password'}
            required={true}
          />
        </div>
        <Button text={'UPDATE'} />
      </form>
    </div>
  )
}

export default Edit