import { useUser } from "../../context/UserContext";
import Button from "../../components/button/button"
import usePageNavigation from "../../hooks/usePageNavigation";

const Comfortable =()=>{
    const {userData,setUserData} = useUser();
    const { page, next, prev } = usePageNavigation(); 

    const handleSelect = (excercise) => {
        setUserData((prev) => ({
            ...prev,
            comfortable: excercise
        }));
        next();
        console.log("Comfortable with excercise?", excercise);
    };
    return(
    <div>
        <p style={{fontWeight:"600",fontSize:"20px"}}>
           How comfortable are you with the squat, bench, and deadlift ?
        </p>

        <div style={{paddingTop:"20px",width:"100%"}}>
            <Button text={"I've never done them"}  onClick={() => handleSelect("never")}/>
            <Button text={"I'm still learning proper form"}  onClick={() => handleSelect("learning")}/>
            <Button text={"I do them with regularly with good form"}  onClick={() => handleSelect("regular")}/>
            <Button text={"I can't do them because of past injuries"}  onClick={() => handleSelect("injuries")}/>        
        </div>


    </div>
    )
}
export default Comfortable