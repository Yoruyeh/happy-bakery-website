import styles from './input.module.scss'

const TextInput = ({ type, placeholder }) => {
  return (
    <input className={styles.textInput} type={type} placeholder={placeholder}/>
  )
}

const CheckboxInput = ({ label, name, value }) => {
  return (
    <>
      <input
        className={styles.checkboxInput}
        type="checkbox"
        name={name}
        value={value}
      />
      <label className={styles.checkboxLabel} for={name}>
        {label}
      </label>
    </>
  )
}

export { TextInput, CheckboxInput }