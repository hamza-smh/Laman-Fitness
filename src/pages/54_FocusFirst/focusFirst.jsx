import { useUser } from "../../context/UserContext";
import Button from "../../components/button/button"
import usePageNavigation from "../../hooks/usePageNavigation";

const FocusFirst =()=>{
    const {userData,setUserData} = useUser();
    const { page, next, prev } = usePageNavigation(); 

    const handleSelect = (focus) => {
        setUserData((prev) => ({
            ...prev,
            priority: focus
        }));
        next();
        console.log(" How did you hear about Jeremy", focus);
    };
    return(
    <div>
        <p style={{fontWeight:"600",fontSize:"20px"}}>
           What would you like your plan to focus on first ?
        </p>

        <div style={{paddingTop:"20px",width:"100%"}}>
            <Button text={"Nutrition"}  onClick={() => handleSelect("Nutrition")}/>
            <Button text={"Training"}  onClick={() => handleSelect("Training")}/>
            <Button text={"Building good habits"}  onClick={() => handleSelect("Habits")}/>
            
        </div>


    </div>
    )
}
export default FocusFirst