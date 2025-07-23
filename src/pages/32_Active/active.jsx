import { useUser } from "../../context/UserContext";
import Button from "../../components/button/button"
import usePageNavigation from "../../hooks/usePageNavigation";

const Active =()=>{
    const {userData,setUserData} = useUser();
    const { page, next, prev } = usePageNavigation(); 

    const handleSelect = (active) => {
        setUserData((prev) => ({
            ...prev,
            active: active
        }));
        next();
        console.log("Science?", active);
    };
    return(
    <div>
        <p style={{fontWeight:"600",fontSize:"20px"}}>
           How active are you throughout the day ?
        </p>

        <div style={{paddingTop:"20px",width:"100%"}}>
            <Button text={"I sit most of the day"}  onClick={() => handleSelect("I sit most of the day")}/>
            <Button text={"I have a fairly active job and I'm on my feet quite often"}  onClick={() => handleSelect("I have a fairly active job and I'm on my feet quite often")}/>
            <Button text={"I'm very active and I hardly ever sit still"}  onClick={() => handleSelect("I'm very active and I hardly ever sit still")}/>
            
        </div>


    </div>
    )
}
export default Active