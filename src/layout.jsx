
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

const MainLayout = () => {
     const { page, next, prev } = usePageNavigation(); 
     const { setUserData, userData } = useUser();

      const screen =
        page === 1 ? <MainFocus /> :
        page === 2 ? <Gender />    :
        page === 3 ? <Age /> :
        page === 4 ? <Height /> :
        <h1>Not Found</h1>;

        console.log("userData",userData)

        
        return (
         < div className = "container" >
             <div className = "header" >
                Getting Started
            </div>
            < div className = "content-wrapper" >
                <div className = "card" >
                    {screen}
                </div>
                <div className="navBtnHolder">
                    <NavButton text="Previous" nav={prev}/>
                    <NavButton text="Next"    nav={next}/>
                </div>
            </div>
        </div>
    )
}
export default MainLayout
