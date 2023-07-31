import styles from './detail.module.scss'
import ProductCard from '../../components/card/ProductCard'
import { Forward, Backward } from '../../assets/icons'
import ProductImg from '../../assets/images/croissant.jpeg'
import Button from '../../components/button/Button'

const Detail = () => {
  return (
    <div className={styles.detail}>
      <div className={styles.product}>
        <div className={styles.images}>
          <div className={styles.imageWrapper}>
            <img src={ProductImg} alt="" />
          </div>
          <div className={styles.imageWrapper}>
            <img src={ProductImg} alt="" />
          </div>
          <div className={styles.imageWrapper}>
            <img src={ProductImg} alt="" />
          </div>
          <div className={styles.imageWrapper}>
            <img src={ProductImg} alt="" />
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.title}>
            <div className={styles.tag}>New Release</div>
            <h3>CROISSANT (4 flavors)</h3>
            <h4>$125.00</h4>
          </div>
          <div className={styles.wrapper}>
            <h5>FLAVOR</h5>
            <div className={styles.types}>
              <Button text={'ORIGINAL'} />
              <Button text={'SEA SALT'} />
              <Button text={'CREAM CHEESE'} />
              <Button text={'ALMOND'} />
            </div>
          </div>
          <div className={styles.wrapper}>
            <h5>SIZE</h5>
            <div className={styles.sizes}>
              <Button text={'F'} />
            </div>
          </div>
          <div className={styles.buttons}>
            <Button text={'ADD TO CART'} />
            <Button text={'BUY IT NOW'} />
          </div>
          <div className={styles.description}>
            <h5>ABOUT THE PRODUCT</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              eget urna nulla. Praesent dapibus aliquet metus ac fringilla.
              Mauris bibendum justo diam, in mollis tellus vehicula eget.
              Phasellus vehicula ex quis justo consequat, quis scelerisque
              ligula sagittis. In ut diam vitae ante condimentum ultrices et id
              orci. Integer eget orci sed lacus gravida porta eu vitae ex.
              Aliquam et felis a felis mollis condimentum.
            </p>
          </div>
        </div>
      </div>
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
    </div>
  )
}

export default Detail