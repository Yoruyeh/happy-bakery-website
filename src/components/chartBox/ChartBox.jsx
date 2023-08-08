import styles from './chartBox.module.scss'
import Button from '../button/Button'
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { monthlyChartData } from '../../data'

const ChartBox = () => {
  return (
    <div className={styles.chartBox}>
      <div className={styles.title}>
        <h6>Sale Graph</h6>
        <div className={styles.btnWrapper}>
          <Button text={'WEEKLY'} />
          <Button text={'MONTHLY'} />
          <Button text={'YEARLY'} />
        </div>
      </div>
      <div className={styles.chart}>
        <ResponsiveContainer width="99%" height="100%">
          <LineChart data={monthlyChartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="amount"
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