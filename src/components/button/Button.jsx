import styles from "./button.module.scss"

const Button = ({ text, price }) => {
  return (
    <button className={styles.button}>
      {text}
      <span>{price}</span>
    </button>
  )
}

export default Button