import "./style.css"
const InputField = ({type,value,handleChange,place})=>{
    return(
        <input
            type={type}
            value={value}
            onChange={handleChange}
            className='textField'
            {...(place ? { placeholder: place } : {})}
          />
    )
}

export default InputField