import "./style.css";
import NavButton from "../../components/nav-btn/nav-button";
import usePageNavigation from "../../hooks/usePageNavigation";


const Praise = () => {
  const { next, prev } = usePageNavigation();

  return (
    <div className="not-alone-container">
      <p className="not-alone-subtext">
        You 're probably doing better than you think! We'll help you identify what 's working and how to stick with it!
      </p>
      <div className="navBtnHolder" style={{ paddingTop: "40px" }}>
        <NavButton text="Previous" nav={prev} />
        <NavButton text="Next" nav={next} />
      </div>
    </div>
  );
};

export default Praise;
