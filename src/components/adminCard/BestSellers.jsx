import styles from './bestSellers.module.scss'
import { VerticalDot } from '../../assets/icons'
import Button from '../button/Button'
import { useAdminProducts } from '../../context/AdminProductsContext'
import { useEffect, useRef, useState } from 'react'
import { GetBestSellers } from '../../api/products'
import { useAdminOrders } from '../../context/AdminOrdersContext'

const CardBody = ({ item }) => {
  const amount = item.price_regular * item.salesCount
  const count = Number(item.salesAmount) / item.price_regular

  return (
    <div className={styles.card}>
      <div className={styles.img}>
        <img src={item.cover} alt="" />
      </div>
      <div className={styles.info}>
        <h6>{item.name}</h6>
        <p>${item.price_regular}</p>
      </div>
      <div className={styles.amount}>
        <h6>${amount || Math.floor(item.salesAmount)}</h6>
        <p>{item.salesCount || count} sales</p>
      </div>
    </div>
  )
}

const DropDown = ({ showCheck, setShowCheck, handleSortBestSellers }) => {
  return (
    <div className={styles.dropDown}>
      <header>Sort By</header>
      <div className={styles.body}>
        <div
          className={styles.option}
          onClick={() => {
            handleSortBestSellers('salesQuantity')
            setShowCheck(!showCheck)
          }}
        >
          <span className={!showCheck ? `${styles.hideCheck}` : ''}>
            &#10003;
          </span>
          <p>Sale Quantity</p>
        </div>
        <div
          className={styles.option}
          onClick={() => {
            handleSortBestSellers('salesAmount')
            setShowCheck(!showCheck)
          }}
        >
          <span className={showCheck ? `${styles.hideCheck}` : ''}>
            &#10003;
          </span>
          <p>Sale Amount</p>
        </div>
      </div>
    </div>
  )
}

const BestSellers = () => {
  const { bestSellers, setBestSellers } = useAdminProducts()
  const { dateValue } = useAdminOrders()
  const [openDropdown, setOpenDropDown] = useState(false)
  const dropDownRef = useRef(null)
  const [showCheck, setShowCheck] = useState(true)
  
  const handleSortBestSellers = async (sort) => {
    const { products } = await GetBestSellers({
      sort,
      startDate: dateValue.startDate,
      endDate: dateValue.endDate
    })
    setBestSellers(products)
  }

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
        setOpenDropDown(false)
      }
    }
     document.addEventListener('mousedown', handleClickOutside)

     return () => {
       document.removeEventListener('mousedown', handleClickOutside)
     }
  }, [])

  useEffect(() => {
    setShowCheck(true)
  }, [dateValue])

  return (
    <div className={styles.bestSellers}>
      <div className={styles.head}>
        <h6>Best Sellers</h6>
        <div
          className={styles.dot}
          ref={dropDownRef}
          onClick={() => setOpenDropDown(!openDropdown)}
        >
          <VerticalDot />
          {openDropdown && (
            <DropDown
              handleSortBestSellers={handleSortBestSellers}
              showCheck={showCheck}
              setShowCheck={setShowCheck}
            />
          )}
        </div>
      </div>
      {bestSellers && bestSellers.length > 0 ? (
        <>
          <div className={styles.body}>
            {bestSellers.map((item) => (
              <CardBody item={item} key={item.id} />
            ))}
          </div>

          <div className={styles.footer}>
            <Button text={'REPORT'} />
          </div>
        </>
      ) : (
        <div className={styles.body}>
          <p>Not Best Sellers Found</p>
        </div>
      )}
    </div>
  )
}

export default BestSellers
