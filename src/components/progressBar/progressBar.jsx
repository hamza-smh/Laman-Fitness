import {useParams} from "react-router-dom";
import './style.css'

const ProgressBar = ()=>{
    const { index } = useParams(); 
    const progress = index/50*100;
    return(
        <div className="bar">
            <div className="progress" style={{width:`${progress}%`}}/>
            <div className="cover">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="liners" />
                ))}
            </div>
             <span className="progress-text">{Math.round(progress)}%</span>
        </div>
    )
}
export default ProgressBar