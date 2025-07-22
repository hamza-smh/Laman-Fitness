
import "./layout.css"
import {
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import NavButton from "./components/nav-btn/nav-button"
import MainFocus from "./pages/MainFocus_1/mainFocus"
import Gender from "./pages/Gender_2/gender"
import usePageNavigation from "./hooks/usePageNavigation";
import Age from "./pages/Age_3/age";
import { useUser } from "./context/UserContext";
import Height from "./pages/Height_4/height";
import Weight from "./pages/CurrentWeight_5/weight";
import NotAlone from "./pages/NotAlone_6/not_alone";
import Name from "./pages/Name_7/name"
import ProgressBar from "./components/progressBar/progressBar";
import BodyType from "./pages/BodyType_8/bodyType";
import TargetWeight from "./pages/TargetWeight_9/targetWeight";

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
        page === 9 ? <TargetWeight /> :
        <h1>Not Found</h1>;

        console.log("userData",userData)

        
        return (
         < div className = "container" >
             <div className = "header" 
                style={{backgroundColor: page===6?"#ADD8E6":"#FFF"}}
             >
                Getting Started
                <ProgressBar />
            </div>
                {page === 6 ? (
                    <div style={{}}>
                        <NotAlone />
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
