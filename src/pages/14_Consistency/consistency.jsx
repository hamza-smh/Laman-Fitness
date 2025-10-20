import { useUser } from "../../context/UserContext";
import Button from "../../components/button/button"
import usePageNavigation from "../../hooks/usePageNavigation";
import { useFormValidation } from "../../context/FormValidationContext";

const Consistency =()=>{
    const {userData,setUserData} = useUser();
    const { page, next, prev } = usePageNavigation(); 
    const { setPageValid } = useFormValidation();

    const handleSelect = (desc) => {
        setUserData((prev) => ({
            ...prev,
            consistency_issue: desc
        }));
        setPageValid(14, true);
        next();
        console.log("Reason for non consistency", desc);
    };
    return(
    <div>
        <p className="heading">
          What is affecting your consistency ?
        </p>

        <div style={{paddingTop:"20px",width:"100%"}}>
            <Button  className={userData.consistency_issue === "Time" ? "selected" : ""} 
                     text={"Lack of time, other commitments"}  
                     onClick={() => handleSelect("Time")}/>
            <Button  className={userData.consistency_issue === "Motivation" ? "selected" : ""} 
                     text={"Lack of motivation"}  
                     onClick={() => handleSelect("Motivation")}/>
            <Button  className={userData.consistency_issue === "Injuries" ? "selected" : ""} 
                     text={"Injuries limit what I can do"}  
                     onClick={() => handleSelect("Injuries")}/>
            <Button  className={userData.consistency_issue === "Program Hopping" ? "selected" : ""} 
                     text={"I switch programs a lot"}  
                     onClick={() => handleSelect("Program Hopping")}/>
        </div>


    </div>
    )
}
export default Consistency