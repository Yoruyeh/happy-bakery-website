import styles from './dataTable.module.scss'
import { DataGrid } from '@mui/x-data-grid'
import { VerticalDot, Edit, See } from '../../assets/icons'
import { Link } from 'react-router-dom'
import { useAdminOrders } from '../../context/AdminOrdersContext'

const columns = [
  {
    field: 'id',
    headerName: 'Order ID',
    width: 100,
    editable: false
  },
  {
    field: 'order_date',
    headerName: 'Order Date',
    width: 150,
    editable: false
  },
  {
    field: 'payment_method',
    headerName: 'Payment Method',
    width: 180,
    editable: false
  },
  {
    field: 'customer_name',
    headerName: 'Customer Name',
    width: 150,
    editable: false
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 150,
    editable: true,
    type: 'singleSelect',
    valueOptions: ['pending', 'delivered', 'canceled'],
    renderCell: (params) => {
      if (params.row.status === 'delivered') {
        return (
          <div className={styles.status}>
            <div className={styles.delivered}></div>
            <p>Delivered</p>
          </div>
        )
      } else if (params.row.status === 'canceled') {
        return (
          <div className={styles.status}>
            <div className={styles.canceled}></div>
            <p>Canceled</p>
          </div>
        )
      } else if (params.row.status === 'pending') {
        return (
          <div className={styles.status}>
            <div className={styles.pending}></div>
            <p>Pending</p>
          </div>
        )
      }
        return (
          ''
        )
    }
  },
  {
    field: 'total_price',
    headerName: 'Amount',
    sortable: false,
    editable: false,
    width: 125,
    renderCell: (params) => {
      if (params.row.total_price) {
        return <div>${params.row.total_price}</div>
      }
      return ''
    }
  },
  {
    field: 'actions',
    headerName: 'Actions',
    sortable: false,
    editable: false,
    width: 125,
    renderCell: (params) => {
      if (params.row.id) {
        return (
          <div className={styles.action}>
            <div className={styles.edit}>
              <Edit />
            </div>
            <Link to={`${params.row.id}`}>
              <div className={styles.see}>
                <See />
              </div>
            </Link>
          </div>
        )
      }
        return ''
    }
  }
]

const emptyRows = [
  {
    id: '',
    order_date: '',
    payment_method: '',
    customer_name: 'No Orders found',
    status: '',
    total_price: ''
  }
]

const DataTable = () => {
  const { adminOrders } = useAdminOrders()
  const isEmptyData = !adminOrders || !adminOrders.length > 0

  const CustomToolbar = () => {
    return (
      <div className={styles.toolbar}>
        <h6>Recent Orders</h6>
        <VerticalDot />
      </div>
    )
  }

  return (
    <div className={styles.dataTable}>
      <DataGrid
        className={styles.dataGrid}
        editMode="row"
        rows={isEmptyData ? emptyRows : adminOrders}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10
            }
          }
        }}
        slots={{
          toolbar: CustomToolbar
        }}
        pageSizeOptions={[5, 10, 25]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </div>
  )
}

export default DataTable
