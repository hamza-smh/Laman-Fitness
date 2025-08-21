import "./style.css";
import { useEffect } from "react";
import { useUser } from "../../context/UserContext";
import NavButton from "../../components/nav-btn/nav-button";
import usePageNavigation from "../../hooks/usePageNavigation";
import { useFormValidation } from "../../context/FormValidationContext";

const CalorieOutput = () => {
  const { next, prev } = usePageNavigation();
  const { setUserData, userData } = useUser();
  const { setPageValid } = useFormValidation();

   useEffect(() => {
     setPageValid(27, true);
   }, []);

  return (
    <div className="not-alone-container">
      <p className="not-alone-subtext">
        {
          userData.calories === "no idea"?
          "No problem! We'll show you how to start easily hitting your daily calorie goal to lose fat even if you've never tracked before."
          :
          userData.calories === "eating more"?
          "No problem! We'll show you some easy tweaks you can make to your diet to get closer to your target calorie intake and hit your fat loss goal."
          :
          userData.calories === "eating less"?
          "Consistently undereating can lead to low energy and muscle loss. Don't worry, we'll show you some easy tweaks you can make to your diet to get closer to your target calorie intake and hit your fat loss goal."
          :
          userData.calories === "pretty close" ?
          "Great! You're one step ahead - just make sure you're tracking your calories accurately. Let's see if there's another area with nutrition you can improve on."
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

export default CalorieOutput;
