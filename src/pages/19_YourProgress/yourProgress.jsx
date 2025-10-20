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
      <h1 style={{fontSize:"44px"}}>
        ✅
      </h1>
      <p className="progress-heading">
        Thanks, <span style={{color:"#406EDF"}}>{userData.name}</span> !
      </p>
      <p className="progress-subheading" style={{padding:"0% 20%"}}>
        Based on what you shared, I’ll put together an estimate for how long it’ ll take you to reach your goal.
      </p>

      <div style={{position:"relative"}}>
        <LiquidLoader />
      </div>
      
    </div>
  );
};

export default YourProgress;
