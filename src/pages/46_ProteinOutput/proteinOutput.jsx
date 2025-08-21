import "./style.css";
import { useEffect } from "react";
import { useUser } from "../../context/UserContext";
import NavButton from "../../components/nav-btn/nav-button";
import usePageNavigation from "../../hooks/usePageNavigation";
import { useFormValidation } from "../../context/FormValidationContext";

const ProteinOutput = () => {
  const { next, prev } = usePageNavigation();
  const { setUserData, userData } = useUser();
  const { setPageValid } = useFormValidation();
  
  useEffect(() => {
    setPageValid(29, true);
  }, []);

  return (
    <div className="not-alone-container">
      <p className="not-alone-subtext">
        {
          userData.protein === "no idea"?
          "No worries! Most people have never tracked their protein intake. We'll show you how to start hitting your protein target with ease."
          :
          userData.protein === "eating more"?
          "Great! You're one step ahead! We'll show you how to continue hitting your protein target with ease, and double check you're eating the highest quality protein sources."
          :
          userData.protein === "eating less"?
          "Consistently undereating can lead to low energy and muscle loss. Don't worry, we'll show you some easy tweaks you can make to your diet to get closer to your target calorie intake and hit your fat loss goal."
          :
          userData.protein === "pretty close" ?
          "Great! You're one step ahead! We'll show you how to easily hit your protein target everyday, and double check you're eating the highest quality protein sources."
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

export default ProteinOutput;
