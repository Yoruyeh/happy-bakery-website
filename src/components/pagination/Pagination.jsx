import { Backward, Forward } from '../../assets/icons'
import styles from './pagination.module.scss'


const Pagination = ({
  productCount,
  handlePaginationClick,
  activePage,
  setActivePage
}) => {
  const pageCount = Math.ceil(productCount / 9)
  const pageArr = Array.from({ length: pageCount }, (_, index) => index + 1)

  return (
    <div className={styles.pagination}>
      <button
        className={activePage - 1 === 0 ? styles.disabled : ''}
        onClick={() => {
          if (activePage - 1 === 0) {
            return
          }
          setActivePage(activePage - 1)
          handlePaginationClick(activePage - 1)
        }}
      >
        <Backward />
        Previous
      </button>
      {pageArr.map((page) => (
        <button
          key={page}
          className={activePage === page ? styles.active : ''}
          onClick={() => {
            setActivePage(page)
            handlePaginationClick(page)
          }}
        >
          {page}
        </button>
      ))}
      <button
        className={activePage + 1 > pageCount ? styles.disabled : ''}
        onClick={() => {
          if (activePage + 1 > pageCount) {
            return
          }
          setActivePage(activePage + 1)
          handlePaginationClick(activePage + 1)
        }}
      >
        Next
        <Forward />
      </button>
    </div>
  )
}

export default Pagination