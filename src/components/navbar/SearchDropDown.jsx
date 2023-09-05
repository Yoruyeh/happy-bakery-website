import { Link } from 'react-router-dom'
import styles from './searchDropDown.module.scss'

const SearchDropDown = ({ products, handleSeeAllClick }) => {
  return (
    <div className={styles.dropdown}>
      <h6>Products</h6>
      {products &&
        products.map((product) => (
          <Link key={product.id}>
            <div className={styles.searchItem}>
              <div className={styles.searchItemImg}>
                <img alt="" src={product.cover} />
              </div>
              <div className={styles.searchItemName}>{product.name}</div>
            </div>
          </Link>
        ))}
      {!products ? (
        <p>Not found</p>
      ) : (
        <div
          className={styles.searchSeeAll}
          onClick={() => handleSeeAllClick()}
        >
          <p>See all products</p>
        </div>
      )}
    </div>
  )
}

export default SearchDropDown
