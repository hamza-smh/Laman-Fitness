import { useUser } from "../../context/UserContext";
import { useState } from "react";
import Button from "../../components/button/button"
import SelectButton from "../../components/selectButton/selectButton";
import usePageNavigation from "../../hooks/usePageNavigation";

const GymExperience =()=>{
    const {userData,setUserData} = useUser();
    const { page, next, prev } = usePageNavigation(); 
    const [level,setLevel]=useState()

    const handleSelect = (exp) => {
        setUserData((prev) => ({
            ...prev,
            gym_experience: exp
        }));
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
            <SelectButton  
                text={
                  <>
                    <strong>Beginner:</strong> I am either starting out in the gym or am just starting to take my training and nutrition seriously
                  </>
                } 
                selected={level}
                onClick={() => handleSelect("beginner")}/>
            <SelectButton 
                text={
                    <>
                    <strong>Intermediate:</strong> I know my way around the gym and have worked out consistently at least 3 times a week.
                    </>
                }  
                    selected={level===null || level==="intermediate"?"intermediate":"beginner"}
                    onClick={() => handleSelect("intermediate")}/>
            
        </div>


    </div>
    )
}
export default GymExperience