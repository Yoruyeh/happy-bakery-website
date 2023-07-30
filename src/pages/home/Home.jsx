import "./home.scss"
import bannerImg from "../../assets/images/dough.jpeg"
import ProductCard from '../../components/card/ProductCard'
import Button from "../../components/button/Button"

const Home = () => {
  return (
    <div className="home">
      <div className="banner">
        <h1>
          <span>LET'S </span>
          <span>BAKE </span>
          <span>HAPPY!</span>
        </h1>
        <div className="img">
          <img src={bannerImg} alt="" />
          <div className="gradient-overlay"></div>
          <h2>
            No Chemical Added, <br /> Naturally Delicious!
          </h2>
          <Button text={'SHOP NOW'} />
        </div>
      </div>
      <div className="newdrops">
        <div className="title">
          <h2>
            DON'T MISS OUT <br />
            NEW DROPS
          </h2>
          <Button text={'SHOP NEW DROPS'} />
        </div>
        <div className="newdrops-cards">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
      <div className="reviews">
        <div className="title">
          <h2>Reviews</h2>
        </div>
        <div className="reviews-cards"></div>
      </div>
    </div>
  )
}

export default Home