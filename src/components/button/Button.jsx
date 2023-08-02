import styles from "./button.module.scss"

const Button = ({ text, price, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {text}
      <span>{price}</span>
    </button>
  )
}

export default Button