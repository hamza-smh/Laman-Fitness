import { useUser } from "../../context/UserContext";
import Button from "../../components/button/button"
import usePageNavigation from "../../hooks/usePageNavigation";
import { useFormValidation } from "../../context/FormValidationContext";

const BestDescription =()=>{
    const {userData,setUserData} = useUser();
    const { page, next, prev } = usePageNavigation(); 
    const { setPageValid } = useFormValidation();

    const handleSelect = (desc) => {
        setUserData((prev) => ({
            ...prev,
            bestDescription: desc
        }));
        setPageValid(13, true);
        next();
        console.log("Best Description", desc);
    };
    return(
    <div>
        <p style={{fontWeight:"600",fontSize:"18px"}}>
            Which best describes you ?
        </p>

        <div style={{paddingTop:"20px",width:"100%"}}>
            <Button  className={userData.bestDescription === "My diet and training needs a lot of work" ? "selected" : ""} text={"My diet and training needs a lot of work"}  onClick={() => handleSelect("My diet and training needs a lot of work")}/>
            <Button  className={userData.bestDescription === "I have some healthy habits but I struggle with consistency" ? "selected" : ""} text={"I have some healthy habits but I struggle with consistency"}  onClick={() => handleSelect("I have some healthy habits but I struggle with consistency")}/>
            <Button  className={userData.bestDescription === "I mostly eat healthy and train regularly but the progress is slow" ? "selected" : ""} text={"I mostly eat healthy and train regularly but the progress is slow"}  onClick={() => handleSelect("I mostly eat healthy and train regularly but the progress is slow")}/>
        </div>


    </div>
    )
}
export default BestDescription