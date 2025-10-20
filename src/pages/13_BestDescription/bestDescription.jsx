import { useUser } from "../../context/UserContext";
import Button from "../../components/button/button"
import usePageNavigation from "../../hooks/usePageNavigation";
import { useFormValidation } from "../../context/FormValidationContext";

const BestDescription =()=>{
    const {userData,setUserData} = useUser();
    const { page, next, prev } = usePageNavigation(); 
    const { setPageValid } = useFormValidation();

    const handleSelect = (desc) => {
        setUserData((prev) => ({
            ...prev,
            bestDescription: desc
        }));
        setPageValid(12, true);
        next();
        console.log("Best Description", desc);
    };
    return(
    <div>
        <p className="heading">
            How would you describe your training and nutrition right now ?
        </p>

        <div style={{paddingTop:"20px",width:"100%"}}>
            <Button  
            className={userData.bestDescription === "Starting from scratch. My diet and training need  work." ? "selected" : ""} 
            text={"Starting from scratch. My diet and training need  work."}  
            onClick={() => handleSelect("Starting from scratch. My diet and training need  work.")}/>
            <Button  
            className={userData.bestDescription === "Good habits, but inconsistent. I try to stay healthy, but I struggle with routine" ? "selected" : ""} 
            text={"Good habits, but inconsistent. I try to stay healthy, but I struggle with routine"}  
            onClick={() => handleSelect("Good habits, but inconsistent. I try to stay healthy, but I struggle with routine")}/>
            <Button  
            className={userData.bestDescription === "I feel stuck. I workout often and eat well, but I’m not seeing progress." ? "selected" : ""} 
            text={"I feel stuck. I workout often and eat well, but I’m not seeing progress."}  
            onClick={() => handleSelect("I feel stuck. I workout often and eat well, but I’m not seeing progress.")}/>
        </div>


    </div>
    )
}
export default BestDescription