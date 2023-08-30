import styles from './dataTable.module.scss'
import { DataGrid } from '@mui/x-data-grid'
import { VerticalDot, Edit, See } from '../../assets/icons'
import { Link } from 'react-router-dom'

const columns = [
  {
    field: 'id',
    headerName: 'Order ID',
    width: 100
  },
  {
    field: 'order_date',
    headerName: 'Order Date',
    type: 'date',
    width: 150,
    editable: true,
    valueGetter: (params) => new Date(params.value)
  },
  {
    field: 'payment_method',
    headerName: 'Payment Method',
    width: 180,
    editable: true
  },
  {
    field: 'customer_name',
    headerName: 'Customer Name',
    width: 150,
    editable: true
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
      }
      return (
        <div className={styles.status}>
          <div className={styles.pending}></div>
          <p>Pending</p>
        </div>
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
      return <div>${params.row.amount}</div>
    }
  },
  {
    field: 'actions',
    headerName: 'Actions',
    sortable: false,
    editable: false,
    width: 125,
    renderCell: (params) => {
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
  }
]

const rows = [
  {
    id: 109,
    order_date: 'Aug 21st, 2023',
    payment_method: 'NewebPay',
    customer_name: 'yoru2 yeh',
    status: 'pending',
    total_price: '687.00'
  },
  {
    id: 110,
    order_date: 'Aug 21st, 2023',
    payment_method: 'PayPal',
    customer_name: 'yoru2 yeh',
    status: 'pending',
    total_price: '199.00'
  }
]

const DataTable = () => {
 
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
        rows={rows}
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
