import './productCard.scss'
import ProdcutImg from '../../assets/images/strawberry-cake.jpeg'

const ProductCard = () => {
  ;<div className="card">
    <div className="card-image">
      <img src={ProdcutImg} alt="" />
    </div>
    <div className="card-title">Strawberry Cake</div>
    <div className="card-button">
      VIEW PRODCUT -<span>$ 125</span>
    </div>
  </div>
}

export default ProductCard
