import "./style.css";
import { useEffect } from "react";
import NavButton from "../../components/nav-btn/nav-button";
import usePageNavigation from "../../hooks/usePageNavigation";
import { useFormValidation } from "../../context/FormValidationContext";

const Praise = () => {
  const { next, prev } = usePageNavigation();
  const { setPageValid } = useFormValidation();
  useEffect(() => {
    setPageValid(14, true);
  }, []);

  return (
    <div className="not-alone-container">
      <p className="not-alone-subtext" style={{fontSize:"26px !important"}}>
        You're probably doing better than you think! I'll help you identify what's working and how to stick with it!
      </p>
      <div className="navBtnHolder" style={{ paddingTop: "40px" }}>
        <NavButton text="Previous" nav={prev} />
        <NavButton text="Next" nav={next} />
      </div>
    </div>
  );
};

export default Praise;
