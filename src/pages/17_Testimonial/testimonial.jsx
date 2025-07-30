import "./style.css";
import { useEffect } from "react";
import { useFormValidation } from "../../context/FormValidationContext";
import { useUser } from "../../context/UserContext";
import NavButton from "../../components/nav-btn/nav-button";
import usePageNavigation from "../../hooks/usePageNavigation";
import patrick from "../../assets/verified/patrick.jpg"
import tahnee from "../../assets/verified/tahnee.jpg"
import salma from "../../assets/verified/salma.jpg"
const Testimonial = () => {
  const { next, prev } = usePageNavigation();
  const { setUserData, userData } = useUser();

    const { setPageValid } = useFormValidation();

  useEffect(() => {
    setPageValid(17, true);
  }, []);

  
  return (
    <div className="verified-container">

      
      <div className="verifyBlue">
        {
           userData.gender === "Male" ?
           <img src={patrick} alt="patrick" style={{width:"100%",height:"100%"}}/>
           :
            userData.gender === "Female" && userData.overweight ?
           <img src={tahnee} alt="katy" style={{width:"100%",height:"100%"}}/>
           :
           <img src={salma} alt="tanhee" style={{width:"100%",height:"100%"}}/>
        }
      </div>


      <p className="verified-subtext" style={{marginTop:"15px"}}>
        {
          userData.gender==="Male"?
          "“I've always struggled with stubborn fat but also a stubborn chest that I had a really hard time growing. After joining Built With Science I realized all the mistakes I was making. Not only did I lose the fat, but my chest filled out and is now one of my strongest muscle groups!”"
          :
          userData.gender === "Female" ?
          "“I've had a “flat butt” my whole life. I thought I was genetically stuck with it. After joining Built with Science and fixing all the mistakes I was making, I finally started to see results. I'd never in a million years think my body could ever look like this.”"
          :""
        }
        
      </p>


       <p className="verified-subtext my15">
        {
          userData.gender==="Male"?
          "- Patrick R."
          :
          userData.gender === "Female" ?
          "- Tahnee S."
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

export default Testimonial;
