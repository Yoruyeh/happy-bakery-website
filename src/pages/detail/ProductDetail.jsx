import styles from './productDetail.module.scss'
import { useEffect } from 'react'
import ProductImg from '../../assets/images/croissant.jpeg'
import Button from '../../components/button/Button'
// import Recommend from '../../components/recommend/Recommend'
import { useProducts } from '../../context/ProductsContext'

const ProductDetail = () => {
  const { productDetail } = useProducts()
  console.log(productDetail)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <div className={styles.productDetail}>
        <div className={styles.product}>
          <div className={styles.mainImage}>
            <img src={ProductImg} alt="" />
            <div className={styles.dots}>
              <div className={`${styles.dot} ${styles.active}`}></div>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
            </div>
          </div>
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
              <h3>CROISSANT</h3>
              <h6>Cream Cheese Flavor</h6>
              <h5>$125.00</h5>
            </div>
            <div className={styles.wrapper}>
              <label htmlFor="quantity">Quantity</label>
              <select id="quantity" name="quantity">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <div className={styles.buttons}>
              <Button text={'ADD TO CART'} />
              <Button text={'BUY IT NOW'} />
            </div>
            <div className={styles.description}>
              <h6>ABOUT THE PRODUCT</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                eget urna nulla. Praesent dapibus aliquet metus ac fringilla.
                Mauris bibendum justo diam, in mollis tellus vehicula eget.
                Phasellus vehicula ex quis justo consequat, quis scelerisque
                ligula sagittis. In ut diam vitae ante condimentum ultrices et
                id orci. Integer eget orci sed lacus gravida porta eu vitae ex.
                Aliquam et felis a felis mollis condimentum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                eget urna nulla. Praesent dapibus aliquet metus ac fringilla.
                Mauris bibendum justo diam, in mollis tellus vehicula eget.
                Phasellus vehicula ex quis justo consequat, quis scelerisque
                ligula sagittis. In ut diam vitae ante condimentum ultrices et
                id orci. Integer eget orci sed lacus gravida porta eu vitae ex.
                Aliquam et felis a felis mollis condimentum.
              </p>
            </div>
          </div>
        </div>
        {/* <Recommend /> */}
      </div>
    </>
  )
}

export default ProductDetail