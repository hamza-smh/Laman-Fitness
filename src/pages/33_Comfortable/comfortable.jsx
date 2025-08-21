import { useUser } from "../../context/UserContext";
import Button from "../../components/button/button"
import usePageNavigation from "../../hooks/usePageNavigation";
import { useFormValidation } from "../../context/FormValidationContext";

const Comfortable =()=>{
    const {userData,setUserData} = useUser();
    const { page, next, prev } = usePageNavigation(); 
    const { setPageValid } = useFormValidation();

    const handleSelect = (excercise) => {
        setUserData((prev) => ({
            ...prev,
            comfortable: excercise
        }));
        setPageValid(16, true); 
        next();
        console.log("Comfortable with excercise?", excercise);
    };
    return(
    <div>
        <p style={{fontWeight:"600",fontSize:"20px"}}>
           How comfortable are you with the squat, bench, and deadlift ?
        </p>

        <div style={{paddingTop:"20px",width:"100%"}}>
            <Button className={userData.comfortable === "never" ? "selected" : ""} text={"I've never done them"}  onClick={() => handleSelect("never")}/>
            <Button className={userData.comfortable === "learning" ? "selected" : ""} text={"I'm still learning proper form"}  onClick={() => handleSelect("learning")}/>
            <Button className={userData.comfortable === "regular" ? "selected" : ""} text={"I do them with regularly with good form"}  onClick={() => handleSelect("regular")}/>
            <Button className={userData.comfortable === "injuries" ? "selected" : ""} text={"I can't do them because of past injuries"}  onClick={() => handleSelect("injuries")}/>        
        </div>
    </div>
    )
}
export default Comfortable