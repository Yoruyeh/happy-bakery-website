import "./button.scss"

const Button = ({ text, price }) => {
  return (
    <button>
      {text}
      <span>{price}</span>
    </button>
  )
}

export default Button