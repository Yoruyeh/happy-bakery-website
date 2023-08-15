import styles from './products.module.scss'
import BannerImg from '../../assets/images/cupcakes.jpeg'
import ProductCard from '../../components/card/ProductCard'
import Pagination from '../../components/pagination/Pagination'
import { productMenu } from '../../data'
import { Link, useNavigate } from 'react-router-dom'
import { useProducts } from '../../context/ProductsContext'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import SelectedButton from '../../components/button/SelectedButton'

const Products = () => {
  const { products, productCount, handleNavItemClick } = useProducts()
  let { category } = useParams()
  const navigate = useNavigate()

  const ProductPageTitle = (category) => {
    if (category === 'all') {
      return 'All Products'
    } else if (category === 'new') {
      return 'New Drops'
    }

    return category
  }

  const handleSelectBtnChange = (value) => {
    const SelectedItem = productMenu.find(item => item.id === value)
    navigate(SelectedItem.link)
  }

  useEffect(() => {
      window.scrollTo(0, 0)
  }, [])

  return (
    <div className={styles.products}>
      <div className={styles.banner}>
        <img src={BannerImg} alt="" />
        <div className={styles.text}>
          <h5>Limited time only</h5>
          <h1>Get 30% off</h1>
          <p>
            Explore the delicious flavors of Summer with our seasonal desserts.
            You'll find the right dessert to celebrate warm Summer days.
          </p>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.navbar}>
          <h3>Categories</h3>
          <ul className={styles.navList}>
            {productMenu.map((item) => (
              <Link
                to={item.link}
                key={item.title}
                onClick={() => handleNavItemClick(item.id)}
              >
                <li className={styles.navItem}>{item.title}</li>
              </Link>
            ))}
          </ul>
        </div>
        <div className={styles.content}>
          <div className={styles.title}>
            <div className={styles.text}>
              <h2>{ProductPageTitle(category)}</h2>
              <p>{productCount} items</p>
            </div>
            <div className={styles.button}>
              <SelectedButton>
                <option value="price_desc">Price: desc</option>
                <option value="price_asc">Price: asc</option>
                <option value="date_desc">Date: desc</option>
                <option value="date_asc">Date: asc</option>
              </SelectedButton>
              <SelectedButton
                onChange={(e) => {handleNavItemClick(e.target.value)
                handleSelectBtnChange(e.target.value)
                }}
              >
                {productMenu.map((item) => (
                  <option value={item.id} key={item.title}>
                    {item.title}
                  </option>
                ))}
              </SelectedButton>
            </div>
          </div>
          <div className={styles.cardWrapper}>
            {products.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
          <Pagination />
        </div>
      </div>
    </div>
  )
}

export default Products
