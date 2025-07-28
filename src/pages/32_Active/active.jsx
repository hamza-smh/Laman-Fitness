import { useUser } from "../../context/UserContext";
import Button from "../../components/button/button"
import usePageNavigation from "../../hooks/usePageNavigation";
import { useFormValidation } from "../../context/FormValidationContext";

const Active =()=>{
    const {userData,setUserData} = useUser();
    const { page, next, prev } = usePageNavigation(); 
    const { setPageValid } = useFormValidation();

    const handleSelect = (active) => {
        setUserData((prev) => ({
            ...prev,
            active: active
        }));
        setPageValid(32, true); 
        next();
        console.log("Science?", active);
    };
    return(
    <div>
        <p style={{fontWeight:"600",fontSize:"20px"}}>
           How active are you throughout the day ?
        </p>

        <div style={{paddingTop:"20px",width:"100%"}}>
            <Button className={userData.active === "I sit most of the day" ? "selected" : ""} text={"I sit most of the day"}  onClick={() => handleSelect("I sit most of the day")}/>
            <Button className={userData.active === "I have a fairly active job and I'm on my feet quite often" ? "selected" : ""} text={"I have a fairly active job and I'm on my feet quite often"}  onClick={() => handleSelect("I have a fairly active job and I'm on my feet quite often")}/>
            <Button className={userData.active === "I'm very active and I hardly ever sit still" ? "selected" : ""} text={"I'm very active and I hardly ever sit still"}  onClick={() => handleSelect("I'm very active and I hardly ever sit still")}/>
            
        </div>


    </div>
    )
}
export default Active