import styles from './recommend.module.scss'
import ProductCard from '../card/ProductCard'
import { Forward, Backward } from '../../assets/icons'
import { useProducts } from '../../context/ProductsContext'
import { useEffect, useState } from 'react'


const Recommend = () => {
  const { recommendProducts } = useProducts()
  const [index, setIndex] = useState({
    start: 0,
    end: 4
  })
   const [showProducts, setShowProducts] = useState(
     recommendProducts.slice(index.start, index.end)
   )

  const handleBackwardClick = () => {
    setIndex((prev) => ({
      start: prev.start - 4,
      end: prev.end - 4
    }))
  }

  const handleForwardClick = () => {
     setIndex((prev) => ({
       start: prev.start + 4,
       end: prev.end + 4
     }))
  }

  useEffect(() => {
    setShowProducts(recommendProducts.slice(index.start, index.end))
  }, [index, recommendProducts])

  return (
    <div className={styles.recommend}>
      <div className={styles.title}>
        <h2>You may also like</h2>
        <div className={styles.buttons}>
          <button
            onClick={() => handleBackwardClick()}
            disabled={index.start === 0}
          >
            <Backward />
          </button>
          <button
            onClick={() => handleForwardClick()}
            disabled={index.end === 16}
          >
            <Forward />
          </button>
        </div>
      </div>
      <div className={styles.cards}>
        {showProducts &&
          showProducts.length > 0 &&
          showProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
      <div className={styles.bars}>
        <div
          className={
            index.start === 0
              ? `${styles.bar} ${styles.active}`
              : `${styles.bar}`
          }
        ></div>
        <div
          className={
            index.start === 4
              ? `${styles.bar} ${styles.active}`
              : `${styles.bar}`
          }
        ></div>
        <div
          className={
            index.start === 8
              ? `${styles.bar} ${styles.active}`
              : `${styles.bar}`
          }
        ></div>
        <div
          className={
            index.start === 12
              ? `${styles.bar} ${styles.active}`
              : `${styles.bar}`
          }
        ></div>
      </div>
    </div>
  )
}

export default Recommend
