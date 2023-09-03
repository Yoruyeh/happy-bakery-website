import { createContext, useContext, useState, useEffect } from 'react'
import { AdminGetOrderById, AdminGetOrders } from '../api/admin.orders'
import Swal from 'sweetalert2'
import { useLocation, useNavigate } from 'react-router-dom'

const defaultAdminOrdersContext = {
  adminOrders: null,
  setAdminOrders: () => {},
  dateValue: null,
  handleDateChange: () => {}
}

const AdminOrdersContext = createContext(defaultAdminOrdersContext)

export const useAdminOrders = () => useContext(AdminOrdersContext)

export const AdminOrdersProvider = ({ children }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const [adminOrders, setAdminOrders] = useState([])
  const [adminOrderCount, setAdminOrderCount] = useState(0)
  const [adminOrder, setAdminOrder] = useState({})

  const currentDate = new Date()
  const sevenDaysAgo = new Date()
  // 設置日期為7天前
  sevenDaysAgo.setDate(currentDate.getDate() - 7)

  const formattedInputValue = (date) => {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const format = `${year}-${month < 10 ? '0' + month : month}-${
      day < 10 ? '0' + day : day
    }`
    return format
  }

  const formattedCurrentDate = formattedInputValue(currentDate)
  const formattedSevenDaysAgo = formattedInputValue(sevenDaysAgo)

  const [dateValue, setDateValue] = useState({
    startDate: formattedSevenDaysAgo,
    endDate: formattedCurrentDate
  })

  const handleDateChange = async (e) => {
    const { name, value } = e.target

    const startDateObj = new Date(dateValue.startDate)
    const endDateObj = new Date(dateValue.endDate)

    if (name === 'startDate' && new Date(value) >= endDateObj) {
      Swal.fire({
        position: 'top',
        icon: 'warning',
        title: 'Invalid Date',
        text: 'Start date should not be later than end date.',
        showConfirmButton: false,
        timer: 2000
      })
      return
    }

    if (name === 'endDate' && new Date(value) <= startDateObj) {
      Swal.fire({
        position: 'top',
        icon: 'warning',
        title: 'Invalid Date',
        text: 'End date should not be earlier than start date.',
        showConfirmButton: false,
        timer: 2000
      })
      return
    }

    setDateValue((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleCheckOrderClick = async (id) => {
    const { order } = await AdminGetOrderById(id)
    setAdminOrder(order)
    navigate(`${location.pathname}/${id}`)
  }
  
  useEffect(() => {
    const AdminGetOrderCount = async () => {
      const { orderCount } = await AdminGetOrders({
        page: 1
      })
      setAdminOrderCount(orderCount)
    }
    AdminGetOrderCount()

    const AdminGetOrdersAsync = async () => {
      const { orders } = await AdminGetOrders({
        page: 1,
        perPage: adminOrderCount,
        startDate: dateValue.startDate,
        endDate: dateValue.endDate
      })
      setAdminOrders(orders)
    }
    AdminGetOrdersAsync()
  }, [dateValue, adminOrderCount])

  return (
    <AdminOrdersContext.Provider
      value={{
        adminOrders,
        setAdminOrders,
        dateValue,
        handleDateChange,
        handleCheckOrderClick,
        adminOrder
      }}
    >
      {children}
    </AdminOrdersContext.Provider>
  )
}
