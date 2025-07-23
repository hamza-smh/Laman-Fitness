import "./layout.css"
import { useUser } from "./context/UserContext";
import NavButton from "./components/nav-btn/nav-button"
import usePageNavigation from "./hooks/usePageNavigation";
import ProgressBar from "./components/progressBar/progressBar";

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
        <h1>Not Found</h1>;

        console.log("userData",userData)

        
        return (
         < div className = "container" >
             <div className = "header" 
                style = {
                    {
                        backgroundColor: page === 6 || page === 9 || page === 12 || page === 14 || page === 17 ? "#ADD8E6" : "#FFF"
                    }
                }
             >
                Getting Started
                <ProgressBar />
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
                (    
                    < div className = "content-wrapper" >
                        <div className = "card" >
                            {screen}
                        </div>
                        <div className="navBtnHolder">
                            <NavButton text="Previous" nav={prev}/>
                            <NavButton text="Next"    nav={next}/>
                        </div>
                    </div>
                )}
                
        </div>
    )
}
export default MainLayout
