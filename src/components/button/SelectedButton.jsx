import styles from './button.module.scss'

const SelectedButton = ({ name, id, value, onChange, children, defaultValue }) => {
  return (
    <select
      className={styles.selectBtn}
      name={name}
      id={id}
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
    >
      {children}
    </select>
  )
}

export default SelectedButton