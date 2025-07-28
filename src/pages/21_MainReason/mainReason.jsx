import { useUser } from "../../context/UserContext";
import Button from "../../components/button/button"
import usePageNavigation from "../../hooks/usePageNavigation";
import { useFormValidation } from "../../context/FormValidationContext";

const MainReason =()=>{
    const {userData,setUserData} = useUser();
    const { page, next, prev } = usePageNavigation(); 
    const { setPageValid } = useFormValidation();

    const handleSelect = (reason) => {
        setUserData((prev) => ({
            ...prev,
            reason_to_join: reason 
        }));
        setPageValid(21, true);
        next();
        console.log("Main Reason to join :", reason); 
    };
    return(
    <div>
        <p style={{fontWeight:"600",fontSize:"18px"}}>
            What is your main reason for wanting to get in shape?
        </p>

        <div style={{paddingTop:"20px",width:"100%"}}>
            <Button className={userData.reason_to_join === "Feel more confident" ? "selected" : ""} text={"Feel more confident about myself and my body"}  onClick={() => handleSelect("Feel more confident")}/>
            <Button className={userData.reason_to_join === "Become healthier" ? "selected" : ""} text={"Become healthier"}  onClick={() => handleSelect("Become healthier")}/>
            <Button className={userData.reason_to_join === "Feel better day-to-day" ? "selected" : ""} text={"Feel better day-to-day"}  onClick={() => handleSelect("Feel better day-to-day")}/>
            <Button className={userData.reason_to_join === "Prove to myself" ? "selected" : ""} text={"Prove to myself I'm capable of more"}  onClick={() => handleSelect("Prove to myself")}/>
        </div>


    </div>
    )
}
export default MainReason