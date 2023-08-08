import styles from './adminFooter.module.scss'

const AdminFooter = () => {
  return (
    <div className={styles.adminFooter}>
      <div className={styles.footerWrapper}>
        <div className={styles.text}>© 2023 - Happy Bakery Dashboard</div>
        <ul className={styles.links}>
          <li>About</li>
          <li>Careers</li>
          <li>Policy</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default AdminFooter