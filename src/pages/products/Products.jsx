import styles from './products.module.scss'
import BannerImg from '../../assets/images/cupcakes.jpeg'
import Button from '../../components/button/Button'
import ProductCard from '../../components/card/ProductCard'
import { Down } from '../../assets/icons'
import Pagination from '../../components/pagination/Pagination'
import { productMenu } from '../../data'
import { Link } from 'react-router-dom'
import { useProducts } from '../../context/ProductsContext'


const Products = () => {
  const { products, handleNavItemClick } = useProducts()

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
            {productMenu.map((item) => (
              <Link
                to={item.link}
                key={item.id}
                data-id={item.id}
                onClick={(e) => handleNavItemClick(e.currentTarget.dataset.id)}
              >
                <li className={styles.navItem}>{item.title}</li>
              </Link>
            ))}
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
              <Button text={'CATEGORIES'} price={<Down />} />
            </div>
          </div>
          <div className={styles.cardWrapper}>
            {products.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
          <Pagination />
        </div>
      </div>
    </div>
  )
}

export default Products
