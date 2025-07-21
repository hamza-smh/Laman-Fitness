import { useUser } from "../../context/UserContext";
import Button from "../../components/Button/button"
import usePageNavigation from "../../hooks/usePageNavigation";

const MainFocus =()=>{
    const {userData,setUserData} = useUser();
    const { page, next, prev } = usePageNavigation(); 

    const handleSelect = (focus) => {
        setUserData((prev) => ({
            ...prev,
            mainFocus: focus
        }));
        next();
        console.log("Selected main focus:", focus); 
    };
    return(
    <div>
        <p style={{fontWeight:"600",fontSize:"18px"}}>
            What is your main focus right now ?
        </p>

        <div style={{paddingTop:"20px",width:"100%"}}>
            <Button text={"I am only focused on losing weight"}  onClick={() => handleSelect("losing weight")}/>
            <Button text={"Building muscle is more important than losing fat"}  onClick={() => handleSelect("building muscle")}/>
            <Button text={"I'd like to build muscle while I lose fat"}  onClick={() => handleSelect("recomposition")}/>
        </div>


    </div>
    )
}
export default MainFocus