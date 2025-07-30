import "./style.css";
import { useEffect } from "react";
import { useUser } from "../../context/UserContext";
import NavButton from "../../components/nav-btn/nav-button";
import usePageNavigation from "../../hooks/usePageNavigation";
import jesse from "../../assets/verified/jesse.jpg"
import ligia from "../../assets/verified/ligia.jpg"
import salma from "../../assets/verified/salma.jpg"
import { useFormValidation } from "../../context/FormValidationContext";
import brian from "../../assets/verified/brian.jpg"
const Verified2 = () => {
  const { next, prev } = usePageNavigation();
  const { setUserData, userData } = useUser();
  const { setPageValid } = useFormValidation();

   useEffect(() => {
     setPageValid(39, true);
   }, []);

  return (
    <div className="verified-container">
      <p className="verified-subtext">
        Great! That 's more than enough. We use science to get you incredible results regardless of what equipment you do or don't have.
      </p>

      {/* <div style={{background:"#FFF",width:"350px",height:"350px",padding:"5px",marginTop:"15px"}}> */}
      <div className = "verifyBlue" >
        {
          userData.gender === "Male" && userData.mainFocus === "losing weight" ?
           <img src={jesse} alt="jesse" style={{width:"100%",height:"100%"}}/>
           : userData.gender === "Male" && userData.mainFocus === "building muscle" ?
           <img src={brian} alt="brian" style={{width:"100%",height:"100%"}}/>
           : userData.gender === "Male" && userData.mainFocus === "build muscle + losing weight" ?
           <img src={brian} alt="cesar" style={{width:"100%",height:"100%"}}/>
           
           :
           userData.gender === "Female" && userData.mainFocus === "losing weight" ?
           <img src={salma} alt="jade" style={{width:"100%",height:"100%"}}/>
          : userData.gender === "Female" && userData.mainFocus === "building muscle" ?
           <img src={ligia} alt="salma" style={{width:"100%",height:"100%"}}/>
           : userData.gender === "Female" && userData.mainFocus === "build muscle + losing weight" ?
           <img src={ligia} alt="tanhee" style={{width:"100%",height:"100%"}}/>
           :""
        }
      </div>

       <p className="verified-subtext my15">
        {
           userData.gender === "Male" && userData.mainFocus === "losing weight" ?
          "Jesse K." 
          :
          userData.gender === "Male" && (userData.mainFocus === "building muscle" || userData.mainFocus === "build muscle + losing weight") ?
          "Brian K."
          :
          userData.gender === "Female" && userData.mainFocus === "losing weight" ?
          "Salma. T"
         :
          "Ligia R. "
        }- Verified Built With Science User
      </p>

      <div className="navBtnHolder" style={{ paddingTop: "40px" }}>
        <NavButton text="Previous" nav={prev} />
        <NavButton text="Next" nav={next} />
      </div>
    </div>
  );
};

export default Verified2;
