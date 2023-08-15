import styles from './home.module.scss'
import bannerImg from "../../assets/images/dough.jpeg"
import ProductCard from '../../components/card/ProductCard'
import Button from "../../components/button/Button"
import ReviewCard from '../../components/card/ReviewCard'
import { useProducts } from '../../context/ProductsContext'
import { Link } from 'react-router-dom'

const Home = () => {
  const { products, handleNavItemClick } = useProducts()
  const fourNewProducts = products.slice(0, 4)

  return (
    <div className={styles.home}>
      <div className={styles.banner}>
        <h1>
          <span>LET'S </span>
          <span>BAKE </span>
          <span>HAPPY!</span>
        </h1>
        <div className={styles.image}>
          <img src={bannerImg} alt="" />
          <div className={styles.gradient}></div>
          <div className={styles.text}>
            <h2>
              No Chemical Added, <br /> Naturally Delicious!
            </h2>
            <Link
              to="/happy-bakery-website/products/all"
              onClick={() => handleNavItemClick({ id: '' })}
            >
              <Button text={'SHOP NOW'} />
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.title}>
          <h2>
            DON'T MISS OUT <br />
            NEW DROPS
          </h2>
          <Link
            to="/happy-bakery-website/products/new"
            onClick={() => handleNavItemClick({ id: '', sort: 'date_desc' })}
          >
            <Button text={'SHOP NEW DROPS'} />
          </Link>
        </div>
        <div className={styles.product}>
          {fourNewProducts.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.title}>
          <h2>Reviews</h2>
        </div>
        <div className={styles.reviews}>
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </div>
      </div>
    </div>
  )
}

export default Home