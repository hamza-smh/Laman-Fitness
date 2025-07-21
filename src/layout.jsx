
import "./layout.css"
import NavButton from "./components/nav-btn/nav-button"
import MainFocus from "./pages/MainFocus1/mainFocus"
import Gender from "./pages/Gender2/gender2"

const MainLayout = () => {
    return (
         < div className = "container" >
             <div className = "header" >
                Getting Started
            </div>
            < div className = "content-wrapper" >
                <div className = "card" >
                    {/* <MainFocus /> */}
                    <Gender />
                </div>
                <div className="navBtnHolder">
                    <NavButton text="Previous"/>
                    <NavButton text="Next"/>
                </div>
            </div>
        </div>
    )
}
export default MainLayout