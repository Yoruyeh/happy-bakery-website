import styles from './input.module.scss'

const TextInput = ({ type, placeholder, defaultValue, required, onChange }) => {
  return (
    <input
      className={styles.textInput}
      type={type}
      placeholder={placeholder}
      defaultValue={defaultValue}
      required={required}
      onChange={onChange}
    />
  )
}

const CheckboxInput = ({ type, label, name, value }) => {
  return (
    <>
      <input
        className={styles.checkboxInput}
        type={type}
        name={name}
        value={value}
      />
      <label className={styles.checkboxLabel} htmlFor={name}>
        {label}
      </label>
    </>
  )
}

export { TextInput, CheckboxInput }