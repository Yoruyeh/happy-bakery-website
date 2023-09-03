import styles from './adminOrderDetail.module.scss'
import { Calendar, Down, OutlineUser, Bag } from '../../assets/icons'
import Button from '../../components/button/Button'
import ProductDataTable from '../../components/dataTable/ProductDataTable'
import { useAdminOrders } from '../../context/AdminOrdersContext'

const AdminOrderCard = ({ item }) => {
  return (
    <div className={styles.card}>
      <div className={styles.body}>
        <div className={styles.icon}>{item.icon}</div>
        <div className={styles.text}>
          <h6>{item.title}</h6>
          {item.subtitles.map((subtitle, index) => (
            <p key={index}>{subtitle}</p>
          ))}
        </div>
      </div>
      <Button text={item.text} />
    </div>
  )
}

const AdminOrderDetail = () => {
  const { adminOrder } = useAdminOrders()

  const AdminOrderCardInfo = [
    {
      id: '1',
      title: 'Customer',
      subtitles: [
        `Full Name: ${adminOrder.customer_name} `,
        `Email: ${adminOrder.email}`,
        `Phone: ${adminOrder.phone}`
      ],
      icon: <OutlineUser />,
      text: 'View Profile'
    },
    {
      id: '2',
      title: 'Order Info',
      subtitles: [
        `Shipping: ${adminOrder.shipping_method}`,
        `Payment Method: ${adminOrder.payment_method}`,
        `Status: ${adminOrder.status}`
      ],
      icon: <Bag />,
      text: 'Download Info'
    },
    {
      id: '3',
      title: 'Deliver to',
      subtitles: [`Address: ${adminOrder.address}`],
      icon: <Bag />,
      text: 'View Profile'
    }
  ]

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
          <div className={styles.text}>
            <h6>Orders ID: #{adminOrder.id}</h6>
            <div className={styles.status}>{adminOrder.status}</div>
          </div>
          <p>
            <span>
              <Calendar />
            </span>
            {adminOrder.order_date}
          </p>
          <div className={styles.btn}>
            <Button text={'Change Status'} price={<Down />} />
            <Button text={'Save'} />
          </div>
        </div>
        <div className={styles.body}>
          {AdminOrderCardInfo.map((item) => (
            <AdminOrderCard item={item} key={item.id}/>
          ))}
        </div>
        <div className={styles.footer}>
          <div className={styles.payment}>
            <h6>Payment Info</h6>
            <p>{adminOrder.payment_method}</p>
          </div>
          <div className={styles.note}>
            <h6>Note</h6>
            <textarea placeholder="Type some notes"></textarea>
          </div>
        </div>
      </div>

      <div className={styles.table}>
        <ProductDataTable
          order={adminOrder}
          orderItems={adminOrder.OrderItems}
        />
      </div>
    </div>
  )
}

export default AdminOrderDetail