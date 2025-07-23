import "./style.css";
import { useUser } from "../../context/UserContext";
import NavButton from "../../components/nav-btn/nav-button";
import usePageNavigation from "../../hooks/usePageNavigation";
import jesse from "../../assets/verified/jesse.jpg"
import katy from "../../assets/verified/katy.jpg"

const Verified2 = () => {
  const { next, prev } = usePageNavigation();
  const { setUserData, userData } = useUser();

  return (
    <div className="verified-container">
      <p className="verified-subtext">
        Great!That 's more than enough. We use science to get you incredible results regardless of what equipment you do or don'
        t have.
      </p>

      <div style={{background:"#FFF",width:"350px",height:"350px",padding:"5px",marginTop:"15px"}}>
        {
           userData.gender === "Male" ?
           <img src={jesse} alt="jesse" style={{width:"100%",height:"100%"}}/>
           :
           userData.gender === "Female" ?
           <img src={katy} alt="katy" style={{width:"100%",height:"100%"}}/>
          :""
        }
      </div>

       <p className="verified-subtext my15">
        {
          userData.gender==="Male"?
          "Jesse K. - Verified Built With Science User"
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

export default Verified2;
