import "./button.css"
const Button = ({ text }) => {
  return (
    <button className="my-button">
      <p style={{fontSize:"16px"}}>
      {text}
      </p>
    </button>
  )
}

export default Button
