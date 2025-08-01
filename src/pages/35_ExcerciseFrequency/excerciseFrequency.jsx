import { useUser } from "../../context/UserContext";
import Button from "../../components/button/button"
import usePageNavigation from "../../hooks/usePageNavigation";
import { useFormValidation } from "../../context/FormValidationContext";

const ExcerciseFrequency =()=>{
    const {userData,setUserData} = useUser();
    const { page, next, prev } = usePageNavigation(); 
    const { setPageValid } = useFormValidation();


    const handleSelect = (freq) => {
        setUserData((prev) => ({
            ...prev,
            excercise_freq: freq
        }));
        setPageValid(35, true); 
        next();
        console.log("Excercise Frequency:", freq);
    };
    return(
    <div>
        <p style={{fontWeight:"600",fontSize:"20px"}}>
            For the best results, we recommend at least 3 workouts per week. How many days per week are you able to workout ?
        </p>
        <p style={{fontWeight:"400",color:"#90a5c2",fontSize:"16px",fontStyle:"italic",marginTop:"10px"}}>
            More isn't always better. Choose what you'll be most consistent with.
        </p>

        <div style={{paddingTop:"20px",width:"100%"}}>
            <Button className={userData.excercise_freq === "3 days per week" ? "selected" : ""} text={"3 days per week"}  onClick={() => handleSelect("3 days per week")}/>
            <Button className={userData.excercise_freq === "4 days per week" ? "selected" : ""} text={"4 days per week"}  onClick={() => handleSelect("4 days per week")}/>
            <Button className={userData.excercise_freq === "5 days per week" ? "selected" : ""} text={"5 days per week"}  onClick={() => handleSelect("5 days per week")}/>
            <Button className={userData.excercise_freq === "As many as I get" ? "selected" : ""} text={"As many days as will get me the best results"}  onClick={() => handleSelect("As many as I get")}/>
        </div>


    </div>
    )
}
export default ExcerciseFrequency