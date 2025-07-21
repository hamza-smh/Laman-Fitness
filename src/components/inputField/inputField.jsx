import "./style.css"
const InputField = ({type,value,handleChange})=>{
    return(
        <input
            type={type}
            value={value}
            onChange={handleChange}
            className='textField'
          />
    )
}

export default InputField