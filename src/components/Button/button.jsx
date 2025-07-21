import "./button.css"
const Button = ({ text,onClick }) => {
  return (
    <button className="my-button" onClick={onClick}>
      <p style={{fontSize:"16px"}}>
      {text}
      </p>
    </button>
  )
}

export default Button
