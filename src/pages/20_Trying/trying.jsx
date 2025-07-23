import { useState,useEffect } from "react";
import { useUser } from "../../context/UserContext";
import NavButton from "../../components/nav-btn/nav-button"
import Button from "../../components/button/button";
import usePageNavigation from "../../hooks/usePageNavigation";
import Prediction from "../20_Prediction/prediction";

const Trying = () => {
    const { userData, setUserData } = useUser();
    const { next,prev } = usePageNavigation();
    const [showPrediction, setShowPrediction] = useState(false);

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
        next();
    };

    return (
        <>

            {showPrediction ? (
                <Prediction onContinue={handleContinue} />
            ) : (
                <div className="content-wrapper">
                    <div className="card">
                        <p style={{ fontWeight: "600", fontSize: "18px" }}>
                            How long have you been trying to get in shape, or seriously thinking about getting your body in shape?
                        </p>

                        <div style={{ paddingTop: "20px", width: "100%" }}>
                            <Button text={"0-6 months"} onClick={() => handleSelect("upto 6m")} />
                            <Button text={"6-12 months"} onClick={() => handleSelect("upto 12m")} />
                            <Button text={"1-3 years"} onClick={() => handleSelect("upto 3y")} />
                            <Button text={"3+ years"} onClick={() => handleSelect("more than 3")} />
                        </div>
                    </div>
                    <div className="navBtnHolder" style={{marginTop:"15px"}}>
                            <NavButton text="Previous" nav={prev}/>
                            <NavButton text="Next"    nav={next}/>
                    </div>
                </div>
            )}
        </>
  );
};

export default Trying;
