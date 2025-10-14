import Button from "../../components/button/button"
import { useUser } from "../../context/UserContext";
import usePageNavigation from "../../hooks/usePageNavigation";
import { useFormValidation } from "../../context/FormValidationContext";

const Age = ()=>{
     const { setUserData, userData } = useUser();
     const {  next } = usePageNavigation(); 
     const { setPageValid } = useFormValidation();

     const handleSelect = (age) => {
      setUserData((prev) => ({ ...prev, age }));
      setPageValid(3, true);
      next();
    };
    return(
        <div>
        <p className="heading">
            What’s your age range?
        </p>
        <p className="subheading">
            This helps factor in age-related changes in your metabolism.
        </p>

        <div style={{paddingTop:"20px",width:"100%"}}>
            <Button className={userData.age === "Teens" ? "selected" : ""} text="< 20" onClick={() => handleSelect("Teens")} />
            <Button className={userData.age === "Twenties" ? "selected" : ""} text="20 - 29" onClick={() => handleSelect("Twenties")} />
            <Button className={userData.age === "Thirties" ? "selected" : ""} text="30 - 39" onClick={() => handleSelect("Thirties")} />
            <Button className={userData.age === "Fourties" ? "selected" : ""} text="40 - 49" onClick={() => handleSelect("Fourties")} />
            <Button className={userData.age === "Over Fifty" ? "selected" : ""} text="50 +" onClick={() => handleSelect("Over Fifty")} />
        </div>


    </div>
    )
}
export default Age