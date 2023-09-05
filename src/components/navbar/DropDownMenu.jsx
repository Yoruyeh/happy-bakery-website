import { Link } from 'react-router-dom'
import styles from './dropDownMenu.module.scss'
import { useProducts } from '../../context/ProductsContext'

const DropDownMenu = ({ data, onClickLogout }) => {
  const { handleNavItemClick } = useProducts()
  
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
              if (item.title === 'New Drops') {
                handleNavItemClick({ id: item.id, sort: 'date_desc' })
                return
              }
              if (item.title === 'Shop') {
                handleNavItemClick({ id: '' })
                return
              }
              handleNavItemClick({ id: item.id })
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