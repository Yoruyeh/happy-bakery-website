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
    field: 'date',
    headerName: 'Order Date',
    type: 'date',
    width: 150,
    editable: true,
    valueGetter: (params) => new Date(params.value)
  },
  {
    field: 'payment',
    headerName: 'Payment Method',
    width: 180,
    editable: true
  },
  {
    field: 'name',
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
    field: 'amount',
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
    id: 1,
    date: '2023-08-05',
    payment: 'Credit Card',
    name: 'John Doe',
    status: 'pending',
    amount: 875
  },
  {
    id: 2,
    date: '2023-08-05',
    payment: 'Credit Card',
    name: 'John Doe',
    status: 'delivered',
    amount: 875
  },
  {
    id: 3,
    date: '2023-08-05',
    payment: 'Credit Card',
    name: 'John Doe',
    status: 'delivered',
    amount: 875
  },
  {
    id: 4,
    date: '2023-08-05',
    payment: 'Credit Card',
    name: 'John Doe',
    status: 'canceled',
    amount: 875
  },
  {
    id: 5,
    date: '2023-08-05',
    payment: 'Credit Card',
    name: 'John Doe',
    status: 'pending',
    amount: 875
  },
  {
    id: 6,
    date: '2023-08-05',
    payment: 'Credit Card',
    name: 'John Doe',
    status: 'pending',
    amount: 875
  },
  {
    id: 7,
    date: '2023-08-05',
    payment: 'Credit Card',
    name: 'John Doe',
    status: 'canceled',
    amount: 875
  },
  {
    id: 8,
    date: '2023-08-05',
    payment: 'Credit Card',
    name: 'John Doe',
    status: 'delivered',
    amount: 875
  },
  {
    id: 9,
    date: '2023-08-05',
    payment: 'Credit Card',
    name: 'John Doe',
    status: 'delivered',
    amount: 875
  },
  {
    id: 10,
    date: '2023-08-05',
    payment: 'Credit Card',
    name: 'John Doe',
    status: 'delivered',
    amount: 875
  },
  {
    id: 11,
    date: '2023-08-05',
    payment: 'Credit Card',
    name: 'John Doe',
    status: 'pending',
    amount: 875
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
