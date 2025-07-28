import "./style.css";
import { useEffect } from "react";
import { useUser } from "../../context/UserContext";
import NavButton from "../../components/nav-btn/nav-button";
import usePageNavigation from "../../hooks/usePageNavigation";
import { useFormValidation } from "../../context/FormValidationContext";

function getHeightInCm(height) {
  if (height?.cm) return parseFloat(height.cm);
  const feet = parseFloat(height?.feet || 0);
  const inches = parseFloat(height?.inches || 0);
  return (feet * 30.48) + (inches * 2.54);
}

function calculateBMI(weightKg, heightCm) {
  const heightM = heightCm / 100;
  return weightKg / (heightM * heightM);
}

const NotAlone = () => {
  const { next, prev } = usePageNavigation();
  const { userData,setUserData } = useUser();
  const { setPageValid } = useFormValidation();
  const weight = parseFloat(userData.weight.kg);
  const heightCm = getHeightInCm(userData.height);
  const bmi = calculateBMI(weight, heightCm);
  
  const isOverweight = userData.gender === "Female" ? bmi >= 24 : bmi >= 25;
  const message = userData.mainFocus === "build muscle + losing weight" ? "build muscle while losing fat!" :isOverweight ? "lose weight!" : "to build lean muscle";
  
  useEffect(() => {
     setUserData(prev => ({
       ...prev,
       overweight:isOverweight
     }));
    setPageValid(6, true);
  }, []);
  return (
    <div className="not-alone-container">
      <p className="not-alone-heading">You're not alone.</p>
      <p className="not-alone-subtext">
        We've helped{" "}
        <span style={{ fontWeight: "600" }}>
          110,247 {userData.gender === "Male" ? "men" : "women"}
        </span>{" "}
        like you {message}
      </p>
      <div className="navBtnHolder" style={{ paddingTop: "40px" }}>
        <NavButton text="Previous" nav={prev} />
        <NavButton text="Next" nav={next} />
      </div>
    </div>
  );
};

export default NotAlone;
