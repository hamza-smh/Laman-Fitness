import "./style.css";
import { useEffect } from "react";
import { useUser } from "../../context/UserContext";
import NavButton from "../../components/nav-btn/nav-button";
import usePageNavigation from "../../hooks/usePageNavigation";
import { useFormValidation } from "../../context/FormValidationContext";


const AlmostReady = () => {
  const { next, prev } = usePageNavigation();
  const { setPageValid } = useFormValidation();

  useEffect(() => {
    setPageValid(25, true);
  }, []);

  return (
    <div className="not-alone-container">
      <p className="not-alone-subtext">
        You're almost there! Just a few more questions about your nutrition then your plan will be ready!
      </p>
      <div className="navBtnHolder" style={{ paddingTop: "40px" }}>
        <NavButton text="Previous" nav={prev} />
        <NavButton text="Next" nav={next} />
      </div>
    </div>
  );
};

export default AlmostReady;
