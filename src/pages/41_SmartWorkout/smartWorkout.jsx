import "./style.css";
import { useEffect } from "react";
import { useUser } from "../../context/UserContext";
import NavButton from "../../components/nav-btn/nav-button";
import usePageNavigation from "../../hooks/usePageNavigation";
import injuryMale from "../../assets/workout/injuriesMale.jpg"
import injuryFemale from "../../assets/workout/injuriesFemale.jpg"
import { useFormValidation } from "../../context/FormValidationContext";

const SmartWorkout = () => {
  const { next, prev } = usePageNavigation();
  const { setUserData, userData } = useUser();
  const { setPageValid } = useFormValidation();

  useEffect(() => {
    setPageValid(41, true);
  }, []);

  return (
    <div className="verified-container">
      <div style={{background:"#FFF",maxWidth:"450px",height:"400px",maxHeight:"50vh",marginBottom:"15px"}}>
        {
           userData.gender === "Male" ?
           <img src={injuryMale} alt="injuryMale" style={{width:"100%",height:"100%"}}/>
           :
           userData.gender === "Female" ?
           <img src={injuryFemale} alt="injuryFemale" style={{width:"100%",height:"100%"}}/>
          :""
        }
      </div>

      <p className="verified-subtext">
        {
          userData.gender==="Male"?
          "That's awesome! We'll help you keep it that way by using smart workouts designed to maximize gains while keeping your joints healthy."
          :
          userData.gender === "Female" ?
          "Injuries are common. We'll show you how to work around them so they don't hold you back from getting results. We'll also show you a routine that can help recover any injuries you're dealing with."
          :""
        }
        
      </p>


      <div className="navBtnHolder" style={{ paddingTop: "40px" }}>
        <NavButton text="Previous" nav={prev} />
        <NavButton text="Next" nav={next} />
      </div>
    </div>
  );
};

export default SmartWorkout;
