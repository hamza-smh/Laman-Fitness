import "./style.css";
import { useEffect } from "react";
import { useUser } from "../../context/UserContext";
import NavButton from "../../components/nav-btn/nav-button";
import usePageNavigation from "../../hooks/usePageNavigation";
import { useFormValidation } from "../../context/FormValidationContext";
import cesar from "../../assets/verified/cesar.jpg"
import katy from "../../assets/verified/katy.jpg"
import abdullah from "../../assets/verified/abdullah.jpg"
import tanhee from "../../assets/verified/tahnee.jpg"
import salma from "../../assets/verified/salma.jpg"

const Verified = () => {
  const { next, prev } = usePageNavigation();
  const { setUserData, userData } = useUser();
  const { setPageValid } = useFormValidation();

  useEffect(() => {
    setPageValid(12, true);
  }, []);

  
  return (
    <div className="verified-container">
        {  
         userData.mainFocus === "losing weight" ?
        <p className = "verified-subtext"> Our members lose weight at an average rate of 0.7 % of their bodyweight per week. < br / > Any faster than this and you risk losing muscle. </p>
        : userData.mainFocus === "building muscle" ?
        <p className="verified-subtext">"Depending on your training experience, with the right plan you can expect to gain about 1-3 lbs of muscle per month."</p>
        : userData.mainFocus === "build muscle + losing weight" ?
        <p className="verified-subtext">"Our members drop their body fat at an average rate of 1-3% per month while building muscle."</p>
        :""
        }
    
      <p className="verified-subtext">
        {
          userData.gender === "Male" && userData.mainFocus === "losing weight" ?
          "To put this into perspective, here 's Cesar, who lost 20 pounds in a little over 2 months:"
          : userData.gender === "Male" && userData.mainFocus === "building muscle" ?
          "To put this into perspective, here's what 16 lbs of pure muscle gain looks like:"
          : userData.gender === "Male" && userData.mainFocus === "build muscle + losing weight" ?
          "To put this into perspective, here 's Cesar, who lost 20 pounds in a little over 2 months:"
          :
          userData.gender === "Female" && userData.mainFocus === "losing weight" ?
          "To put this into perspective, here's Katy who dropped 8% in body fat while gaining a significant amount of muscle:"
          : userData.gender === "Female" && userData.mainFocus === "building muscle" ?
          "To put this into perspective, here's what 10 lbs of pure muscle gain looks like:"
          : userData.gender === "Female" && userData.mainFocus === "build muscle + losing weight" ?
          "To put this into perspective, here's Built With Science Member Salma, who reached her goal in just 2 months:"
          :""
        }
        
      </p>

      <div className="verifyBlue">
        {
           userData.gender === "Male" && userData.mainFocus === "losing weight" ?
           <img src={cesar} alt="cesar" style={{width:"100%",height:"100%"}}/>
          : userData.gender === "Male" && userData.mainFocus === "building muscle" ?
           <img src={abdullah} alt="abdullah" style={{width:"100%",height:"100%"}}/>
           : userData.gender === "Male" && userData.mainFocus === "build muscle + losing weight" ?
           <img src={cesar} alt="cesar" style={{width:"100%",height:"100%"}}/>
           
           :

            userData.gender === "Female" && userData.mainFocus === "losing weight" ?
           <img src={katy} alt="katy" style={{width:"100%",height:"100%"}}/>
          : userData.gender === "Female" && userData.mainFocus === "building muscle" ?
           <img src={tanhee} alt="tanhee" style={{width:"100%",height:"100%"}}/>
           : userData.gender === "Female" && userData.mainFocus === "build muscle + losing weight" ?
           <img src={salma} alt="salma" style={{width:"100%",height:"100%"}}/>
           :""
        }
      </div>

       <p className="verified-subtext my15">
        {
          userData.gender === "Male" && userData.mainFocus === "building muscle" ?
          "Abdullah K. - Verified Live Laman user"
          :
          userData.gender === "Male" && (userData.mainFocus === "losing weight" || userData.mainFocus === "build muscle + losing weight") ?
            "Cesar R. - Verified Live Laman user"

          : userData.gender === "Female" && userData.mainFocus === "losing weight" ?
          "Katy L. - Verified Live Laman user"
           : userData.gender === "Female" && userData.mainFocus === "building muscle" ?
          "Tahnee S. - Verified Live Laman user"
          : userData.gender === "Female" && userData.mainFocus === "build muscle + losing weight" ?
          "Salma T. - Verified Live Laman user":""
        }
      </p>


      <div className="navBtnHolder" style={{ paddingTop: "40px" }}>
        <NavButton text="Previous" nav={prev} />
        <NavButton text="Next" nav={next} />
      </div>
    </div>
  );
};

export default Verified;
