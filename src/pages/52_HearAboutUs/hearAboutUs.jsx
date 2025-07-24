import { useUser } from "../../context/UserContext";
import Button from "../../components/button/button"
import usePageNavigation from "../../hooks/usePageNavigation";

const HearAboutUs =()=>{
    const {userData,setUserData} = useUser();
    const { page, next, prev } = usePageNavigation(); 

    const handleSelect = (source) => {
        setUserData((prev) => ({
            ...prev,
            heard_about_us: source
        }));
        next();
        console.log(" How did you hear about Jeremy", source);
    };
    return(
    <div>
        <p style={{fontWeight:"600",fontSize:"20px"}}>
           How did you hear about Built With Science ?
        </p>

        <div style={{paddingTop:"20px",width:"100%"}}>
            <Button text={"Youtube"}  onClick={() => handleSelect("Youtube")}/>
            <Button text={"Article/Blog"}  onClick={() => handleSelect("Article/Blog")}/>
            <Button text={"Facebook/Instagram"}  onClick={() => handleSelect("Facebook/Instagram")}/>
            <Button text={"Friends/Family"}  onClick={() => handleSelect("Friends/Family")}/>
            <Button text={"Others"}  onClick={() => handleSelect("other")}/>
        </div>


    </div>
    )
}
export default HearAboutUs