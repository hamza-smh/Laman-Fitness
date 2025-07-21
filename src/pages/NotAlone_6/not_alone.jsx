import NavButton from "../../components/nav-btn/nav-button"
import usePageNavigation from "../../hooks/usePageNavigation"
const NotAlone = () => {
    const { page, next, prev } = usePageNavigation(); 
    return (
        <div style={
            {
                display: "flex",
                background: "#ADD8E6",
                width: "100%",
                flexDirection: "column",
                padding: "10vh 50vh",
                height:"100vh",
                flexDirection: "column",

            }
        } >
            <p style={
                {
                    fontWeight: "600",
                    fontSize: "28px",
                    fontFamily: "Oswald,sans-serif"
                }
            } >
                You're not alone.
            </p>
            <p style={{ fontWeight: "400", color: "#000", fontSize: "20px", fontStyle: "italic" }}>
                We 've helped 110,247 men like you lose weight!
            </p>
            <div className="navBtnHolder" style={{paddingTop:"40px"}}>
                <NavButton text="Previous" nav={prev} />
                <NavButton text="Next" nav={next} />
            </div>

        </div>
    )
}
export default NotAlone