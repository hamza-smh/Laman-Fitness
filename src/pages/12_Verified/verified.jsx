import "./style.css";
import { useUser } from "../../context/UserContext";
import NavButton from "../../components/nav-btn/nav-button";
import usePageNavigation from "../../hooks/usePageNavigation";
import cesar from "../../assets/verified/cesar.jpg"
import katy from "../../assets/verified/katy.jpg"
import abdullah from "../../assets/verified/abdullah.jpg"
import salma from "../../assets/verified/salma.jpg"

const Verified = () => {
  const { next, prev } = usePageNavigation();
  const { setUserData, userData } = useUser();

  return (
    <div className="verified-container">
      <p className="verified-subtext">
        Our members lose weight at an average rate of 0.7 % of their bodyweight per week. <br />Any faster than this and you risk losing muscle.
      </p>
      <p className="verified-subtext">
        {
          userData.gender==="Male"?
          "To put this into perspective, here 's Cesar, who lost 20 pounds in a little over 2 months:"
          :
          userData.gender === "Female" ?
          "To put this into perspective, here's Katy who dropped 8% in body fat while gaining a significant amount of muscle:"
          :""
        }
        
      </p>

      <div style={{background:"#FFF",width:"300px",height:"300px",padding:"5px",marginTop:"15px"}}>
        {
           userData.gender === "Male" ?
           <img src={cesar} alt="cesar" style={{width:"100%",height:"100%"}}/>
           :
           userData.gender === "Female" ?
           <img src={katy} alt="katy" style={{width:"100%",height:"100%"}}/>
          :""
        }
      </div>

       <p className="verified-subtext my15">
        {
          userData.gender==="Male"?
          "Cesar R. - Verified Built With Science User"
          :
          userData.gender === "Female" ?
          "Katy L. - Verified Built With Science User"
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

export default Verified;
