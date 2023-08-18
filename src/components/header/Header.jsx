import styles from './header.module.scss'
import { Search, Notification, Down, Logout, Forward } from '../../assets/icons'
import Button from '../button/Button'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import { useAdmin } from '../../context/AdminContext'

const Header = () => {
  const [openDropDown, setOpenDropDown] = useState(false)
  const adminRef = useRef(null)
  const { logout } = useAdmin()

  const handleLogoutClick = () => {
    logout()
    Swal.fire({
      position: 'top',
      icon: 'success',
      title: 'Successfully Logged Out',
      showConfirmButton: false,
      timer: 1500
    })
  }

  useEffect(() => {
     const handleClickOutside = (e) => {
      if (
        adminRef.current &&
        !adminRef.current.contains(e.target)
      ) {
        setOpenDropDown(false)
      }
    }

      document.addEventListener('mousedown', handleClickOutside)
    // 移除監聽
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className={styles.header}>
      <div className={styles.btnWrapper}>
        <div className={styles.btn}>
          <Search />
        </div>
        <div className={styles.btn}>
          <Notification />
        </div>
        <div
          className={styles.btn}
          ref={adminRef}
          onClick={() => setOpenDropDown(!openDropDown)}
        >
          <Button text={'ADMIN'} price={<Down />} />
          {openDropDown && (
            <div className={styles.dropdown}>
              <h6>Admin</h6>
              <Link to="setting">
                <Button text={'Change Password'} price={<Forward />} />
              </Link>
              <Link to="login" onClick={() => handleLogoutClick()}>
                <Button text={'Logout'} price={<Logout />} />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header
