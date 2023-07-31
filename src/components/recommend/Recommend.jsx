import styles from './recommend.module.scss'
import ProductCard from '../card/ProductCard'
import { Forward, Backward } from '../../assets/icons'


const Recommend = () => {
  return (
      <div className={styles.recommend}>
        <div className={styles.title}>
          <h2>You may also like</h2>
          <div className={styles.buttons}>
            <button disabled>
              <Backward />
            </button>
            <button>
              <Forward />
            </button>
          </div>
        </div>
        <div className={styles.cards}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        <div className={styles.bars}>
          <div className={`${styles.bar} ${styles.active}`}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </div>
      </div>
  )
}

export default Recommend
