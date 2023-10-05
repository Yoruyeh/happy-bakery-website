import styles from './chartBox.module.scss'
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { useAdminOrders } from '../../context/AdminOrdersContext'
import { useState } from 'react'

const ChartBox = () => {
  const [selectTimeInterval, setSelectTimeInterval] = useState('monthlySales')
  const [XdataKey, setXdataKey] = useState('month')
  const { reportData } = useAdminOrders()

  return (
    <div className={styles.chartBox}>
      <div className={styles.title}>
        <h6>Sale Graph</h6>
        <div className={styles.btnWrapper}>
          <button
            className={
              selectTimeInterval === 'weeklySales' ? `${styles.active}` : ''
            }
            onClick={() => {
              setSelectTimeInterval('weeklySales')
              setXdataKey('week')
            }}
          >
            WEEKLY
          </button>
          <button
            className={
              selectTimeInterval === 'monthlySales' ? `${styles.active}` : ''
            }
            onClick={() => {
              setSelectTimeInterval('monthlySales')
              setXdataKey('month')
            }}
          >
            MONTHLY
          </button>
          <button
            className={
              selectTimeInterval === 'yearlySales' ? `${styles.active}` : ''
            }
            onClick={() => {
              setSelectTimeInterval('yearlySales')
              setXdataKey('year')
            }}
          >
            YEARLY
          </button>
        </div>
      </div>
      <div className={styles.chart}>
        <ResponsiveContainer width={XdataKey === 'week' ? '300%' : '100%'} height="100%">
          <LineChart
            data={reportData[selectTimeInterval]}
            margin={{
              top: 5,
              right: 20,
              left: 30,
              bottom: 5
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={XdataKey} />
            <YAxis allowDataOverflow={true} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="total_sales"
              stroke="#1B59F8"
              strokeWidth={3}
              activeDot={{
                fill: 'yellow',
                stroke: 'black',
                strokeWidth: 2,
                r: 6
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default ChartBox