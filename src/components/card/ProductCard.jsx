import './productCard.scss'
import ProdcutImg from '../../assets/images/strawberry-cake.jpeg'
import Button from '../button/Button'
import Tag from '../tag/Tag'

const ProductCard = () => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={ProdcutImg} alt="" />
        <Tag text={'NEW'}/>
      </div>
      <div className="card-title">STRAWBERRY CAKE</div>
      <div className="card-button">
        <Button text={'VIEW PRODCUT - '} price={'$ 125'} />
      </div>
    </div>
  )
}

export default ProductCard
