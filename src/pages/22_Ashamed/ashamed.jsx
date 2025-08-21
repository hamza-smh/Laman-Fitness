import { useUser } from "../../context/UserContext";
import Button from "../../components/button/button"
import usePageNavigation from "../../hooks/usePageNavigation";
import { useFormValidation } from "../../context/FormValidationContext";

const Ashamed =()=>{
    const {userData,setUserData} = useUser();
    const { page, next, prev } = usePageNavigation(); 
    const { setPageValid } = useFormValidation();

    const handleSelect = (ashamed) => {
        setUserData((prev) => ({
            ...prev,
            ashamed: ashamed
        }));
        setPageValid(5, true);
        next();
        console.log("Insecure? :", ashamed); 
    };
    return(
    <div>
        <p style={{fontWeight:"600",fontSize:"18px"}}>
            Do you ever feel insecure or ashamed of your body around friends and family or in public settings ?
        </p>

        <div style={{paddingTop:"20px",width:"100%"}}>
            <Button className={userData.ashamed === "Yes" ? "selected" : ""} text={"Yes"}  onClick={() => handleSelect("Yes")}/>
            <Button className={userData.ashamed === "Sometimes" ? "selected" : ""} text={"Sometimes"}  onClick={() => handleSelect("Sometimes")}/>
            <Button className={userData.ashamed === "No" ? "selected" : ""} text={"No"}  onClick={() => handleSelect("No")}/>
        </div>
    </div>
    )
}
export default Ashamed