import { Backward, Forward } from '../../assets/icons'
import styles from './pagination.module.scss'


const Pagination = ({
  pageCount,
  pageArr,
  handlePaginationClick,
  activePage,
  setActivePage
}) => {
  return (
    <div className={styles.pagination}>
      <button
        className={activePage - 1 === 0 ? styles.disabled : styles.previous}
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
      <div className={styles.pages}>
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
      </div>
      <div className={styles.smallPages}>
        {pageArr.map((page) => (
          <button
            key={page}
            className={activePage === page ? styles.active : styles.hidden}
            onClick={() => {
              setActivePage(page)
              handlePaginationClick(page)
            }}
          >
            {page}
          </button>
        ))}
      </div>
      <button
        className={activePage + 1 > pageCount ? styles.disabled : styles.next}
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