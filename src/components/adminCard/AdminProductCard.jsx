import styles from './adminProductCard.module.scss'
import { Dot, ArrowUp } from '../../assets/icons'
import Dotdotdot from 'dotdotdot-js'
import { useEffect, useRef } from 'react';

const AdminProductCard = ({ product, onClick }) => {
  const descriptionRef = useRef(null)

  useEffect(() => {
    if (descriptionRef.current) {
      new Dotdotdot(descriptionRef.current, {
        truncate: 'word',
        watch: true
      })
    }
  }, [product.description])

  return (
    <div className={styles.adminProductCard} onClick={onClick}>
      <div className={styles.info}>
        <div className={styles.img}>
          <img src={product.cover} alt="" />
        </div>
        <div className={styles.text}>
          <h6>{product.name}</h6>
          <p className={styles.price}>${product.price_regular}</p>
        </div>
        <div className={styles.btn}>
          <Dot />
        </div>
      </div>
      <div ref={descriptionRef} className={styles.description}>
        <h6>Summary</h6>
        <p>{product.description}</p>
      </div>
      <div className={styles.count}>
        <div className={styles.sale}>
          Sales
          <p>
            <ArrowUp />
            {product.salesCount ? product.salesCount : 0}
          </p>
        </div>
        <hr />
        <div className={styles.remain}>
          Remaining Products
          <p>
            <span></span>
            {product.stock_quantity ? product.stock_quantity : 0}
          </p>
        </div>
      </div>
    </div>
  )
}

export default AdminProductCard