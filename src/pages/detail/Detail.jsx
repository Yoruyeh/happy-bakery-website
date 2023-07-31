import styles from './detail.module.scss'
import ProductImg from '../../assets/images/croissant.jpeg'
import Button from '../../components/button/Button'
import Recommend from '../../components/recommend/Recommend'

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
      <Recommend />
    </div>
  )
}

export default Detail