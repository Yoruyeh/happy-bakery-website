import styles from './productDetail.module.scss'
import { useEffect, useState } from 'react'
import Button from '../../components/button/Button'
// import Recommend from '../../components/recommend/Recommend'
import { useProducts } from '../../context/ProductsContext'
import SelectedButton from '../../components/button/SelectedButton'
import { useUserCartItems } from '../../context/CartContext'

const ProductDetail = () => {
  const { productDetail } = useProducts()
  const { handleAddToCart, handleBuyItNowClick } = useUserCartItems()
  const [quantity, setQuantity] = useState(1)
  const [mainImg, setMainImg] = useState(productDetail.cover)
  const [activeDot, setActiveDot] = useState("1")

  const handleActiveDotChange = (id) => {
    setActiveDot(id)
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    setMainImg(productDetail.cover)
    setActiveDot("1")
  }, [productDetail.cover])

  return (
    <>
      <div className={styles.productDetail}>
        <div className={styles.product}>
          <div className={styles.mainImage}>
            <img src={mainImg} alt="" />
            <div className={styles.dots}>
              <div
                className={
                  activeDot === '1'
                    ? `${styles.dot} ${styles.active}`
                    : `${styles.dot}`
                }
              ></div>
              <div
                className={
                  activeDot === '2'
                    ? `${styles.dot} ${styles.active}`
                    : `${styles.dot}`
                }
              ></div>
              <div
                className={
                  activeDot === '3'
                    ? `${styles.dot} ${styles.active}`
                    : `${styles.dot}`
                }
              ></div>
              <div
                className={
                  activeDot === '4'
                    ? `${styles.dot} ${styles.active}`
                    : `${styles.dot}`
                }
              ></div>
            </div>
          </div>
          <div className={styles.images}>
            <div className={styles.imageWrapper}>
              <img
                src={productDetail.cover}
                alt=""
                data-id="1"
                onClick={(e) => {
                  setMainImg(productDetail.cover)
                  handleActiveDotChange(e.currentTarget.dataset.id)
                }}
              />
            </div>
            {productDetail.ProductImages &&
            productDetail.ProductImages.length > 0 ? (
              productDetail.ProductImages.map((image, index) => (
                <div
                  className={styles.imageWrapper}
                  key={image.name}
                  data-id={index + 2}
                  onClick={(e) => {
                    setMainImg(image.image_path)
                    handleActiveDotChange(e.currentTarget.dataset.id)
                  }}
                >
                  <img src={image.image_path} alt="" />
                </div>
              ))
            ) : (
              <>
                <div
                  className={styles.imageWrapper}
                  data-id="2"
                  onClick={(e) => {
                    setMainImg(
                      'https://plus.unsplash.com/premium_photo-1690214491960-d447e38d0bd0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
                    )
                    handleActiveDotChange(e.currentTarget.dataset.id)
                  }}
                >
                  <img
                    src="https://plus.unsplash.com/premium_photo-1690214491960-d447e38d0bd0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                    alt=""
                  />
                </div>
                <div className={styles.imageWrapper}>
                  <img
                    src="https://images.unsplash.com/photo-1542826438-bd32f43d626f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1292&q=80"
                    alt=""
                    data-id="3"
                    onClick={(e) => {
                      setMainImg(
                        'https://images.unsplash.com/photo-1542826438-bd32f43d626f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1292&q=80'
                      )
                      handleActiveDotChange(e.currentTarget.dataset.id)
                    }}
                  />
                </div>
                <div className={styles.imageWrapper}>
                  <img
                    src="https://images.unsplash.com/photo-1622621746668-59fb299bc4d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=933&q=80"
                    alt=""
                    data-id="4"
                    onClick={(e) => {
                      setMainImg(
                        'https://images.unsplash.com/photo-1622621746668-59fb299bc4d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=933&q=80'
                      )
                      handleActiveDotChange(e.currentTarget.dataset.id)
                    }}
                  />
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
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
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
              <Button
                text={'ADD TO CART'}
                onClick={() => {
                  handleAddToCart({
                    id: productDetail.id,
                    quantity: Number(quantity),
                    price: productDetail.price_regular
                  })
                }}
              />
              <Button
                text={'BUY IT NOW'}
                onClick={() => {
                  handleBuyItNowClick({
                    id: productDetail.id,
                    quantity: Number(quantity),
                    price: productDetail.price_regular
                  })
                }}
              />
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