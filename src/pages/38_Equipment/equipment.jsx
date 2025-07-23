import { useUser } from "../../context/UserContext";
import Button from "../../components/button/button"
import usePageNavigation from "../../hooks/usePageNavigation";

const Equipment =()=>{
    const {userData,setUserData} = useUser();
    const { page, next, prev } = usePageNavigation(); 

    const handleSelect = (obj) => {
        setUserData((prev) => ({
            ...prev,
            equipment: obj
        }));
        next();
        console.log("Excercise Equipemnt:", obj);
    };
    return(
    <div>
        <p style={{fontWeight:"600",fontSize:"20px"}}>
            What equipment do you have access to ?
        </p>

        <div style={{paddingTop:"20px",width:"100%"}}>
            <Button text={"I have access to full commercial gym"}  onClick={() => handleSelect("commercial gym")}/>
            <Button text={"I have a full home gym"}  onClick={() => handleSelect("home gym")}/>
            <Button text={"I have dumbbells and resistance bands"}  onClick={() => handleSelect("dumbbells and resistance bands")}/>
            <Button text={"I only have acces to bodyweight"}  onClick={() => handleSelect("bodyweight")}/>
        </div>


    </div>
    )
}
export default Equipment