import { useUser } from "../../context/UserContext";
import Button from "../../components/button/button"
import usePageNavigation from "../../hooks/usePageNavigation";
import { useFormValidation } from "../../context/FormValidationContext";

const NutritionTrackingApp =()=>{
    const {userData,setUserData} = useUser();
    const { page, next, prev } = usePageNavigation(); 
    const { setPageValid } = useFormValidation();

    const handleSelect = (tracking_app) => {
        setUserData((prev) => ({
            ...prev,
            workout_tracking_app: tracking_app
        }));
        setPageValid(29, true);
        next();
        console.log("Using Tracking App? :", tracking_app);
    };
    return(
    <div>
        <p style={{fontWeight:"600",fontSize:"18px"}}>
            Do you currently use a nutrition tracking app ?
        </p>

        <div style={{paddingTop:"20px",width:"100%"}}>
            <Button className={userData.workout_tracking_app === "Yes" ? "selected" : ""} text={"Yes"}  onClick={() => handleSelect("Yes")}/>
            <Button className={userData.workout_tracking_app === "Not right now but I've used one in the past" ? "selected" : ""} text={"Not right now but I've used one in the past"}  onClick={() => handleSelect("Not right now but I've used one in the past")}/>
            <Button className={userData.workout_tracking_app === "No" ? "selected" : ""} text={"No"}  onClick={() => handleSelect("No")}/>
        </div>


    </div>
    )
}
export default NutritionTrackingApp