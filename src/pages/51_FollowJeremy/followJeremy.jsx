import { useUser } from "../../context/UserContext";
import Button from "../../components/button/button"
import usePageNavigation from "../../hooks/usePageNavigation";

const FollowJeremy =()=>{
    const {userData,setUserData} = useUser();
    const { page, next, prev } = usePageNavigation(); 

    const handleSelect = (FollowJeremyDuration) => {
        setUserData((prev) => ({
            ...prev,
            following_Jeremy_for: FollowJeremyDuration
        }));
        next();
        console.log(" Do you Follow Jeremy", FollowJeremyDuration);
    };
    return(
    <div>
        <p style={{fontWeight:"600",fontSize:"20px"}}>
           How long have you been following Jeremy or Built With Science ?
        </p>

        <div style={{paddingTop:"20px",width:"100%"}}>
            <Button text={"Never"}  onClick={() => handleSelect("never")}/>
            <Button text={"Just discovered us"}  onClick={() => handleSelect("just now")}/>
            <Button text={"Less than 6 months"}  onClick={() => handleSelect("6 months")}/>
            <Button text={"6 months to 1 year"}  onClick={() => handleSelect("6 months to 1 year")}/>
            <Button text={"1 to 2 years"}  onClick={() => handleSelect("1 to 2 years")}/>
            <Button text={"2+ years"}  onClick={() => handleSelect("2+ years")}/>
        </div>


    </div>
    )
}
export default FollowJeremy