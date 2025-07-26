import "./style.css";
import { useEffect } from "react";
import NavButton from "../../components/nav-btn/nav-button";
import usePageNavigation from "../../hooks/usePageNavigation";
import { useFormValidation } from "../../context/FormValidationContext";

const Tricky = () => {
  const { next, prev } = usePageNavigation();
  const { setPageValid } = useFormValidation();

  useEffect(() => {
    setPageValid(9, true);
  }, []);

  return (
    <div className="not-alone-container">
      <p className="tricky-heading">
      This can be a tricky body type to navigate.<br /><br />
      Your body needs to build more muscle but also need to lose fat, especially in stubborn areas.But you 're in good hands. We'
      ve helped thousands of others just like you
      </p>
      <p className="tricky-subtext">
        transform from skinny fat to lean, muscular, and athletic.
      </p>
      <div className="navBtnHolder" style={{ paddingTop: "40px" }}>
        <NavButton text="Previous" nav={prev} />
        <NavButton text="Next" nav={next} />
      </div>
    </div>
  );
};

export default Tricky;
