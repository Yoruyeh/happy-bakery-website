import { Backward, Forward } from '../../assets/icons'
import styles from './pagination.module.scss'

const Pagination = () => {
  return (
    <div className={styles.pagination}>
      <button>
        <Backward />
         Previous
      </button>
      <button className={styles.active}>1</button>
      <button>2</button>
      <button>3</button>
      <button>
        Next 
        <Forward />
      </button>
    </div>
  )
}

export default Pagination