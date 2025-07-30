import { useUser } from "../../context/UserContext";
import Button from "../../components/button/button"
import usePageNavigation from "../../hooks/usePageNavigation";
import { useFormValidation } from "../../context/FormValidationContext";

const FollowJeremy =()=>{
    const {userData,setUserData} = useUser();
    const { page, next, prev } = usePageNavigation(); 
    const { setPageValid } = useFormValidation();

    const handleSelect = (FollowJeremyDuration) => {
        setUserData((prev) => ({
            ...prev,
            following_Jeremy_for: FollowJeremyDuration
        }));
        setPageValid(51, true);
        next();
        console.log(" Do you Follow Jeremy", FollowJeremyDuration);
    };
    return(
    <div>
        <p style={{fontWeight:"600",fontSize:"20px"}}>
           How long have you been following Jeremy or Built With Science ?
        </p>

        <div style={{paddingTop:"20px",width:"100%"}}>
            <Button className={userData.following_Jeremy_for === "never" ? "selected" : ""} text={"Never"}  onClick={() => handleSelect("never")}/>
            <Button className={userData.following_Jeremy_for === "just now" ? "selected" : ""} text={"Just discovered us"}  onClick={() => handleSelect("just now")}/>
            <Button className={userData.following_Jeremy_for === "6 months" ? "selected" : ""} text={"Less than 6 months"}  onClick={() => handleSelect("6 months")}/>
            <Button className={userData.following_Jeremy_for === "6 months to 1 year" ? "selected" : ""} text={"6 months to 1 year"}  onClick={() => handleSelect("6 months to 1 year")}/>
            <Button className={userData.following_Jeremy_for === "1 to 2 years" ? "selected" : ""} text={"1 to 2 years"}  onClick={() => handleSelect("1 to 2 years")}/>
            <Button className={userData.following_Jeremy_for === "2+ years" ? "selected" : ""} text={"2+ years"}  onClick={() => handleSelect("2+ years")}/>
        </div>


    </div>
    )
}
export default FollowJeremy