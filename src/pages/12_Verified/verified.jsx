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
const Verified = () => {
  const { next, prev } = usePageNavigation();
  const { setUserData, userData } = useUser();
  const { setPageValid } = useFormValidation();

  useEffect(() => {
    setPageValid(12, true);
  }, []);

  
  return (
    <div className="verified-container">
        {userData.overweight ===true? 
        <p className = "verified-subtext"> Our members lose weight at an average rate of 0.7 % of their bodyweight per week. < br / > Any faster than this and you risk losing muscle. </p>
        :
        <p className="verified-subtext">"Depending on your training experience, with the right plan you can expect to gain about 1-3 lbs of muscle per month."</p>
        }
    
      <p className="verified-subtext">
        {
          userData.gender==="Male" ?
          "To put this into perspective, here 's Cesar, who lost 20 pounds in a little over 2 months:"
          :
          userData.gender === "Female" && userData.overweight ?
          "To put this into perspective, here's Katy who dropped 8% in body fat while gaining a significant amount of muscle:"
          : 
          "To put this into perspective, here's what 10 lbs of pure muscle gain looks like:"
        }
        
      </p>

      <div style={{background:"#FFF",width:"400px",height:"350px",padding:"5px",marginTop:"15px"}}>
        {
           userData.gender === "Male" ?
           <img src={cesar} alt="cesar" style={{width:"100%",height:"100%"}}/>
           :
           userData.gender === "Female" && userData.overweight ?
           <img src={katy} alt="katy" style={{width:"100%",height:"100%"}}/>
           :
           <img src={tanhee} alt="tanhee" style={{width:"100%",height:"100%"}}/>
        }
      </div>

       <p className="verified-subtext my15">
        {
          userData.gender==="Male"?
          "Cesar R. - Verified Built With Science User"
          :
          userData.gender === "Female" && userData.overweight ?
          "Katy L. - Verified Built With Science User"
          :
          "Tahnee S. - Verified Built With Science User"
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
