import styles from './product.module.scss'
import BannerImg from '../../assets/images/cupcakes.jpeg'
import Button from '../../components/button/Button'
import ProductCard from '../../components/card/ProductCard'
import { Down, Forward, Backward } from '../../assets/icons'


const Products = () => {
  return (
    <div className={styles.products}>
      <div className={styles.banner}>
        <img src={BannerImg} alt="" />
        <div className={styles.text}>
          <h3>Limited time only</h3>
          <h1>Get 30% off</h1>
          <p>
            Explore the delicious flavors of Summer with our seasonal desserts.
            You'll find the right dessert to celebrate warm Summer days.
          </p>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.navbar}>
          <h3>Categories</h3>
          <ul className={styles.navList}>
            <li className={styles.navItem}>Birthday Cakes</li>
            <li className={styles.navItem}>Birthday Cakes</li>
            <li className={styles.navItem}>Birthday Cakes</li>
          </ul>
        </div>
        <div className={styles.content}>
          <div className={styles.title}>
            <div className={styles.text}>
              <h1>All Products</h1>
              <p>122 items</p>
            </div>
            <div className={styles.button}>
              <Button text={'PRICE'} price={<Down />} />
            </div>
          </div>
          <div className={styles.cardWrapper}>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
          <div className={styles.paginator}>
            <Button text={'Previous'} price={<Backward />} />
            <Button text={'1'} />
            <Button text={'2'} />
            <Button text={'3'} />
            <Button text={'Next'} price={<Forward />} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products
