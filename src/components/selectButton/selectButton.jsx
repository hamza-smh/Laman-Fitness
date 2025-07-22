import "./button.css"
const SelectButton = ({ text,onClick , selected = false}) => {
  return (
     <button className = {`custom-button ${selected ? "selected" : ""}`} 
        onClick = {onClick}>
      <p style={{fontSize:"16px"}}>
      {text}
      </p>
    </button>
  )
}

export default SelectButton
