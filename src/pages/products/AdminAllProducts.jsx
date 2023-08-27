import styles from './adminAllProducts.module.scss'
import Button from '../../components/button/Button'
import { AddCircle } from '../../assets/icons'
import AdminProductCard from '../../components/adminCard/AdminProductCard'
import { Link, useParams } from 'react-router-dom'
import { useAdmin } from '../../context/AdminContext'
import Pagination from '../../components/pagination/Pagination'
import { useEffect, useState } from 'react'
import { BaseAdminMenu } from '../../data'

const AdminAllProducts = () => {
  const { adminProducts, adminProductCount, handleNavItemClick } = useAdmin()
  const [activePage, setActivePage] = useState(1)
  let { category } = useParams()
  const pageCount = Math.ceil(adminProductCount / 12)
  const pageArr = Array.from({ length: pageCount }, (_, index) => index + 1)

  const ProductPageTitle = (category) => {
    if (!category) {
      return 'All Products'
    } 
    return category
  }

  const handlePaginationClick = (page) => {
    const SelectedItem = BaseAdminMenu.find((item) =>
      item.link.includes(category)
    )

    handleNavItemClick({
      id: SelectedItem ? SelectedItem.id : '',
      page: page
    })
  }

   useEffect(() => {
     setActivePage(1)
   }, [category])

  return (
    <div className={styles.allProducts}>
      <div className={styles.title}>
        <div className={styles.text}>
          <h5>{ProductPageTitle(category)}</h5>
          <p>Home ＞ {ProductPageTitle(category)}</p>
        </div>
        <Link to="new">
          <Button text={'ADD NEW PRODUCT'} price={<AddCircle />} />
        </Link>
      </div>
      <div className={styles.cards}>
        {adminProducts &&
          adminProducts.length > 0 &&
          adminProducts.map((product) => (
            <Link to={`${product.id}`} key={product.id}>
              <AdminProductCard product={product} />
            </Link>
          ))}
      </div>
      <Pagination
        pageCount={pageCount}
        pageArr={pageArr}
        activePage={activePage}
        setActivePage={setActivePage}
        handlePaginationClick={handlePaginationClick}
      />
    </div>
  )
}

export default AdminAllProducts
