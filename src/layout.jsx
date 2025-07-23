import "./layout.css"
import { useUser } from "./context/UserContext";
import NavButton from "./components/nav-btn/nav-button"
import usePageNavigation from "./hooks/usePageNavigation";
import GettingStarted from "./components/progressBar/gettingStarted.jsx"
import HabitsAndBehaviour from "./components/progressBar/habitsAndBehavoiur.jsx"

import MainFocus from "./pages/1_MainFocus/mainFocus"
import Gender from "./pages/2_Gender/gender"
import Age from "./pages/3_Age/age";
import Height from "./pages/4_Height/height";
import Weight from "./pages/5_CurrentWeight/weight";
import NotAlone from "./pages/6_NotAlone/not_alone";
import Name from "./pages/7_Name/name"
import BodyType from "./pages/8_BodyType/bodyType";
import Tricky from "./pages/9_Tricky/tricky";
import BodyFat from "./pages/10_BodyFat/bodyFat";
import TargetWeight from "./pages/11_TargetWeight/targetWeight";
import Verified from "./pages/12_Verified/verified";
import BestDescription from "./pages/13_BestDescription/bestDescription";
import Praise from "./pages/14_Praise/praise";
import DifficultAreas from "./pages/15_DifficultAreas/difficultAreas";
import FocusBuilding from "./pages/16_FocusBuilding/focusBuilding";
import Testimonial from "./pages/17_Testimonial/testimonial";
import GymExperience from "./pages/18_GymExperience/gymExperience";
import Email from "./pages/19_Email/email";
import Prediction from "./pages/20_Prediction/prediction";
import Trying from "./pages/20_Trying/trying";
import MainReason from "./pages/21_MainReason/mainReason"
import Ashamed from "./pages/22_Ashamed/ashamed"
import Dissatisfied from "./pages/23_Dissatisfied/dissatisfied";
import Consistent from "./pages/24_Consistent/consistent";
import Diet from "./pages/25_Diet/diet";
import UnsustainableDiets from "./pages/26_UnsustainableDiets/unsustainableDiets";
import PastAttempts from "./pages/27_PastAttempts/pastAttempts";

const MainLayout = () => {
     const { page, next, prev } = usePageNavigation(); 
     const { setUserData, userData } = useUser();

      const screen =
        page === 1 ? <MainFocus /> :
        page === 2 ? <Gender />    :
        page === 3 ? <Age /> :
        page === 4 ? <Height /> :
        page === 5 ? <Weight /> :
        page === 6 ? <NotAlone /> :
        page === 7 ? <Name /> :
        page === 8 ? <BodyType /> :
        page === 9 ? <Tricky /> :
        page === 10 ? <BodyFat /> :
        page === 11 ? <TargetWeight /> :
        page === 12 ? <Verified /> :
        page === 13 ? <BestDescription /> :
        page === 14 ? <Praise /> :
        page === 15 ? <DifficultAreas /> :
        page === 16 ? <FocusBuilding /> :
        page === 17 ? <Testimonial /> :
        page === 18 ? <GymExperience /> :
        page === 19 ? <Email /> :
        page === 20 ? <Trying /> :
        page === 21 ? <MainReason /> :
        page === 22 ?<Ashamed /> :
        page === 23 ? < Dissatisfied /> :
        page === 24 ? < Consistent /> :
        page === 25 ? < Diet /> :
        page === 26 ? < UnsustainableDiets /> :
        page === 27 ? < PastAttempts /> :

        <h1>Not Found</h1>;

        console.log("userData",userData)

        const goNext = () => {
          setUserData(prev => ({ ...prev, lastVisitedPage: page }));
          sessionStorage.setItem("lastVisitedPage", page);
          next();
        };

        const goPrev = () => {
          setUserData(prev => ({ ...prev, lastVisitedPage: page }));
          sessionStorage.setItem("lastVisitedPage", page); // ✅ store it
          prev();
        };

        
        return (
         < div className = "container" >
             <div className = "header" 
                style = {
                    {
                        backgroundColor: page === 6 || page === 9 || page === 12 || page === 14 || page === 17 || page === 23 || page === 24 || page === 25 || page === 26 ? "#ADD8E6" : "#FFF"
                    }
                }
             >
                {
                    page<=20 ? "Getting Started":"Habits & Behaviors"
                }
                {
                    page<=20 ?<GettingStarted />:<HabitsAndBehaviour />
                }
                
            </div>
                {page === 6 ? (
                    <div>
                        <NotAlone />
                    </div>
                )       
                :
                page === 9 ? (
                    <div>
                        <Tricky />
                    </div>
                )       
                : 
                page === 12 ? (
                    <div>
                        <Verified />
                    </div>
                )       
                : 
                page === 14 ? (
                    <div>
                        <Praise />
                    </div>
                )       
                : 
                page === 17 ? (
                    <div>
                        <Testimonial />
                    </div>
                )       
                : 
                page === 20 ? (
                    <div>
                        <Trying />
                    </div>
                )       
                : 
                page === 23 ? (
                    <div>
                        < Dissatisfied / >
                    </div>
                )       
                : 
                page === 24 ? (
                    <div>
                        < Consistent / >
                    </div>
                )       
                : 
                page === 25 ? (
                    <div>
                        <Diet / >
                    </div>
                )       
                : 
                page === 26 ? (
                    <div>
                        <UnsustainableDiets / >
                    </div>
                )       
                : 
                (    
                    < div className = "content-wrapper" >
                        <div className = "card" >
                            {screen}
                        </div>
                        <div className="navBtnHolder">
                            <NavButton text="Previous" nav={goPrev}/>
                            <NavButton text="Next"    nav={goNext}/>
                        </div>
                    </div>
                )}
                
        </div>
    )
}
export default MainLayout
