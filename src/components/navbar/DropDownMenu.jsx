import { Link } from 'react-router-dom'
import styles from './dropDownMenu.module.scss'


const DropDownMenu = ({ data, onClickLogout, onClick }) => {
  return (
    <div className={styles.dropdownMenu}>
      <ul className={styles.dropdownMenuList}>
        {data.map((item) => (
          <Link
            to={item.link}
            key={item.title}
            onClick={() => {
              if (item.title === 'Logout') {
                onClickLogout()
                return
              }
              onClick?.(item.id)
            }}
          >
            <li className={styles.dropdownMenuItem}>{item.title}</li>
          </Link>
        ))}
      </ul>
    </div>
  )
}

export default DropDownMenu