import { useUser } from "../../context/UserContext";
import Button from "../../components/button/button"
import usePageNavigation from "../../hooks/usePageNavigation";
import { useFormValidation } from "../../context/FormValidationContext";

const WorkoutTime =()=>{
    const {userData,setUserData} = useUser();
    const { page, next, prev } = usePageNavigation(); 
    const { setPageValid } = useFormValidation();

    const handleSelect = (time) => {
        setUserData((prev) => ({
            ...prev,
            workout_time: time
        }));
        setPageValid(36, true);
        next();
        console.log("Excercise Frequency:", time);
    };

    return(
    <div>
        <p style={{fontWeight:"600",fontSize:"20px"}}>
            How much time do you have available for each workout?
        </p>
        <p style={{fontWeight:"400",color:"#90a5c2",fontSize:"16px",fontStyle:"italic",marginTop:"10px"}}>
            More isn't always better. Choose what you'll be most CONSISTENT with.
        </p>

        <div style={{paddingTop:"20px",width:"100%"}}>
            <Button  className={userData.workout_time === "30 minutes" ? "selected" : ""}
                     text={"30 minutes"}  onClick={() => handleSelect("30 minutes")}/>
            <Button className={userData.workout_time === "60 minutes" ? "selected" : ""}
                     text={"60 minutes"}  onClick={() => handleSelect("60 minutes")}/>
        </div>


    </div>
    )
}
export default WorkoutTime