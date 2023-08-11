import styles from './input.module.scss'

const TextInput = ({ type, placeholder, defaultValue, required, onChange }) => {
  return (
    <input
      className={styles.textInput}
      type={type}
      placeholder={placeholder}
      defaultValue={defaultValue}
      required={required}
      onChange={(e) => onChange?.(e.target.value)}
    />
  )
}

const CheckboxInput = ({ type, label, name, value, onChange, disabled }) => {
  return (
    <>
      <input
        className={styles.checkboxInput}
        type={type}
        name={name}
        value={value}
        onChange={(e) => onChange?.(e.target.checked)}
        disabled={disabled}
      />
      <label className={styles.checkboxLabel} htmlFor={name}>
        {label}
      </label>
    </>
  )
}

export { TextInput, CheckboxInput }