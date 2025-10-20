import { useUser } from "../../context/UserContext";
import { useState } from "react";
import Button from "../../components/button/button"
import SelectButton from "../../components/selectButton/selectButton";
import usePageNavigation from "../../hooks/usePageNavigation";
import { useFormValidation } from "../../context/FormValidationContext";

const GymExperience =()=>{
    const {userData,setUserData} = useUser();
    const { page, next, prev } = usePageNavigation(); 
    const [level,setLevel]=useState()
    const { setPageValid } = useFormValidation();

    const handleSelect = (exp) => {
        setUserData((prev) => ({
            ...prev,
            gym_experience: exp
        }));
        setPageValid(18, true);
        next();
        console.log("Gym Experiences:", exp); 
    };
    return(
    <div>
        <p style={{fontWeight:"600",fontSize:"18px"}}>
            How experienced are you in the gym ?
        </p>
         <p style={{fontWeight:"400",color:"#90a5c2",fontSize:"16px",fontStyle:"italic"}}>
            Be honest here. Your program will be more effective if customized to your true experience level.
        </p>


        <div style={{paddingTop:"20px",width:"100%"}}>
            <Button  
                text={
                  <>
                    <strong>Beginner:</strong> New to training and taking my nutrition seriously
                  </>
                } 
                className={userData.gym_experience === "beginner" ? "selected" : ""}
                onClick={() => handleSelect("beginner")}/>
            <Button 
                text={
                    <>
                    <strong>Intermediate:</strong>  I know my way around the gym. II work out inconsistently
                    </>
                }  
                    className={userData.gym_experience === "intermediate" ? "selected" : ""}
                    onClick={() => handleSelect("intermediate")}/>
        </div>


    </div>
    )
}
export default GymExperience