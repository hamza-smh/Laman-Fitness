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
  const { setPageValid, validationStatus, resetValidationStatus } =
    useFormValidation()

  const [isOpen, setIsOpen] = useState(false);
   useEffect(() => {
     setPageValid(39, true);
   }, []);

  const weightLoss = ((userData.weight.kg - userData.idealWeight.kg) / userData.weight.kg * 100).toFixed(0)

  const handleClear = () => {
    localStorage.removeItem('userData')
    resetValidationStatus()
    window.location.reload("/page/1")
  }

  return (
    <div className="book-container" style={{display:"flex",justifyContent:"center",alignItems:"space-between"}}>
       <p className="prediction-heading">
        Thank you for completing the survey !

      </p>

      {/* <BodyTransformationCarousel /> */}

    {/* <button
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
       */}

       {/* <CalendlyMeeting /> */}

       
    <button       
      onClick={()=>handleClear()}
      style={{
        backgroundColor: "#FFF",
        color: "#406EDF",
        border:"2px solid #406EDF",
        fontWeight:"600",
        padding: "15px 25px",
        borderRadius: "8px",
        fontSize: "25px",
        cursor: "pointer",
        marginTop: "40px",
        width:"50%"
      }}
    >
       Change your answers
    </button>
    <div style={{position:"absolute",bottom:"5px",width:"75%"}}>
      <p style={{color:"grey",fontSize:"9px"}}>
        Please Note: The author of this site is not engaged in rendering professional advice or services to the individual reader.The ideas, procedures, and suggestions contained within this work are not intended as a substitute
        for consulting with your physician. All matters regarding your health require medical supervision.The author shall not be liable or responsible
        for any loss or damage allegedly arising from any information or suggestions within this blog. You, as a reader of this website, are totally and completely responsible
        for your own health and healthcare.Your results may vary. Testimonials and examples used are exceptional results and are not intended to guarantee, promise, represent and/or assure that anyone will achieve the same or similar results.
        Live Laman® may not be copied or used for any purpose without express written consent.

      </p>
    </div>
    </div>
  );
};

export default BookACall;
