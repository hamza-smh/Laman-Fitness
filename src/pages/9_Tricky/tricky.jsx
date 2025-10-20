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
          userData.currentBodyType===1 ?
          <>
            <p className="tricky-heading">
              You’re in the right place, {userData.name}!
            </p>
            <br /><br />
            <p className="trickySubheading">
              This body type takes a targeted approach, and that’s exactly what you’ll get.
            </p>
          </>
          :
          userData.currentBodyType===2?
          <>
            <p className="tricky-heading">
              You’re in the right place, {userData.name}<br />
              This can be a tricky body type to navigate.</p>
              <br /><br />
              <p className="trickySubheading">
              Your body needs to build more muscle but also needs to lose fat, especially in stubborn areas.
               But you're in good hands. I've helped hundreds just like you

            </p>
          </>
          :
          userData.currentBodyType===4?
          <>
            <p className="tricky-heading">
              You’re in a great spot, {userData.name}! 
            </p> 
            <br /> <br />
            <p className = "trickySubheading" >
              You’ve done the work and you’re already doing great.I’ll help you build
              on that with healthy habits that support your goals
              for the long-term.
            </p>
          </>
          :
          userData.currentBodyType===5?
          <>
            <p className="tricky-heading">
              You’re in a great spot, {userData.name}
            </p>  
            <br /> <br />
            <p className = "trickySubheading" >
              You've done the hard work of building muscle. Lowering your body fat without losing your hard earned muscle will help you build a lean, muscular, athletic physique.
            </p>
          </>
          :
          userData.currentBodyType===6?
          <>
            <p className="tricky-heading">
              I’ve got you, {userData.name} 
            </p>   
            <br /> <br />
            <p className = "trickySubheading" >
              I’ll help you take a gradual, sustainable approach towards your goals.We want to help you lose the fat, and keep it off
              for good.
          </p>
          </>
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
