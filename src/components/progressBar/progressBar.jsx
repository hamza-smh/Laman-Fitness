import {useParams} from "react-router-dom";

const ProgressBar = ()=>{
    const { index } = useParams(); 
    const progress = index/50*100;
    return(
        <div style = {
            {
                width: "100%",
                height: "10px",
                backgroundColor: "#DDDDDD",
                marginTop: "20px"
            }
        } >
            <div style={{display:"flex",height:"100%",width:`${progress}%`,backgroundColor:"#406edf"}}/>

        </div>
    )
}
export default ProgressBar