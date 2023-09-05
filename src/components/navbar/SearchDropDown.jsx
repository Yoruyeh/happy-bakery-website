import styles from './searchDropDown.module.scss'
import { useProducts } from '../../context/ProductsContext'

const SearchDropDown = ({ products, handleSeeAllClick }) => {
  const { handleViewProductClick } = useProducts()

  return (
    <div className={styles.dropdown}>
      <h6>Products</h6>
      {products &&
        products.map((product) => (
          <div
            className={styles.searchItem}
            key={product.id}
            onClick={() => handleViewProductClick(product.id, product.Category.name)}
          >
            <div className={styles.searchItemImg}>
              <img alt="" src={product.cover} />
            </div>
            <div className={styles.searchItemName}>{product.name}</div>
          </div>
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
