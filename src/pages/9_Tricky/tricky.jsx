import "./style.css";
import { useEffect } from "react";
import { useUser } from '../../context/UserContext'
import { useFormValidation } from "../../context/FormValidationContext";
import NavButton from "../../components/nav-btn/nav-button";
import usePageNavigation from "../../hooks/usePageNavigation";

const Tricky = () => {
  const { next, prev } = usePageNavigation();
  const { setPageValid } = useFormValidation();
  const { userData, setUserData } = useUser()
  useEffect(() => {
    setPageValid(9, true);
  }, []);

  return (
    <div className="not-alone-container">
        {
          userData.currentBodyType===1 || userData.currentBodyType===2 ?
          <>
          <p className="tricky-heading">
            This can be a tricky body type to navigate.<br /><br />
            Your body needs to build more muscle but also need to lose fat, especially in stubborn areas.But you're in good hands. We've helped thousands of others just like you
          </p>
          <p className="tricky-subtext">
            transform from skinny fat to lean, muscular, and athletic.
          </p>
          </>
          :
          userData.currentBodyType===3?
          <p className="tricky-heading">
            Believe it or not, you're in a really good position.<br /><br />
            You've done the hard work of building muscle. Lowering your body fat without losing your hard earned muscle will help you build a lean, muscular, athletic physique.
          </p>
          :
          userData.currentBodyType===4?
          <p className="tricky-heading">
            Thanks for sharing that with us.<br /><br />
            We'll help you take a gradual, sustainable approach towards your goals. We want to help you lose the fat, and keep it off for good.
          </p>
          :""
        }
      
      
      <div className="navBtnHolder" style={{ paddingTop: "40px" }}>
        <NavButton text="Previous" nav={prev} />
        <NavButton text="Next" nav={next} />
      </div>
    </div>
  );
};

export default Tricky;
