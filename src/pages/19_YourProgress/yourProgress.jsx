import "./style.css";
import { useUser } from "../../context/UserContext";
import NavButton from "../../components/nav-btn/nav-button";
import usePageNavigation from "../../hooks/usePageNavigation";
import progressChart from "../../assets/workout/bws-loading-chart-2.jpg"
import LiquidLoader from "../../components/loading/loading";

const YourProgress = ({ onContinue }) => {
  const { next, prev,cont } = usePageNavigation();
  const { setUserData, userData } = useUser();

  return (
    <div className="progress-container">
      <p className="progress-heading">
        Build muscle faster with Built With Science
        than vs.trying on your own
      </p>
      <div style={{display:"flex",textAlign:"center",justifyContent:"center"}}>
      <img src={progressChart} style={{width:"350px",height:"350px"}} alt=""/>
      </div>
      <div style={{position:"relative"}}>
        <LiquidLoader />
      </div>
      
    </div>
  );
};

export default YourProgress;
