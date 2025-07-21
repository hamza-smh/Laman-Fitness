import "./nav-button.css"
const NavButton = ({ text }) => {
  return (
    <button className="nav-button">
      <p className="text">
        {text}
      </p>
    </button>
  )
}

export default NavButton
