import "./style.css";
import { useEffect } from "react";
import { useUser } from "../../context/UserContext";
import NavButton from "../../components/nav-btn/nav-button";
import usePageNavigation from "../../hooks/usePageNavigation";
import { useFormValidation } from "../../context/FormValidationContext";

const PerfectYourForm = () => {
  const { next, prev,goPrev,goNext } = usePageNavigation();
  const { setUserData, userData } = useUser();
  const { setPageValid } = useFormValidation();

  useEffect(() => {
    setPageValid(34, true);
  }, []);
  
  return (
    <div className="not-alone-container">
      <p className="not-alone-subtext">
        {
          userData.comfortable === "never"?
          "Don't worry. These exercises can be intimidating at first, but they're easy to learn. We'll teach you everything you need to know and show you some easier variations to start with."
          :
          userData.comfortable === "learning"?
          "Awesome! We'll show you how to perfect your form, and also show you some variations that might be a better fit for your body."
          :
          userData.comfortable === "regular"?
          "Awesome! We'll show you how to further improve your form and give you some new variations to try out for more gains and to break through plateaus."
          :
          userData.comfortable === "injuries" ?
          "Awesome! We 'll show you how to perfect your form, and also show you some variations that might be a better fit for your body."
          :
          ""
        }
      </p>
      <div className="navBtnHolder" style={{ paddingTop: "40px" }}>
        <NavButton text="Previous" nav={goPrev} />
        <NavButton text="Next" nav={goNext} />
      </div>
    </div>
  );
};

export default PerfectYourForm;
