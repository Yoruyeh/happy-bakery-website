import styles from './header.module.scss'
import {
  Search,
  Notification,
  Down,
  Logout,
  Forward,
  ErrorCircle
} from '../../assets/icons'
import Button from '../button/Button'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import { useAdmin } from '../../context/AdminContext'

const Header = () => {
  const [openDropDown, setOpenDropDown] = useState(false)
  const [openSearchInput, setOpenSearchInput] = useState(false)
  const [searchInputValue, setSearchInputValue] = useState('')
  const adminRef = useRef(null)
  const searchRef = useRef(null)
  const searchInputRef = useRef(null)
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

      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setOpenSearchInput(false)
        setSearchInputValue('')
      }
    }

      document.addEventListener('mousedown', handleClickOutside)
    // 移除監聽
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  useEffect(() => {
    if (openSearchInput) {
      searchInputRef.current.focus()
    }
  }, [openSearchInput])


  return (
    <div className={styles.header}>
      <div className={styles.btnWrapper}>
        <div
          ref={searchRef}
          className={
            openSearchInput
              ? `${styles.searchBtn} ${styles.activeSearch}`
              : `${styles.searchBtn}`
          }
        >
          <Search
            onClick={() => {
              setOpenSearchInput(!openSearchInput)
              setSearchInputValue('')
            }}
          />
          <input
            ref={searchInputRef}
            type="text"
            value={searchInputValue}
            className={openSearchInput ? `${styles.activeInput}` : ''}
            onClick={(e) => e.stopPropagation()}
            onChange={(e) => setSearchInputValue(e.target.value)}
          />
          {searchInputValue && (
            <div
              className={styles.cancelbtn}
              onClick={(e) => {
                e.stopPropagation()
                setSearchInputValue('')
              }}
            >
              <ErrorCircle />
            </div>
          )}
        </div>
        <div className={styles.notiBtn}>
          <Notification />
        </div>
        <div
          className={styles.adminBtn}
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
