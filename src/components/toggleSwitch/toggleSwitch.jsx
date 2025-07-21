import "./style.css"
const ToggleSwitch = ({option1,option2,state, setState}) =>{
 return(
    <div className="toggle-switch">
          <div className={`toggle-indicator ${state}`} />
          <div
            className="toggle-option"
            onClick={() => setState(option1)}
            style={{ color: state === option1 ? "#406edf" : "#666" }}

          >
            {option1}
          </div>
          <div
            className="toggle-option"
            onClick={() => setState(option2)}
            style={{ color: state === option2 ? "#406edf" : "#666" }}
          >
            {option2}
          </div>
        </div>
 )   
}
export default ToggleSwitch