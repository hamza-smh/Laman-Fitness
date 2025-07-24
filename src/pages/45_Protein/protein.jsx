import { useUser } from "../../context/UserContext";
import Button from "../../components/button/button"
import usePageNavigation from "../../hooks/usePageNavigation";

const Protein =()=>{
    const {userData,setUserData} = useUser();
    const { page, next, prev } = usePageNavigation(); 

    const handleSelect = (protein) => {
        setUserData((prev) => ({
            ...prev,
            protein: protein
        }));
        next();
        console.log("Selected main focus:", protein);
    };
    return(
    <div>
        <p style={{fontWeight:"600",fontSize:"20px"}}>
           To build muscle and keep your metabolism high as you lose weight, it's important you eat enough protein.<br />
            We estimate you should eat at least <span style={{fontSize:"21px",backgroundColor:"#2FEC2F",padding:"3px",borderRadius:"5px",fontWeight:"700"}}>139 grams of protein</span> per day.
            <br />How close are you to this ?
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
export default Protein