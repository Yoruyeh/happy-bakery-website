import "./home.scss"
import bannerImg from "../../assets/images/dough.jpeg"
import ProductCard from '../../components/card/ProductCard'

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
          <div class="gradient-overlay"></div>
          <h2>
            No Chemical Added, <br /> Naturally Delicious!
          </h2>
          <button>SHOP NOW</button>
        </div>
      </div>
      <div className="newdrops">
        <div className="title">
          <h2>Don't miss out new drops</h2>
          <button>SHOP NEW DROPS</button>
        </div>
        <div className="newdrops-cards">
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