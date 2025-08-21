import "./style.css";
import { useEffect } from "react";
import { useUser } from "../../context/UserContext";
import NavButton from "../../components/nav-btn/nav-button";
import usePageNavigation from "../../hooks/usePageNavigation";
import { useFormValidation } from "../../context/FormValidationContext";


const NoBlame = () => {
  const { next, prev } = usePageNavigation();
  const { setUserData, userData } = useUser();
    const { setPageValid } = useFormValidation();

    useEffect(() => {
    setPageValid(14, true);
  }, []);
  return (
    <div className="not-alone-container">
      <p className="not-alone-subtext">
        {
          userData.science_view === "Very familiar, I stay on top of the latest research and have a lot of experience with analyzing studies"?
          "Great! You're one step ahead and are already familiar with the power of applying science to fitness and nutrition. The next few questions will help us learn more about you."
          :
          "We don't blame you. It's not easy to take complex information and create a simple plan that takes YOU into account.Let us take care of the guesswork for you.The next few questions will help us learn more about you."
        }
        
      </p>
      <div className="navBtnHolder" style={{ paddingTop: "40px" }}>
        <NavButton text="Previous" nav={prev} />
        <NavButton text="Next" nav={next} />
      </div>
    </div>
  );
};

export default NoBlame;
