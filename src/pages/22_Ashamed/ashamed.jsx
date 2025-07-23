import { useUser } from "../../context/UserContext";
import Button from "../../components/button/button"
import usePageNavigation from "../../hooks/usePageNavigation";

const Ashamed =()=>{
    const {userData,setUserData} = useUser();
    const { page, next, prev } = usePageNavigation(); 

    const handleSelect = (ashamed) => {
        setUserData((prev) => ({
            ...prev,
            ashamed: ashamed
        }));
        next();
        console.log("Insecure? :", ashamed); 
    };
    return(
    <div>
        <p style={{fontWeight:"600",fontSize:"18px"}}>
            Do you ever feel insecure or ashamed of your body around friends and family or in public settings ?
        </p>

        <div style={{paddingTop:"20px",width:"100%"}}>
            <Button text={"Yes"}  onClick={() => handleSelect("Yes")}/>
            <Button text={"Sometimes"}  onClick={() => handleSelect("Sometimes")}/>
            <Button text={"No"}  onClick={() => handleSelect("No")}/>
        </div>


    </div>
    )
}
export default Ashamed