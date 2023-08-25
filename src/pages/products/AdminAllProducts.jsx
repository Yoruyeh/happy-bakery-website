import styles from './adminAllProducts.module.scss'
import Button from '../../components/button/Button'
import { AddCircle } from '../../assets/icons'
import AdminProductCard from '../../components/adminCard/AdminProductCard'
import { Link } from 'react-router-dom'
import { useAdmin } from '../../context/AdminContext'

const AdminAllProducts = () => {
  const { adminProducts } = useAdmin()

  return (
    <div className={styles.allProducts}>
      <div className={styles.title}>
        <div className={styles.text}>
          <h5>All Products</h5>
          <p>Home ＞ All Products</p>
        </div>
        <Link to="new">
          <Button text={'ADD NEW PRODUCT'} price={<AddCircle />} />
        </Link>
      </div>
      <div className={styles.cards}>
        {adminProducts &&
          adminProducts.length > 0 && adminProducts.map((product) => (
            <Link to={`${product.id}`} key={product.id}>
              <AdminProductCard product={product} />
            </Link>
          ))}
      </div>
    </div>
  )
}

export default AdminAllProducts
