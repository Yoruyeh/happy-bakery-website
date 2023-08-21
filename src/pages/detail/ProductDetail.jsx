import 'swiper/css'
import 'swiper/css/pagination'
import styles from './productDetail.module.scss'
import { useEffect, useState } from 'react'
import Button from '../../components/button/Button'
// import Recommend from '../../components/recommend/Recommend'
import { useProducts } from '../../context/ProductsContext'
import SelectedButton from '../../components/button/SelectedButton'
import { useUserCartItems } from '../../context/CartContext'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'

const ProductDetail = () => {
  const { productDetail } = useProducts()
  const { handleAddToCart, handleBuyItNowClick } = useUserCartItems()
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <div className={styles.productDetail}>
        <div className={styles.product}>
          <Swiper
            pagination={true}
            modules={[Pagination]}
            className={styles.mySwiper}
          >
            <SwiperSlide>
              <img src={productDetail.cover} alt="" />
            </SwiperSlide>
            {productDetail.ProductImages &&
            productDetail.ProductImages.length > 0 ? (
              productDetail.ProductImages.map((image) => (
                <SwiperSlide key={image.name}>
                  <img src={image.image_path} alt="" />
                </SwiperSlide>
              ))
            ) : (
              <>
                <SwiperSlide>
                  <img src={productDetail.cover} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={productDetail.cover} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={productDetail.cover} alt="" />
                </SwiperSlide>
              </>
            )}
          </Swiper>
          <div className={styles.images}>
            <div className={styles.imageWrapper}>
              <img src={productDetail.cover} alt="" />
            </div>
            {productDetail.ProductImages &&
            productDetail.ProductImages.length > 0 ? (
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
