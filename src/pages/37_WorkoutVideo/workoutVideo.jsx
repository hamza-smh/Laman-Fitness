import "./style.css";
import { useEffect } from "react"; 
import { useUser } from "../../context/UserContext";
import NavButton from "../../components/nav-btn/nav-button";
import usePageNavigation from "../../hooks/usePageNavigation";
import timeMale from "../../assets/workout/timeMale.jpg"
import timeFemale from "../../assets/workout/timeFemale.jpg"
import { useFormValidation } from "../../context/FormValidationContext";

const WorkoutVideo = () => {
  const { next, prev } = usePageNavigation();
  const { setUserData, userData } = useUser();
    const { setPageValid } = useFormValidation();

  useEffect(() => {
    setPageValid(20, true);
  }, []);

  return (
    <div className="verified-container">
      <div style={{background:"#FFF",maxWidth:"450px",height:"350px",maxHeight:"50vh",marginBottom:"15px"}}>
        {
           userData.gender === "Male" ?
           <img src={timeMale} alt="videoMale" style={{width:"100%",height:"100%"}}/>
           :
           userData.gender === "Female" ?
           <img src={timeFemale} alt="timeFemale" style={{width:"100%",height:"100%"}}/>
          :""
        }
      </div>

      <p className="verified-subtext">
        {
          userData.workout_time === "30 minutes" ?
          "No problem! We use science to make shorter workouts (some as quick as 15 minutes) just as effective as longer ones."
          :
          userData.workout_time === "60 minutes" ?
          `Awesome! That's more than enough time. If you're ever short on time, we'll also give you "time-saving workouts" that'll get you the same gains in far less time (30 minutes or less).`
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

export default WorkoutVideo;
