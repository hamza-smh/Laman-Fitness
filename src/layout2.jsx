import "./layout.css"
import { useEffect } from "react";
import { useUser } from "./context/UserContext";
import { useParams, useNavigate } from "react-router-dom";
import { useFormValidation } from "./context/FormValidationContext";

import NavButton from "./components/nav-btn/nav-button"
import usePageNavigation from "./hooks/usePageNavigation";
import GettingStarted from "./components/progressBar/gettingStarted.jsx"
import HabitsAndBehaviour from "./components/progressBar/habitsAndBehavoiur.jsx"
import TrainingAndNutrition from "./components/progressBar/trainingAndNutrition";

import { getScreenComponent, pageComponentMap } from "./screen";
import Consistency from "./pages/14_Consistency/consistency";

const MainLayout = () => {
  const { page, next, prev } = usePageNavigation();
  const { setUserData, userData } = useUser();

 
  const { index } = useParams();
  const navigate = useNavigate();
  const { validationStatus } = useFormValidation();

  const ComponentToRender = pageComponentMap[page];
  const screen = getScreenComponent(page);

  console.log("userData", userData)
  console.log("Form Valid",validationStatus);

  //  useEffect(() => {
  //    const currentPage = parseInt(index);

  //    for (let i = 1; i < currentPage; i++) {
  //      if (!validationStatus[i]) {
  //        navigate(`/page/${i}`);
  //        return;
  //      }
  //    }
  //  }, [index, validationStatus, navigate]);
  useEffect(() => {
    if (!validationStatus || Object.keys(validationStatus).length === 0) return;

    const currentPage = parseInt(index);

    for (let i = 1; i < currentPage; i++) {
      if (!validationStatus[i]) {
        navigate(`/page/${i}`);
        return;
      }
    }
  }, [index, validationStatus, navigate]);


  const goNext = () => {
    const currentPage = parseInt(page); 
    if (!validationStatus[currentPage]) {
      return;
    }
    setUserData(prev => ({ ...prev, lastVisitedPage: page }));
    sessionStorage.setItem("lastVisitedPage", page);
    next();

  };

  const goPrev = () => {
    setUserData(prev => ({ ...prev, lastVisitedPage: page }));
    sessionStorage.setItem("lastVisitedPage", page);
    prev();
  };

  const isLightBluePage = [6, 9, 12, 14, 17, 23, 24, 25, 26, 31, 34, 37, 39, 41, 42, 44, 46, 53].includes(page);
  const backgroundColor = isLightBluePage ? "#ADD8E6" : "#FFF";
  let sectionTitle = "Training and Nutrition";
  let SectionProgressComponent = TrainingAndNutrition;

  if (page <= 20) {
    sectionTitle = "Getting Started";
    SectionProgressComponent = GettingStarted;
  } else if (page <= 27) {
    sectionTitle = "Habits & Behaviors";
    SectionProgressComponent = HabitsAndBehaviour;
  }

  return (
    < div className="container" >
      <div className="header" style={{ backgroundColor }}>
        {sectionTitle}
        <SectionProgressComponent />
      </div>
      {ComponentToRender ? (
        <div>
          {
            page !== 14 && !userData.bestDescription ===
              "I have some healthy habits but I struggle with consistency" 
              (<ComponentToRender />)
          }
        </div>
      )
        :
        (
          < div className="content-wrapper" >
            <div className="card" >
              {screen}
            </div>
            <div className="navBtnHolder">
              {
                page !== 1 ?
                  <NavButton text="Previous" nav={goPrev} /> : ""
              }
              {
                page < 54 ?
                  <NavButton text="Next" nav={goNext} />
                  :
                  <button
                    className="result-button"
                    onClick={() => navigate('/results')}
                  >
                    See My Results
                  </button>
              }
              <button 
                className = "result-button"
                onClick={() => {
                  localStorage.removeItem("userData");
                  window.location.reload(); 
                }}>
                Clear
              </button>

            </div>
          </div>
        )}
    </div>
  )
}
export default MainLayout
