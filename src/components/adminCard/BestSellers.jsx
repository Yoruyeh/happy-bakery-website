import styles from './bestSellers.module.scss'
import { VerticalDot } from '../../assets/icons'
import Button from '../button/Button'
import { useAdminProducts } from '../../context/AdminProductsContext'

const CardBody = ({ item }) => {
  const amount = item.price_regular * item.salesCount

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
        <h6>${amount}</h6>
        <p>{item.salesCount} sales</p>
      </div>
    </div>
  )
}

const BestSellers = () => {
  const { bestSellers } = useAdminProducts()

  return (
    <div className={styles.bestSellers}>
      <div className={styles.head}>
        <h6>Best Sellers</h6>
        <div className={styles.dot}>
          <VerticalDot />
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
