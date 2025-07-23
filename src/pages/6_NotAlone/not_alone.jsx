import "./style.css";
import { useUser } from "../../context/UserContext";
import NavButton from "../../components/nav-btn/nav-button";
import usePageNavigation from "../../hooks/usePageNavigation";


const NotAlone = () => {
  const { next, prev } = usePageNavigation();
  const { setUserData, userData } = useUser();

  return (
    <div className="not-alone-container">
      <p className="not-alone-heading">You're not alone.</p>
      <p className="not-alone-subtext">
        We've helped 110,247 {userData.gender==="Male"?"men":"women"} like you lose weight!
      </p>
      <div className="navBtnHolder" style={{ paddingTop: "40px" }}>
        <NavButton text="Previous" nav={prev} />
        <NavButton text="Next" nav={next} />
      </div>
    </div>
  );
};

export default NotAlone;
