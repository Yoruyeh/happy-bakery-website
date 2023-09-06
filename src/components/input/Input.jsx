import { Calendar } from '../../assets/icons'
import styles from './input.module.scss'

const TextInput = ({ type, placeholder, value, defaultValue, name, required, onChange }) => {
  return (
    <input
      className={styles.textInput}
      type={type}
      placeholder={placeholder}
      value={value}
      defaultValue={defaultValue}
      name={name}
      required={required}
      onChange={(e) => onChange?.(e)}
    />
  )
}

const CheckboxInput = ({
  type,
  label,
  name,
  value,
  onChange,
  checked,
  disabled
}) => {
  return (
    <>
      <input
        className={styles.checkboxInput}
        type={type}
        name={name}
        value={value}
        onChange={(e) => onChange?.(e.target.checked)}
        checked={checked}
        disabled={disabled}
      />
      <label className={styles.checkboxLabel} htmlFor={name}>
        {label}
      </label>
    </>
  )
}

const DateInput = ({ dateValue, handleDateChange }) => {
  const formattedDate = (inputValue) => {
    // 解析日期
    const date = new Date(inputValue)

    // 定義月份名稱
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ]

    // 獲取年、月和日
    const year = date.getFullYear()
    const month = months[date.getMonth()]
    const day = date.getDate()

    // 返回格式化的日期
    return `${month} ${day}, ${year}`
  }

  return (
    <div className={styles.dateInput}>
      <span>
        <Calendar />
      </span>
      <div className={styles.date}>
        {formattedDate(dateValue.startDate)}
        <input
          type="date"
          name="startDate"
          value={dateValue.startDate}
          onChange={(e) => handleDateChange(e)}
        />
      </div>
      <span>-</span>
      <div className={styles.date}>
        {formattedDate(dateValue.endDate)}
        <input
          type="date"
          name="endDate"
          value={dateValue.endDate}
          onChange={(e) => handleDateChange(e)}
        />
      </div>
    </div>
  )
}

export { TextInput, CheckboxInput, DateInput }