import "./style.css";
import { useUser } from "../../context/UserContext";
import NavButton from "../../components/nav-btn/nav-button";
import usePageNavigation from "../../hooks/usePageNavigation";


const AlmostReady = () => {
  const { next, prev } = usePageNavigation();
  const { setUserData, userData } = useUser();

  return (
    <div className="not-alone-container">
      <p className="not-alone-subtext">
        You 're almost there! Just a few more questions about your nutrition then your plan will be ready!
      </p>
      <div className="navBtnHolder" style={{ paddingTop: "40px" }}>
        <NavButton text="Previous" nav={prev} />
        <NavButton text="Next" nav={next} />
      </div>
    </div>
  );
};

export default AlmostReady;
