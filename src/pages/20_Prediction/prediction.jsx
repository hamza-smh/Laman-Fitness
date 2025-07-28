import "./style.css";
import { useUser } from "../../context/UserContext";
import NavButton from "../../components/nav-btn/nav-button";
import usePageNavigation from "../../hooks/usePageNavigation";
import {PredictionGraph} from "../../components/predictionGraph/graphGain.jsx"
import { PredictionGraphLoss } from "../../components/predictionGraph/graphLoss"; 
import { getNextSixMonthsAndExactDate } from "../../components/predictionGraph/graphGain.jsx";
import { getNextMonthsAndExactDate } from "../../components/predictionGraph/graphLoss";
const Prediction = ({ onContinue }) => {
  const { next, prev,cont } = usePageNavigation();
  const { setUserData, userData } = useUser();

  const weightLoss = ((userData.weight.kg-userData.idealWeight.kg)/userData.weight.kg *100).toFixed(0)

  return (
    <>
    <div className="prediction-container">
      <p className="prediction-subtext">
        We predict you'll {
          userData.mainFocus==="losing weight" || userData.mainFocus==="build muscle + losing weight"?"be"
          :"gain"
        }

      </p>
      <p className="prediction-heading">
        {
          userData.mainFocus==="losing weight" || userData.mainFocus==="build muscle + losing weight"?
          `${weightLoss}% body fat by ${getNextMonthsAndExactDate().exactDateOneMonthsLater}`
          :
          `5kg of muscle by ${getNextSixMonthsAndExactDate().exactDateFourMonthsLater}`
        }
      </p>
      
      {
        userData.mainFocus === "losing weight" ?
        <PredictionGraphLoss />
        :
        userData.mainFocus === "building muscle" ?
        <PredictionGraph />
        :
        userData.mainFocus === "build muscle + losing weight"?
        <PredictionGraphLoss />
        :""
      }

      
      <p>
        Great news! Based on Built With Science members like you we predict you 'll be able to hit your muscle building goal by {" "}
        {userData.mainFocus === "losing weight"?
        getNextMonthsAndExactDate().exactDateOneMonthsLater
        :
        getNextSixMonthsAndExactDate().exactDateFourMonthsLater} or earlier.
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
    </>
  );
};

export default Prediction;
