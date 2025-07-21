
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


const MainLayout = () => {
     const { page, next, prev } = usePageNavigation(); 
    return (
         < div className = "container" >
             <div className = "header" >
                Getting Started
            </div>
            < div className = "content-wrapper" >
                <div className = "card" >
                    <Routes>
                      <Route path="/page/1" element={<MainFocus />} />
                      <Route path="/page/2" element={<Gender />} />
                      <Route path="/page/3" element={<Age />} />

                      <Route path="*" element={<Navigate to="/page/1" replace />} />
                    </Routes>
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
