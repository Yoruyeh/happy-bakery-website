import styles from './productDataTable.module.scss'
import { DataGrid } from '@mui/x-data-grid'
import { VerticalDot } from '../../assets/icons'
import { useEffect, useState } from 'react'


const ProductDataTable = ({ order, orderItems }) => {
  const [rows, setRows] = useState([])
  const totalSum = Number(order.total_price) + order.shipping_fee

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
          Subtotal <span>${order.total_price}</span>
        </p>
        <p>
          Delivery <span>${order.shipping_fee}</span>
        </p>
        <h5>
          Total <span>${totalSum}</span>
        </h5>
      </div>
    )
  }

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
        return <img src={params.row.image} alt="" />
      }
    },
    {
      field: 'name',
      headerName: 'Product Name',
      width: 200
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

  useEffect(() => {
    const getRows = () => {
      setRows(
        orderItems &&
          orderItems.length > 0 &&
          orderItems.map((item, index) => ({
            id: index + 1,
            image: item.Product.cover,
            name: item.Product.name,
            quantity: item.quantity,
            total: item.price_each ? item.price_each : 0
          }))
      )
    }
    getRows()
  }, [orderItems])

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
