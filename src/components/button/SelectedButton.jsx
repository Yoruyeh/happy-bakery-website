import styles from './button.module.scss'

const SelectedButton = ({ name, id, value, onChange, children }) => {
  return (
    <select
      className={styles.selectBtn}
      name={name}
      id={id}
      value={value}
      onChange={onChange}
    >
      {children}
    </select>
  )
}

export default SelectedButton