import "./style.css";
import { useUser } from "../../context/UserContext";
import NavButton from "../../components/nav-btn/nav-button";
import usePageNavigation from "../../hooks/usePageNavigation";


const NoBlame = () => {
  const { next, prev } = usePageNavigation();
  const { setUserData, userData } = useUser();

  return (
    <div className="not-alone-container">
      <p className="not-alone-subtext">
        We don't blame you. It's not easy to take complex information and create a simple plan that takes YOU into account.Let us take care of the guesswork
        for you.The next few questions will help us learn more about you.
      </p>
      <div className="navBtnHolder" style={{ paddingTop: "40px" }}>
        <NavButton text="Previous" nav={prev} />
        <NavButton text="Next" nav={next} />
      </div>
    </div>
  );
};

export default NoBlame;
