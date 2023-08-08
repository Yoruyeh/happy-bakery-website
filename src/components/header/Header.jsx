import styles from './header.module.scss'
import { Search, Notification, Down } from '../../assets/icons'
import Button from '../button/Button'

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.btnWrapper}>
          <Search />
          <Notification />
          <Button text={'ADMIN'} price={<Down />} />
      </div>
    </div>
  )
}

export default Header
