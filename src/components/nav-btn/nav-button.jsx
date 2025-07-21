import "./nav-button.css"

const NavButton = ({  text, nav}) => {  
  return (
    < button className = "nav-button" onClick={nav}> 
      {text} 
    </button>
  )
}

export default NavButton
