import "./style.css";
import { useEffect } from "react";
import { useFormValidation } from "../../context/FormValidationContext";
import { useUser } from "../../context/UserContext";
import NavButton from "../../components/nav-btn/nav-button";
import usePageNavigation from "../../hooks/usePageNavigation";

import patrick from "../../assets/verified/patrick.jpg"
import tahnee from "../../assets/verified/tahnee.jpg"
import jade from "../../assets/verified/jade.jpg"
import salma from "../../assets/verified/salma.jpg"
import cesar from "../../assets/verified/cesar.jpg"

import jordan from "../../assets/beforeAfter/jordan.png"
import victor from "../../assets/beforeAfter/victor.jpg"
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
          userData.gender === "Male"?
           <img src={victor} alt="patrick" style={{width:"100%",height:"100%"}}/>
          :
           <img src={jordan} alt="tanhee" style={{width:"100%",height:"100%"}}/>
        }
      </div>


      

       <p className="verified-subtext my15">
        “I’ ve always struggled with what to do inthe gym. Laman’s program gave me structure and accountability“
      </p>
      <div className="navBtnHolder" style={{ paddingTop: "40px" }}>
        <NavButton text="Previous" nav={prev} />
        <NavButton text="Next" nav={next} />
      </div>
    </div>
  );
};

export default Testimonial;
