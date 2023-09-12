import styles from './adminOrderDetail.module.scss'
import { Calendar, OutlineUser, Bag } from '../../assets/icons'
import Button from '../../components/button/Button'
import ProductDataTable from '../../components/dataTable/ProductDataTable'
import { useAdminOrders } from '../../context/AdminOrdersContext'
import SelectedButton from '../../components/button/SelectedButton'
import { useEffect, useState } from 'react'
import { AdminGetOrders, AdminModifyOrder } from '../../api/admin.orders'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

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
  const navigate = useNavigate()
  const { adminOrder, setAdminOrders, adminOrderCount, dateValue } =
    useAdminOrders()
  const [editOrderInfo, setEditOrderInfo] = useState({
    orderStatus: adminOrder.status,
    note: adminOrder.note
  })

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

  const handleEditOrderInfoChange = (event) => {
    const { name, value } = event.target
    setEditOrderInfo((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSaveClick = async () => {
    const { status, message } = await AdminModifyOrder(
      adminOrder.id,
      editOrderInfo
    )
    if (status === 'success') {
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: `Successfully Updated Order#${adminOrder.id}`,
        showConfirmButton: false,
        timer: 1500
      })
      const { orders } = await AdminGetOrders({
        page: 1,
        perPage: adminOrderCount,
        startDate: dateValue.startDate,
        endDate: dateValue.endDate
      })
      setAdminOrders(orders)
      navigate(-1)
      return
    }
    Swal.fire({
      position: 'top',
      icon: 'error',
      title: `${message}`,
      showConfirmButton: false,
      timer: 1500
    })
  }

   useEffect(() => {
     const container = document.querySelector('.outlet')
     if (container) container.scrollTop = 0
   }, [])

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
            <SelectedButton
              defaultValue={editOrderInfo.orderStatus}
              name="orderStatus"
              onChange={(e) => handleEditOrderInfoChange(e)}
            >
              <option value="" disabled>
                Change Status
              </option>
              <option value="pending">Pending</option>
              <option value="delivered">Delivered</option>
              <option value="canceled">Canceled</option>
            </SelectedButton>
            <Button text={'Save'} onClick={() => handleSaveClick()}/>
          </div>
        </div>
        <div className={styles.body}>
          {AdminOrderCardInfo.map((item) => (
            <AdminOrderCard item={item} key={item.id} />
          ))}
        </div>
        <div className={styles.footer}>
          <div className={styles.payment}>
            <h6>Payment Info</h6>
            <p>{adminOrder.payment_method}</p>
          </div>
          <div className={styles.note}>
            <h6>Note</h6>
            <textarea
              placeholder="Type some notes"
              name="note"
              defaultValue={editOrderInfo.note}
              onChange={(e) => handleEditOrderInfoChange(e)}
            ></textarea>
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