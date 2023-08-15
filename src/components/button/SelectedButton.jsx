import styles from './button.module.scss'

const SelectedButton = ({ name, id, onChange, children }) => {
  return (
    <select className={styles.selectBtn} name={name} id={id} onChange={onChange}>
      {children}
    </select>
  )
}

export default SelectedButton