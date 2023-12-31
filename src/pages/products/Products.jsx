import styles from './products.module.scss'
import BannerImg from '../../assets/images/cupcakes.jpeg'
import ProductCard from '../../components/card/ProductCard'
import Pagination from '../../components/pagination/Pagination'
import { productMenu } from '../../data'
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
  useParams
} from 'react-router-dom'
import { useProducts } from '../../context/ProductsContext'
import { useEffect, useState } from 'react'
import SelectedButton from '../../components/button/SelectedButton'

const Products = () => {
  const { products, productCount, handleNavItemClick } =
    useProducts()
  let { category } = useParams()
  let location = useLocation()
  const [searchParams] = useSearchParams()
  const searchTerm = searchParams.get('search')
  const navigate = useNavigate()
  const [selectedSortValue, setSelectedSortValue] = useState('')
  const [activePage, setActivePage] = useState(1)
  const pageCount = Math.ceil(productCount / 9)
  const pageArr = Array.from({ length: pageCount }, (_, index) => index + 1)

  const ProductPageTitle = (category) => {
    if (location.search) {
      return `Search: ${searchTerm}`
    } else if (category === 'all') {
      return 'All Products'
    } else if (category === 'new') {
      return 'New Drops'
    }

    return category
  }

  const handleCategoryChange = (value) => {
    const SelectedItem = productMenu.find(item => item.title === value)
    if (!SelectedItem) {
      return
    } 
    
    navigate(SelectedItem.link)

    if (value === 'New Drops') {
      handleNavItemClick({ id: SelectedItem.id, sort: 'date_desc'})
    } else {
      handleNavItemClick({ id: SelectedItem.id })
    }
  }

  const handleSortChange = (value, searchTerm) => {
    setSelectedSortValue(value)
    if (searchTerm) {
      handleNavItemClick({ keyword: searchTerm, sort: value })
      return
    }
    const SelectedItem = productMenu.find((item) =>
      item.link.includes(category)
    )
    handleNavItemClick({ id: SelectedItem.id, sort: value })
  }

  const handlePaginationClick = (page) => {
    if (location.search) {
      handleNavItemClick({
        keyword: searchTerm,
        sort: selectedSortValue,
        page: page
      })
      return
    }
    const SelectedItem = productMenu.find((item) =>
      item.link.includes(category)
    )
    handleNavItemClick({ id: SelectedItem.id, sort: selectedSortValue, page: page })
  }

  useEffect(() => {
    window.scrollTo(0, 500)
  }, [activePage, category])

  useEffect(() => {
    if (category === 'new') {
      setSelectedSortValue('date_desc')
    } else {
      setSelectedSortValue('price_asc')
    }
    setActivePage(1)
  }, [category, searchParams])

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
                onClick={() => {
                  if (item.title === 'New Drops') {
                    handleNavItemClick({ id: item.id, sort: 'date_desc' })
                    return
                  }
                  handleNavItemClick({ id: item.id })
                }}
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
              <SelectedButton
                value={selectedSortValue}
                onChange={(e) => handleSortChange(e.target.value, searchTerm)}
              >
                <option value="price_asc">Price: asc</option>
                <option value="price_desc">Price: desc</option>
                <option value="date_desc">Date: desc</option>
                <option value="date_asc">Date: asc</option>
              </SelectedButton>
              <SelectedButton
                onChange={(e) => {
                  handleCategoryChange(e.target.value)
                }}
              >
                <option value="">Category</option>
                {productMenu.map((item) => (
                  <option value={item.title} key={item.title}>
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
          <Pagination
            pageCount={pageCount}
            pageArr={pageArr}
            handlePaginationClick={handlePaginationClick}
            activePage={activePage}
            setActivePage={setActivePage}
          />
        </div>
      </div>
    </div>
  )
}

export default Products
