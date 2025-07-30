import "./style.css";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import NavButton from "../../components/nav-btn/nav-button";
import usePageNavigation from "../../hooks/usePageNavigation";
import { useFormValidation } from "../../context/FormValidationContext";
const UnsustainableDiets = () => {
  const { next, prev,goNext,goPrev } = usePageNavigation();
  const { setUserData, userData } = useUser();
  const { setPageValid } = useFormValidation();
  const navigate = useNavigate();

//   useEffect(() => {
//   console.log("DIET VALUE:", userData.diet);
//   console.log("LAST VISITED PAGE:", userData.lastVisistedPage);

//   if (userData.diet !== 1 && userData.diet !== 2 && userData.diet !== 3 && userData.lastVisistedPage === 25) {
//     setPageValid(27, true);
//     goNext()
//   } else if (userData.diet !== 1 && userData.diet !== 2 && userData.diet !== 3 && userData.lastVisistedPage === 27) {
//     goPrev()
//   }
// }, [userData.diet, userData.lastVisistedPage, navigate]);

// useEffect(() => {
//   const diet = userData.diet;
//   const lastPage = userData.lastVisitedPage;

//   console.log("DIET VALUE:", diet);
//   console.log("LAST VISITED PAGE:", lastPage);

//   const isSkipDiet = diet === 1 || diet === 2 || diet === 3;

//   if (isSkipDiet && lastPage === 25) {
//     console.log("tfthh")
//     setPageValid(26, true);
//     goNext(); 
//   }

//   if (isSkipDiet && lastPage !== 25) {
//     //navigate("/page/25")
//     goPrev()
//   }
//   setPageValid(26, true);
//   setTimeout(() => {
//     goNext();
//   }, 0);

//   // Do nothing if diet is 4 or 5 (just let user stay on page 26)
// }, [userData.diet, userData.lastVisitedPage,navigate]);

    useEffect(() => {
      setPageValid(26, true);
    }, []);


  return (
    <div className="not-alone-container">
          <p className = "not-alone-subtext" > 
          Most diets are unsustainable, complicated, and don 't take YOU into account. Welcome to something different.<br />
          We don 't believe in a "one diet fits all" plan. Built With Science builds your nutrition around you and your goals.
          </p>      
      <div className="navBtnHolder" style={{ paddingTop: "40px" }}>
        <NavButton text="Previous" nav={goPrev} />
        <NavButton text="Next" nav={goNext} />
      </div>
    </div>
  );
};

export default UnsustainableDiets;
