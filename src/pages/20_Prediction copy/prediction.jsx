import "./style.css";
import { useUser } from "../../context/UserContext";
import NavButton from "../../components/nav-btn/nav-button";
import usePageNavigation from "../../hooks/usePageNavigation";
import {PredictionGraph} from "../../components/predictionGraph/graphGain.jsx"

const Prediction = ({ onContinue }) => {
  const { next, prev,cont } = usePageNavigation();
  const { setUserData, userData } = useUser();

  return (
    <div className="prediction-container">
      <p className="prediction-subtext">
        We predict you'll gain
      </p>
      <p className="prediction-heading">
        5 kg of muscle by 23 Nov
      </p>
      
      <PredictionGraph />

      
      <p>
        Great news! Based on Built With Science members like you we predict you'll be able to hit your muscle building goal by 23 Nov 2025 or earlier.
        Next, tell us a bit more about your habits and behaviours so we can create the best plan for you.
      </p>
      
      {/* <div className="navBtnHolder" style={{ paddingTop: "40px" }}>
        <NavButton text="Previous" nav={prev} />
        <NavButton text="Next" nav={next} />
      </div> */}
      <div className="navBtnHolder" style={{ paddingTop: "40px" }}>
         <button className="cont-button" onClick={onContinue}>Continue</button>
      </div>
    </div>
  );
};

export default Prediction;
