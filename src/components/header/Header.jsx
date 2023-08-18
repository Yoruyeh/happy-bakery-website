import styles from './header.module.scss'
import { Search, Notification, Down, Logout, Forward } from '../../assets/icons'
import Button from '../button/Button'
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [openDropDown, setOpenDropDown] = useState(false)
  const adminRef = useRef(null)

  return (
    <div className={styles.header}>
      <div className={styles.btnWrapper}>
        <Search />
        <Notification />
        <Button
          text={'ADMIN'}
          price={<Down />}
          ref={adminRef}
          onClick={() => setOpenDropDown(!openDropDown)}
        />
        {openDropDown && (
          <div className={styles.dropdown}>
            <h6>Admin</h6>
            <Link to='setting'>
              <Button text={'Change Password'} price={<Forward />} />
            </Link>
            <Link to='login'>
              <Button text={'Logout'} price={<Logout />} />
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Header
