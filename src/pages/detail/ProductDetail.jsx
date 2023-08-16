import styles from './productDetail.module.scss'
import { useEffect } from 'react'
import Button from '../../components/button/Button'
// import Recommend from '../../components/recommend/Recommend'
import { useProducts } from '../../context/ProductsContext'
import SelectedButton from '../../components/button/SelectedButton'

const ProductDetail = () => {
  const { productDetail } = useProducts()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <div className={styles.productDetail}>
        <div className={styles.product}>
          <div className={styles.mainImage}>
            <img src={productDetail.cover} alt="" />
            <div className={styles.dots}>
              <div className={`${styles.dot} ${styles.active}`}></div>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
            </div>
          </div>
          <div className={styles.images}>
            <div className={styles.imageWrapper}>
              <img src={productDetail.cover} alt="" />
            </div>
            {productDetail.ProductImages.length > 0 ? (
              productDetail.ProductImages.map((image) => (
                <div className={styles.imageWrapper} key={image.name}>
                  <img src={image.image_path} alt="" />
                </div>
              ))
            ) : (
              <>
                <div className={styles.imageWrapper}>
                  <img src={productDetail.cover} alt="" />
                </div>
                <div className={styles.imageWrapper}>
                  <img src={productDetail.cover} alt="" />
                </div>
                <div className={styles.imageWrapper}>
                  <img src={productDetail.cover} alt="" />
                </div>
              </>
            )}
          </div>
          <div className={styles.content}>
            <div className={styles.title}>
              <div className={styles.tag}>New Release</div>
              <h3>{productDetail.name}</h3>
              {/* <h6>Cream Cheese Flavor</h6> */}
              <h5>${productDetail.price_regular}</h5>
            </div>
            <div className={styles.wrapper}>
              <label htmlFor="quantity">Quantity</label>
              <SelectedButton
                name="quantity"
                id="order-quantity"
              >
                {Array.from({ length: 10 }, (_, index) => index + 1).map(
                  (num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  )
                )}
              </SelectedButton>
            </div>
            <div className={styles.buttons}>
              <Button text={'ADD TO CART'} />
              <Button text={'BUY IT NOW'} />
            </div>
            <div className={styles.description}>
              <h6>ABOUT THE PRODUCT</h6>
              <p>{productDetail.description}</p>
            </div>
          </div>
        </div>
        {/* <Recommend /> */}
      </div>
    </>
  )
}

export default ProductDetail