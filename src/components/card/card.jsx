import "./style.css"
const Card = ({ img, text,id, isSelected, onSelect }) => {
  return (
    <div className="card-item">
       <button className = {`card-button ${isSelected ? "selected" : ""}`} 
            onClick = {() => onSelect(id)}>
        <img src={img} alt={text} className="card-image" />
        <p className="card-text">{text}</p>

        {isSelected &&
            <div className="tick">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#406edf"
                >
                  <path d="M9 16.17L4.83 12 3.41 13.41 9 19 21 7 19.59 5.59z" />
                </svg>

            </div>
        }
      </button>
    </div>
  );
};

export default Card;
