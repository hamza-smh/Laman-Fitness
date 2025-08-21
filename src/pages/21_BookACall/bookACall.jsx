import "./style.css";
import { useState,useEffect } from "react";
import { useUser } from "../../context/UserContext";
import NavButton from "../../components/nav-btn/nav-button";
import usePageNavigation from "../../hooks/usePageNavigation";
import  {PopupModal} from "react-calendly"
import { getNextMonthsAndExactDate } from "../../components/predictionGraph/graphLoss";
import { parseMuscleGainKg } from "../11_TargetWeight/targetWeight";
import { getNextSixMonthsAndExactDate } from "../../components/predictionGraph/graphGain";
import { useFormValidation } from "../../context/FormValidationContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BodyTransformationCarousel from "../../components/carousel/carousel";
import CalendlyMeeting from "../../components/calendly/calendly";

const BookACall = () => {
  const { next, prev } = usePageNavigation();
  const { setUserData, userData } = useUser();

  const { setPageValid } = useFormValidation();
  const [isOpen, setIsOpen] = useState(false);
   useEffect(() => {
     setPageValid(39, true);
   }, []);

     const weightLoss = ((userData.weight.kg - userData.idealWeight.kg) / userData.weight.kg * 100).toFixed(0)
  return (
    <div className="book-container" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
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
          `${parseMuscleGainKg(userData.muscleGain)}kg of muscle by ${getNextSixMonthsAndExactDate().exactDateSixMonthsLaterFull}`
        }
      </p>

      <BodyTransformationCarousel />

    <button
      onClick={() => setIsOpen(true)}
      style={{
        backgroundColor: "#406EDF",
        color: "white",
        border: "none",
        padding: "12px 20px",
        borderRadius: "8px",
        fontSize: "16px",
        cursor: "pointer",
        marginTop: "40px",
        width:"50%"
      }}
    >
       Book a Call
    </button>

     <PopupModal
      url = "https://calendly.com/hamza-smh2000/30min"
      onModalClose={() => setIsOpen(false)}
      open={isOpen}
      rootElement={document.getElementById("root")}
    />
      

       {/* <CalendlyMeeting /> */}

      

    </div>
  );
};

export default BookACall;
