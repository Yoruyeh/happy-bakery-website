import styles from './home.module.scss'
import bannerImg from "../../assets/images/dough.jpeg"
import ProductCard from '../../components/card/ProductCard'
import Button from "../../components/button/Button"
import ReviewCard from '../../components/card/ReviewCard'
import { useProducts } from '../../context/ProductsContext'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import ProductImg1 from '../../assets/images/chocolate-cake.jpeg'
import ProductImg2 from '../../assets/images/croissant.jpeg'
import ProductImg3 from '../../assets/images/scone.jpeg'

const Home = () => {
  const { newProducts, handleNavItemClick } = useProducts()
  const fourNewProducts = newProducts.slice(0, 4)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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
          <h2>5-star Reviews</h2>
        </div>
        <div className={styles.reviews}>
          <ReviewCard
            avatar={
              'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1467&q=80'
            }
            title={'Absolutely divine!'}
            text={
              'This cake offers a luscious, melt-in-your-mouth experience with every bite. The depth of flavor and velvety texture is unmatched.'
            }
            productImg={ProductImg1}
          />
          <ReviewCard
            avatar={
              'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
            }
            title={'Exquisite and flaky perfection!'}
            text={
              'This croissant boasts a golden exterior that gives way to layers of buttery bliss. A true testament to artisan baking!'
            }
            productImg={ProductImg2}
          />
          <ReviewCard
            avatar={
              'https://images.unsplash.com/photo-1624561172888-ac93c696e10c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1589&q=80'
            }
            title={'An absolute delight!'}
            text={
              'This blueberry scone is bursting with juicy berries, enveloped in a tender, buttery crumb. Perfectly balanced sweetness makes it a morning must-have!'
            }
            productImg={ProductImg3}
          />
        </div>
      </div>
    </div>
  )
}

export default Home