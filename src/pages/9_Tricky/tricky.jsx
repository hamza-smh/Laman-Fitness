import NavButton from "../../components/nav-btn/nav-button";
import usePageNavigation from "../../hooks/usePageNavigation";
import "./style.css";

const Tricky = () => {
  const { next, prev } = usePageNavigation();

  return (
    <div className="not-alone-container">
      <p className="tricky-heading">
      This can be a tricky body type to navigate.
      Your body needs to build more muscle but also need to lose fat, especially in stubborn areas.But you 're in good hands. We'
      ve helped thousands of others just like you
      </p>
      <p className="not-alone-subtext">
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
