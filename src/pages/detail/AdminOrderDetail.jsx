import styles from './adminOrderDetail.module.scss'
import { Calendar, Down, OutlineUser, Bag } from '../../assets/icons'
import Button from '../../components/button/Button'

const AdminOrderCard = ({ icon }) => {
  return (
    <div className={styles.card}>
      <div className={styles.body}>
        <div className={styles.icon}>{icon}</div>
        <div className={styles.text}>
          <h6>Customer</h6>
          <p>Full Name: </p>
          <p>Email: </p>
          <p>Phone: </p>
        </div>
      </div>
      <Button text={'View Profile'}/>
    </div>
  )
}

const AdminOrderDetail = () => {
  return (
    <div className={styles.adminOrderDetail}>
      <div className={styles.title}>
        <h5>Order Details</h5>
        <div className={styles.text}>
          <p>Home ＞ Order List ＞ Order Details</p>
        </div>
      </div>

      <div className={styles.info}>
        <div className={styles.header}>
          <div className={styles.title}>
            <h6>Orders ID: #6743</h6>
            <div className={styles.status}>Pending</div>
          </div>
          <p>
            <span>
              <Calendar />
            </span>
            Feb 16,2022 - Feb 20,2022
          </p>
          <div className={styles.btn}>
            <Button text={'Change Status'} price={<Down />} />
            <Button text={'Save'} />
          </div>
        </div>
        <div className={styles.body}>
          <AdminOrderCard icon={<OutlineUser />} />
          <AdminOrderCard icon={<Bag />} />
          <AdminOrderCard icon={<Bag />} />
        </div>
        <div className={styles.footer}>
          <div className={styles.payment}>
            <h6>Payment Info</h6>
            <p>Credit Card</p>
          </div>
          <div className={styles.note}>
            <h6>Note</h6>
            <textarea placeholder="Type some notes"></textarea>
          </div>
        </div>
      </div>

      <div className={styles.table}></div>
    </div>
  )
}

export default AdminOrderDetail