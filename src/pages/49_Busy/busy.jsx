import { useUser } from "../../context/UserContext";
import Button from "../../components/button/button"
import usePageNavigation from "../../hooks/usePageNavigation";
import { useFormValidation } from "../../context/FormValidationContext";

const Busy =()=>{
    const {userData,setUserData} = useUser();
    const { page, next, prev } = usePageNavigation(); 
    const { setPageValid } = useFormValidation();
    const handleSelect = (busy) => {
        setUserData((prev) => ({
            ...prev,
            busy: busy
        }));
        setPageValid(49, true);
        next();
        console.log("Selected main focus:", busy);
    };

    return(
    <div>
        <p style={{fontWeight:"600",fontSize:"20px"}}>
           How busy are you on an typical day ?
        </p>

        <div style={{paddingTop:"20px",width:"100%"}}>
            <Button className={userData.busy === "no time" ? "selected" : ""} text={"I barely have any time for myself"}  onClick={() => handleSelect("no time")}/>
            <Button className={userData.busy === "fairly busy" ? "selected" : ""} text={"I'm fairly busy, but I try to find time to unwind and relax "}  onClick={() => handleSelect("fairly busy")}/>
            <Button className={userData.busy === "not too busy" ? "selected" : ""} text={"I'm not too busy and keep time open for different things"}  onClick={() => handleSelect("not too busy")}/>
            <Button className={userData.busy === "not at all" ? "selected" : ""} text={"My schedule is very open and flexible"}  onClick={() => handleSelect("not at all")}/>
        </div>


    </div>
    )
}
export default Busy