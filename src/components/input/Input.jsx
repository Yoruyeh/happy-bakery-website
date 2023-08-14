import styles from './input.module.scss'

const TextInput = ({ type, placeholder, value, defaultValue, required, onChange }) => {
  return (
    <input
      className={styles.textInput}
      type={type}
      placeholder={placeholder}
      value={value}
      defaultValue={defaultValue}
      required={required}
      onChange={(e) => onChange?.(e.target.value)}
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

export { TextInput, CheckboxInput }