import "./style.css";
import { useUser } from "../../context/UserContext";
import NavButton from "../../components/nav-btn/nav-button";
import usePageNavigation from "../../hooks/usePageNavigation";
import timeMale from "../../assets/workout/timeMale.jpg"
import katy from "../../assets/verified/katy.jpg"

const WorkoutVideo = () => {
  const { next, prev } = usePageNavigation();
  const { setUserData, userData } = useUser();

  return (
    <div className="verified-container">
      
      

      <div style={{background:"#FFF",maxWidth:"450px",height:"350px",maxHeight:"50vh",marginBottom:"15px"}}>
        {
           userData.gender === "Male" ?
           <img src={timeMale} alt="videoMale" style={{width:"100%",height:"100%"}}/>
           :
           userData.gender === "Female" ?
           <img src={katy} alt="katy" style={{width:"100%",height:"100%"}}/>
          :""
        }
      </div>

      <p className="verified-subtext">
        {
          userData.gender==="Male"?
          "No problem! We use science to make shorter workouts (some as quick as 15 minutes) just as effective as longer ones."
          :
          userData.gender === "Female" ?
          "To put this into perspective, here's Katy who dropped 8% in body fat while gaining a significant amount of muscle:"
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
