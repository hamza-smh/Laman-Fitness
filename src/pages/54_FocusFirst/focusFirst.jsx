import { useUser } from "../../context/UserContext";
import Button from "../../components/button/button"
import usePageNavigation from "../../hooks/usePageNavigation";
import { useFormValidation } from "../../context/FormValidationContext";
const FocusFirst =()=>{
    const {userData,setUserData} = useUser();
    const { page, next, prev } = usePageNavigation(); 
    const { setPageValid } = useFormValidation();
    
    const handleSelect = (focus) => {
        setUserData((prev) => ({
            ...prev,
            priority: focus
        }));
        setPageValid(54, true);
        next();
        console.log(" How did you hear about Jeremy", focus);
    };
    return(
    <div>
        <p style={{fontWeight:"600",fontSize:"20px"}}>
           What would you like your plan to focus on first ?
        </p>

        <div style={{paddingTop:"20px",width:"100%"}}>
            <Button className={userData.priority === "Nutrition" ? "selected" : ""} text={"Nutrition"}  onClick={() => handleSelect("Nutrition")}/>
            <Button className={userData.priority === "Training" ? "selected" : ""} text={"Training"}  onClick={() => handleSelect("Training")}/>
            <Button className={userData.priority === "Habits" ? "selected" : ""} text={"Building good habits"}  onClick={() => handleSelect("Habits")}/>
            
        </div>


    </div>
    )
}
export default FocusFirst