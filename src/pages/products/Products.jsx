import styles from './product.module.scss'
import BannerImg from '../../assets/images/cupcakes.jpeg'
import Button from '../../components/button/Button'
import ProductCard from '../../components/card/ProductCard'
import { Down } from '../../assets/icons'
import Pagination from '../../components/pagination/Pagination'


const Products = () => {
  return (
    <div className={styles.products}>
      <div className={styles.banner}>
        <img src={BannerImg} alt="" />
        <div className={styles.text}>
          <h5>Limited time only</h5>
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
              <h2>All Products</h2>
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
          <Pagination />
        </div>
      </div>
    </div>
  )
}

export default Products
