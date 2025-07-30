import "./style.css";
import { useEffect } from "react";
import { useUser } from "../../context/UserContext";
import NavButton from "../../components/nav-btn/nav-button";
import usePageNavigation from "../../hooks/usePageNavigation";
import busyCheck from "../../assets/workout/busyLevel.jpg"
import { useFormValidation } from "../../context/FormValidationContext";
const BusyCheck = () => {
  const { goNext, goPrev } = usePageNavigation();
  const { setUserData, userData } = useUser();
  const { setPageValid } = useFormValidation();
  useEffect(() => {
    setPageValid(53, true);
  }, []);

 
  return (
    <div className="verified-container">
      <div style={{background:"#FFF",maxWidth:"450px",height:"400px",maxHeight:"50vh",marginBottom:"15px"}}>
        <img src={busyCheck} alt="injuryMale" style={{width:"100%",height:"100%"}}/>
      </div>

      <p className="verified-subtext">
        Great! We don't expect you to make fitness your full time job. We'll find a suitable training plan that works with your schedule and goals.
      </p>


      <div className="navBtnHolder" style={{ paddingTop: "40px" }}>
        <NavButton text="Previous" nav={goPrev} />
        <NavButton text="Next" nav={goNext} />
      </div>
    </div>
  );
};

export default BusyCheck;
