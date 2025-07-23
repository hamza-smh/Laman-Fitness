import { useUser } from "../../context/UserContext";
import Button from "../../components/button/button"
import usePageNavigation from "../../hooks/usePageNavigation";

const NutritionTrackingApp =()=>{
    const {userData,setUserData} = useUser();
    const { page, next, prev } = usePageNavigation(); 

    const handleSelect = (tracking_app) => {
        setUserData((prev) => ({
            ...prev,
            workout_tracking_app: tracking_app
        }));
        next();
        console.log("Using Tracking App? :", tracking_app);
    };
    return(
    <div>
        <p style={{fontWeight:"600",fontSize:"18px"}}>
            Do you currently use a nutrition tracking app ?
        </p>

        <div style={{paddingTop:"20px",width:"100%"}}>
            <Button text={"Yes"}  onClick={() => handleSelect("Yes")}/>
            <Button text={"Not right now but I've used one in the past"}  onClick={() => handleSelect("Sometimes")}/>
            <Button text={"No"}  onClick={() => handleSelect("No")}/>
        </div>


    </div>
    )
}
export default NutritionTrackingApp