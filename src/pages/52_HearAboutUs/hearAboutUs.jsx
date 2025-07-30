import { useUser } from "../../context/UserContext";
import Button from "../../components/button/button"
import usePageNavigation from "../../hooks/usePageNavigation";
import { useFormValidation } from "../../context/FormValidationContext";

const HearAboutUs =()=>{
    const {userData,setUserData} = useUser();
    const { page, next, prev } = usePageNavigation();
    const { setPageValid } = useFormValidation();
 
    

    const handleSelect = (source) => {
        setUserData((prev) => ({
            ...prev,
            heard_about_us: source
        }));
        setPageValid(52, true);
        next();
        console.log(" How did you hear about Jeremy", source);
    };
    return(
    <div>
        <p style={{fontWeight:"600",fontSize:"20px"}}>
           How did you hear about Built With Science ?
        </p>

        <div style={{paddingTop:"20px",width:"100%"}}>
            <Button className={userData. heard_about_us === "Youtube" ? "selected" : ""} text={"Youtube"}  onClick={() => handleSelect("Youtube")}/>
            <Button className={userData. heard_about_us === "Article/Blog" ? "selected" : ""} text={"Article/Blog"}  onClick={() => handleSelect("Article/Blog")}/>
            <Button className={userData. heard_about_us === "Facebook/Instagram" ? "selected" : ""} text={"Facebook/Instagram"}  onClick={() => handleSelect("Facebook/Instagram")}/>
            <Button className={userData. heard_about_us === "Friends/Family" ? "selected" : ""} text={"Friends/Family"}  onClick={() => handleSelect("Friends/Family")}/>
            <Button className={userData. heard_about_us === "other" ? "selected" : ""} text={"Others"}  onClick={() => handleSelect("other")}/>
        </div>


    </div>
    )
}
export default HearAboutUs