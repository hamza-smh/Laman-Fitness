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
          userData.gender === "Male" && userData.mainFocus === "losing weight" ?
           <img src={patrick} alt="patrick" style={{width:"100%",height:"100%"}}/>
          : userData.gender === "Male" && userData.mainFocus === "building muscle" ?
           <img src={cesar} alt="abdullah" style={{width:"100%",height:"100%"}}/>
           : userData.gender === "Male" && userData.mainFocus === "build muscle + losing weight" ?
           <img src={patrick} alt="cesar" style={{width:"100%",height:"100%"}}/>
           
           :
           userData.gender === "Female" && userData.mainFocus === "losing weight" ?
           <img src={jade} alt="jade" style={{width:"100%",height:"100%"}}/>
          : userData.gender === "Female" && userData.mainFocus === "building muscle" ?
           <img src={salma} alt="salma" style={{width:"100%",height:"100%"}}/>
           : userData.gender === "Female" && userData.mainFocus === "build muscle + losing weight" ?
           <img src={tahnee} alt="tanhee" style={{width:"100%",height:"100%"}}/>
           :""
        }
      </div>


      <p className="verified-subtext" style={{marginTop:"15px"}}>
        {
          userData.gender === "Male" && (userData.mainFocus === "losing weight" || userData.mainFocus === "build muscle + losing weight" ) ?
          "“I've always struggled with stubborn fat but also a stubborn chest that I had a really hard time growing. After joining Live Laman I realized all the mistakes I was making. Not only did I lose the fat, but my chest filled out and is now one of my strongest muscle groups!”"
          :
           userData.gender === "Male" && userData.mainFocus === "building muscle" ?
           "We get it. It's hard to know what to trust with all the contradicting information out there. We use a proven, science-based approach to guarantee results."
          :
           userData.gender === "Female" && userData.mainFocus === "build muscle + losing weight" ?
           "“I've had a “flat butt” my whole life. I thought I was genetically stuck with it. After joining Live Laman and fixing all the mistakes I was making, I finally started to see results. I'd never in a million years think my body could ever look like this.”"
           :
           "We get it. It's hard to know what to trust with all the contradicting information out there. We use a proven, science-based approach to guarantee results."
        }
        
      </p>


       <p className="verified-subtext my15">
        {
          userData.gender === "Male" && (userData.mainFocus === "losing weight" || userData.mainFocus === "build muscle + losing weight") ?
          "- Patrick R."
          : userData.gender === "Male" && userData.mainFocus === "building muscle" ?
            "Cesar R. - Verified Live Laman user"
          :
           userData.gender === "Female" && userData.mainFocus === "losing weight" ?
            "Jade L. - Verified Live Laman user" :
            userData.gender === "Female" && userData.mainFocus === "building muscle" ?
            "Salma T. - Verified Live Laman user" :
            userData.gender === "Female" && userData.mainFocus === "build muscle + losing weight" ?
            "Tanhee S. - Verified Live Laman user" : ""
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
