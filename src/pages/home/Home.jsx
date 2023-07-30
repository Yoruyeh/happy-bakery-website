import styles from './home.module.scss'
import bannerImg from "../../assets/images/dough.jpeg"
import ProductCard from '../../components/card/ProductCard'
import Button from "../../components/button/Button"

const Home = () => {
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
          <h2>
            No Chemical Added, <br /> Naturally Delicious!
          </h2>
          <Button text={'SHOP NOW'} />
        </div>
      </div>
      <div className={styles.newdrops}>
        <div className={styles.title}>
          <h2>
            DON'T MISS OUT <br />
            NEW DROPS
          </h2>
          <Button text={'SHOP NEW DROPS'} />
        </div>
        <div className={styles.newdropsCards}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
      <div className={styles.reviews}>
        <div className={styles.title}>
          <h2>Reviews</h2>
        </div>
        <div className={styles.reviewCards}></div>
      </div>
    </div>
  )
}

export default Home