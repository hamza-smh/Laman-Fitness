import { useUser } from "../../context/UserContext";
import Button from "../../components/button/button"
import usePageNavigation from "../../hooks/usePageNavigation";
import { useFormValidation } from "../../context/FormValidationContext";

const MainFocus =()=>{
    const {userData,setUserData} = useUser();
    const { next } = usePageNavigation(); 
    const { setPageValid } = useFormValidation();

    const handleSelect = (focus) => {
        setUserData((prev) => ({
            ...prev,
            mainFocus: focus
        }));
        setPageValid(1, true); 
        next();
    };


    return(
    <div>
        <p style={{fontWeight:"600",fontSize:"18px"}}>
            What is your main focus right now ?
        </p>
        <div style={{paddingTop:"20px",width:"100%"}}>
            <Button
              text="I am only focused on losing weight"
              onClick={() => handleSelect("losing weight")}
              className={userData.mainFocus === "losing weight" ? "selected" : ""}
            />

            <Button
              text="Building muscle is more important than losing fat"
              onClick={() => handleSelect("building muscle")}
              className={userData.mainFocus === "building muscle" ? "selected" : ""}
            />

            <Button
              text="I'd like to build muscle while I lose fat"
              onClick={() => handleSelect("build muscle + losing weight")}
              className={userData.mainFocus === "build muscle + losing weight" ? "selected" : ""}
            />
        </div>
    </div>
    )
}
export default MainFocus