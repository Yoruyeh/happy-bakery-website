import styles from './wishlist.module.scss'
import ProductImg1 from '../../assets/images/chocolate-cake.jpeg'
import ProductImg2 from '../../assets/images/scone.jpeg'
import Button from '../../components/button/Button'
import { Bin } from '../../assets/icons'

const Wishlist = () => {
  return (
    <div className={styles.wishlist}>
      <table className={styles.table}>
        <thead className={styles.head}>
          <tr>
            <th>Product Image</th>
            <th>Product Info</th>
            <th>Product Price</th>
            <th>Status</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody className={styles.body}>
          <tr>
            <td>
              <img src={ProductImg1} alt="" />
            </td>
            <td>Chocolate Cake</td>
            <td>$800.00</td>
            <td>
              <div className={styles.buttonWrapper}>
                <Button text={'ADD TO CART'} />
              </div>
            </td>
            <td>
              <div className={styles.buttonWrapper}>
                <Bin />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <img src={ProductImg2} alt="" />
            </td>
            <td>Chocolate Cake</td>
            <td>$800.00</td>
            <td>Restocking...</td>
            <td>
              <div className={styles.buttonWrapper}>
                <Bin />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Wishlist
