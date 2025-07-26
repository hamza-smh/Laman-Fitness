import "./button.css"

const Button = ({ text, onClick, className = "", style = {} }) => {
  return (
    <button
      onClick={onClick}
      className={`my-button ${className}`}
      style={style}
    >
      {text}
    </button>
  );
};
export default Button