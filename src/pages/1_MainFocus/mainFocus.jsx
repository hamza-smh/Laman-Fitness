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
        <p className="heading">
            What is your main fitness goal ?
        </p>
        <div className="btnHolder">
            <Button
              text = "Losing Weight"
              onClick={() => handleSelect("losing weight")}
              className={userData.mainFocus === "losing weight" ? "selected" : ""}
            />

            <Button
              text = "Building Muscle"
              onClick={() => handleSelect("building muscle")}
              className={userData.mainFocus === "building muscle" ? "selected" : ""}
            />

            <Button
              text = "Building Muscle While Losing Fat"
              onClick={() => handleSelect("build muscle + losing weight")}
              className={userData.mainFocus === "build muscle + losing weight" ? "selected" : ""}
            />
            <Button
              text = "Feeling Better in My Body"
              onClick = {() => handleSelect("Feeling Better in My Body")}
              className = {userData.mainFocus === "Feeling Better in My Body" ? "selected" : ""}
            />
        </div>
    </div>
    )
}
export default MainFocus