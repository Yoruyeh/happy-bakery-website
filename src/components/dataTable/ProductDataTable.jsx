import styles from './productDataTable.module.scss'
import { DataGrid } from '@mui/x-data-grid'
import { VerticalDot } from '../../assets/icons'

const columns = [
  {
    field: 'id',
    headerName: 'No.',
    width: 100
  },
  {
    field: 'image',
    headerName: 'Product Image',
    width: 200,
    renderCell: (params) => {
      return (
        <img src={params.row.image} alt="" />
      )
    }
  },
  {
    field: 'name',
    headerName: 'Product Name',
    width: 200
  },
  {
    field: 'size',
    headerName: 'Product Size',
    width: 150,
    editable: true
  },
  {
    field: 'quantity',
    headerName: 'Quantity',
    width: 150,
    editable: true
  },
  {
    field: 'total',
    headerName: 'Total',
    width: 150,
    editable: true
  }
]

const rows = [
  {
    id: 1,
    image:
      'https://images.unsplash.com/photo-1469533778471-92a68acc3633?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
    name: 'Blue Berry Scone',
    size: 'F',
    quantity: 3,
    total: 450
  },
  {
    id: 2,
    image:
      'https://images.unsplash.com/photo-1469533778471-92a68acc3633?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
    name: 'Blue Berry Scone',
    size: 'F',
    quantity: 3,
    total: 450
  },
  {
    id: 3,
    image:
      'https://images.unsplash.com/photo-1469533778471-92a68acc3633?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
    name: 'Blue Berry Scone',
    size: 'F',
    quantity: 3,
    total: 450
  },
  {
    id: 4,
    image:
      'https://images.unsplash.com/photo-1469533778471-92a68acc3633?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
    name: 'Blue Berry Scone',
    size: 'F',
    quantity: 3,
    total: 450
  },
  {
    id: 5,
    image:
      'https://images.unsplash.com/photo-1469533778471-92a68acc3633?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
    name: 'Blue Berry Scone',
    size: 'F',
    quantity: 3,
    total: 450
  }
]

const ProductDataTable = () => {
  const CustomToolbar = () => {
    return (
      <div className={styles.toolbar}>
        <h6>Products</h6>
        <VerticalDot />
      </div>
    )
  }

  const CustomFooter = () => {
    return (
      <div className={styles.footer}>
        <p>
          Subtotal <span>$780</span>
        </p>
        <p>
          Discount <span>$50</span>
        </p>
        <h5>
          Total <span>$730</span>
        </h5>
      </div>
    )
  }

  return (
    <div className={styles.productDataTable}>
      <DataGrid
        className={styles.dataGrid}
        editMode="row"
        rows={rows}
        columns={columns}
        slots={{
          toolbar: CustomToolbar,
          footer: CustomFooter
        }}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </div>
  )
}

export default ProductDataTable
