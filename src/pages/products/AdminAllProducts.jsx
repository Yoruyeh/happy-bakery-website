import styles from './adminAllProducts.module.scss'
import Button from '../../components/button/Button'
import { AddCircle } from '../../assets/icons'
import AdminProductCard from '../../components/adminCard/AdminProductCard'
import { Link } from 'react-router-dom'

const AdminAllProducts = () => {
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
        <Link to=":id">
          <AdminProductCard />
        </Link>
        <AdminProductCard />
        <AdminProductCard />
        <AdminProductCard />
        <AdminProductCard />
        <AdminProductCard />
        <AdminProductCard />
        <AdminProductCard />
        <AdminProductCard />
      </div>
    </div>
  )
}

export default AdminAllProducts
