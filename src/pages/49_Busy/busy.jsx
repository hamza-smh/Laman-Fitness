import { useUser } from "../../context/UserContext";
import Button from "../../components/button/button"
import usePageNavigation from "../../hooks/usePageNavigation";

const Busy =()=>{
    const {userData,setUserData} = useUser();
    const { page, next, prev } = usePageNavigation(); 

    const handleSelect = (busy) => {
        setUserData((prev) => ({
            ...prev,
            busy: busy
        }));
        next();
        console.log("Selected main focus:", busy);
    };
    return(
    <div>
        <p style={{fontWeight:"600",fontSize:"20px"}}>
           How busy are you on an typical day ?
        </p>

        <div style={{paddingTop:"20px",width:"100%"}}>
            <Button text={"I barely have any time for myself"}  onClick={() => handleSelect("no time")}/>
            <Button text={"I'm fairly busy, but I try to find time to unwind and relax "}  onClick={() => handleSelect("fairly busy")}/>
            <Button text={"I'm not too busy and keep time open for different things"}  onClick={() => handleSelect("not too busy")}/>
            <Button text={"My schedule is very open and flexible"}  onClick={() => handleSelect("not at all")}/>
        </div>


    </div>
    )
}
export default Busy