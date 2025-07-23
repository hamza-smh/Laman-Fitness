import { useUser } from "../../context/UserContext";
import Button from "../../components/button/button"
import usePageNavigation from "../../hooks/usePageNavigation";

const MainReason =()=>{
    const {userData,setUserData} = useUser();
    const { page, next, prev } = usePageNavigation(); 

    const handleSelect = (reason) => {
        setUserData((prev) => ({
            ...prev,
            reason_to_join: reason 
        }));
        next();
        console.log("Main Reason to join :", reason); 
    };
    return(
    <div>
        <p style={{fontWeight:"600",fontSize:"18px"}}>
            What is your main reason for wanting to get in shape?
        </p>

        <div style={{paddingTop:"20px",width:"100%"}}>
            <Button text={"Feel more confident about myself and my body"}  onClick={() => handleSelect("Feel more confident")}/>
            <Button text={"Become healthier"}  onClick={() => handleSelect("Become healthier")}/>
            <Button text={"Feel better day-to-day"}  onClick={() => handleSelect("Feel better day-to-day")}/>
            <Button text={"Prove to myself I'm capable of more"}  onClick={() => handleSelect("Prove to myself")}/>
        </div>


    </div>
    )
}
export default MainReason