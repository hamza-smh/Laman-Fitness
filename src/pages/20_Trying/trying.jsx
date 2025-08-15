import { useState,useEffect } from "react";
import { useUser } from "../../context/UserContext";
import NavButton from "../../components/nav-btn/nav-button"
import Button from "../../components/button/button";
import usePageNavigation from "../../hooks/usePageNavigation";
import Prediction from "../20_Prediction/prediction";
import { useFormValidation } from "../../context/FormValidationContext";

const Trying = () => {
    const { userData, setUserData } = useUser();
    const { next,prev } = usePageNavigation();
    const [showPrediction, setShowPrediction] = useState(false);
    const { setPageValid } = useFormValidation();

    useEffect(() => {
        const lastPage = parseInt(sessionStorage.getItem("lastVisitedPage"));
        if (lastPage === 19) {
            setShowPrediction(true);
        }
    }, []);

     const handleContinue = () => {
         setShowPrediction(false);
     };


    const handleSelect = (duration) => {
        setUserData((prev) => ({
            ...prev,
            trying_since: duration,
        }));
        setPageValid(20, true);
        next();
    };

    return (
        <>
            <Prediction onContinue={handleContinue} />
            {/* {showPrediction ? (
                <Prediction onContinue={handleContinue} />
            ) : (
                <div className="content-wrapper">
                    <div className="card">
                        <p style={{ fontWeight: "600", fontSize: "18px" }}>
                            How long have you been trying to get in shape, or seriously thinking about getting your body in shape?
                        </p>

                        <div style={{ paddingTop: "20px", width: "100%" }}>
                            <Button className={userData.trying_since === "upto 6mon" ? "selected" : ""} text={"0-6 months"} onClick={() => handleSelect("upto 6mon")} />
                            <Button className={userData.trying_since === "upto 12mon" ? "selected" : ""} text={"6-12 months"} onClick={() => handleSelect("upto 12mon")} />
                            <Button className={userData.trying_since === "upto 3yrs" ? "selected" : ""} text={"1-3 years"} onClick={() => handleSelect("upto 3yrs")} />
                            <Button className={userData.trying_since === "more than 3yrs" ? "selected" : ""} text={"3+ years"} onClick={() => handleSelect("more than 3yrs")} />
                        </div>
                    </div>
                    <div className="navBtnHolder" style={{marginTop:"15px"}}>
                            <NavButton text="Previous" nav={prev}/>
                            <NavButton text="Next"    nav={next}/>
                    </div>
                </div>
            )} */}
        </>
  );
};

export default Trying;
