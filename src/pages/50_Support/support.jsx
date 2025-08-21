import { useUser } from "../../context/UserContext";
import Button from "../../components/button/button"
import usePageNavigation from "../../hooks/usePageNavigation";
import { useFormValidation } from "../../context/FormValidationContext";

const Support =()=>{
    const {userData,setUserData} = useUser();
    const { page, next, prev } = usePageNavigation(); 
    const { setPageValid } = useFormValidation();

    const handleSelect = (support) => {
        setUserData((prev) => ({
            ...prev,
            support: support
        }));
        setPageValid(33, true);
        next();
        console.log("Kind of Support", support);
    };
    return(
    <div>
        <p style={{fontWeight:"600",fontSize:"20px"}}>
           What type of support do you need ?
        </p>

        <div style={{paddingTop:"20px",width:"100%"}}>
            <Button className={userData.support === "tool" ? "selected" : ""} text={"Just a tool to track my own workouts and nutrition"}  onClick={() => handleSelect("tool")}/>
            <Button className={userData.support === "guidance" ? "selected" : ""} text={"Personalized guidance to help with my workouts and nutrition"}  onClick={() => handleSelect("guidance")}/>
            <Button className={userData.support === "tool + guidance" ? "selected" : ""} text={"Both a tool to track, and personalized guidance"}  onClick={() => handleSelect("tool + guidance")}/>
            <Button className={userData.support === "other" ? "selected" : ""} text={"Others"}  onClick={() => handleSelect("other")}/>
        </div>


    </div>
    )
}
export default Support