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
import Trying from "./pages/20_Trying/trying";
import MainReason from "./pages/21_MainReason/mainReason"
import Ashamed from "./pages/22_Ashamed/ashamed"
import Dissatisfied from "./pages/23_Dissatisfied/dissatisfied";
import Consistent from "./pages/24_Consistent/consistent";
import Diet from "./pages/25_Diet/diet";
import UnsustainableDiets from "./pages/26_UnsustainableDiets/unsustainableDiets";
import PastAttempts from "./pages/27_PastAttempts/pastAttempts";
import WorkoutTrackingApp from "./pages/28_WorkoutTrackingApp/workoutTrackingApp";
import NutritionTrackingApp from "./pages/29_NutritionTrackingApp/nutritionTrackingApp";
import TrainingAndNutrition from "./components/progressBar/trainingAndNutrition";
import BuiltWithScience from "./pages/30_BuiltWithScience/builtWithScience";
import NoBlame from "./pages/31_NoBlame/noBlame";
import Active from "./pages/32_Active/active";
import Comfortable from "./pages/33_Comfortable/comfortable";
import PerfectYourForm from "./pages/34_PerfectYourForm/perfectYourForm";
import ExcerciseFrequency from "./pages/35_ExcerciseFrequency/excerciseFrequency";
import WorkoutTime from "./pages/35_WorkoutTime/workoutTime";
import WorkoutVideo from "./pages/37_WorkoutVideo/workoutVideo";
import Equipment from "./pages/38_Equipment/equipment";
import Verified2 from "./pages/39_Verified2/verified";

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
        page === 28 ? < WorkoutTrackingApp /> :
        page === 29 ? < NutritionTrackingApp /> :
        page === 30 ? < BuiltWithScience /> :
        page === 31 ? < NoBlame /> :
        page === 32 ? < Active /> :
        page === 33 ? < Comfortable /> :
        page === 34 ? < PerfectYourForm /> :
        page === 35 ? < ExcerciseFrequency /> :
        page === 36 ? < WorkoutTime /> :
        page === 37 ? < WorkoutVideo /> :
        page === 38 ? < Equipment /> :
        page === 38 ? < Verified2 /> :

        <h1>Not Found</h1>;

        console.log("userData",userData)

        const goNext = () => {
          setUserData(prev => ({ ...prev, lastVisitedPage: page }));
          sessionStorage.setItem("lastVisitedPage", page);
          next();
        };

        const goPrev = () => {
          setUserData(prev => ({ ...prev, lastVisitedPage: page }));
          sessionStorage.setItem("lastVisitedPage", page); 
          prev();
        };

        
        return (
         < div className = "container" >
             <div className = "header" 
                style = {
                    {
                        backgroundColor: page === 6 || page === 9 || page === 12 || page === 14 || page === 17 || page === 23 || page === 24 || page === 25 || page === 26 || page === 31 || page===34 || page === 37 || page=== 39 ? "#ADD8E6" : "#FFF"
                    }
                }
             >
                {
                    page <= 20 ? "Getting Started":
                    page <= 27 ? "Habits & Behaviors":
                    "training and nutrition"
                }
                {
                    page <= 20 ?<GettingStarted />:
                    page <= 27 ?<HabitsAndBehaviour />:
                    <TrainingAndNutrition />
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
                        <Diet />
                    </div>
                )       
                : 
                page === 26 ? (
                    <div>
                        <UnsustainableDiets />
                    </div>
                )       
                : 
                page === 31 ? (
                    <div>
                        <NoBlame / >
                    </div>
                )       
                : 
                page === 34 ? (
                    <div>
                        <PerfectYourForm />
                    </div>
                )       
                :
                page === 37 ? (
                    <div>
                        <WorkoutVideo />
                    </div>
                )       
                :
                page === 39 ? (
                    <div>
                        <Verified2 />
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
