import { useUser } from "../../context/UserContext";
import Button from "../../components/button/button"
import usePageNavigation from "../../hooks/usePageNavigation";

const Calories =()=>{
    const {userData,setUserData} = useUser();
    const { page, next, prev } = usePageNavigation(); 

    const handleSelect = (calorie) => {
        setUserData((prev) => ({
            ...prev,
            calories: calorie
        }));
        next();
        console.log("calorie intake:", calorie);
    };
    return(
    <div>
        <p style={{fontWeight:"600",fontSize:"21px"}}>
            To lose weight, you need to eat less calories than you 're burning every day.<br />
            We estimate you should eat around <span style={{backgroundColor:"#2FEC2F",padding:"3px",borderRadius:"5px",fontWeight:"700"}}>1900 to 2000 calories</span> per day.
            <br />
            How close are you to this ?
        </p>

        <div style={{paddingTop:"20px",width:"100%"}}>
            <Button text={"I have no idea, I've never kept track"}  onClick={() => handleSelect("no idea")}/>
            <Button text={"I'm definitely eating more than that"}  onClick={() => handleSelect("eating more")}/>
            <Button text={"I'm definitely eating less than that"}  onClick={() => handleSelect("eating less")}/>
            <Button text={"I'm pretty close to that target everyday"}  onClick={() => handleSelect("pretty close")}/>
        </div>


    </div>
    )
}
export default Calories