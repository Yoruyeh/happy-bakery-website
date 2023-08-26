import { createContext, useContext, useState, useEffect } from 'react'
import { AdminGetOrders } from '../api/admin.orders'
import Swal from 'sweetalert2'

const defaultAdminOrdersContext = {
  adminOrders: null,
}

const AdminOrdersContext = createContext(defaultAdminOrdersContext)

export const useAdminOrders = () => useContext(AdminOrdersContext)

export const AdminOrdersProvider = ({ children }) => {
  const [adminOrders, setAdminOrders] = useState([])

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
  
  useEffect(() => {
    const AdminGetOrdersAsync = async () => {
      const { orders } = await AdminGetOrders({
        page: 1,
        startDate: dateValue.startDate,
        endDate: dateValue.endDate
      })
      setAdminOrders(orders)
    }
    AdminGetOrdersAsync()
  }, [dateValue])


  return (
    <AdminOrdersContext.Provider
      value={{
        adminOrders,
        setAdminOrders,
        dateValue,
        handleDateChange
      }}
    >
      {children}
    </AdminOrdersContext.Provider>
  )
}
