import styles from './searchInput.module.scss'
import { TextInput } from '../input/Input'
import Button from '../button/Button'

const SearchInput = ({ onClick }) => {
  return (
    <div className={styles.search}>
      <div className={styles.searchBg}></div>
      <div className={styles.searchBox}>
        <div className={styles.closeBtn} onClick={onClick}>
          X
        </div>
        <h3>Find Products</h3>
        <div className={styles.inputWrapper}>
          <TextInput type={'text'} placeholder={'searching...'} />
          <Button text={'Search'} onClick={onClick} />
        </div>
      </div>
    </div>
  )
}

export default SearchInput
