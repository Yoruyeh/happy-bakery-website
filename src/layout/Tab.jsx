import { Outlet } from 'react-router-dom'
import styles from './tab.module.scss'

const Tab = () => {
  return (
  <div className={styles.tab}>
    Tab
    <div><Outlet /></div>
  </div>
  )
}

export default Tab
