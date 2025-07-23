import Button from "../../components/button/button"
import { useUser } from "../../context/UserContext";
import usePageNavigation from "../../hooks/usePageNavigation";

const Age = ()=>{
    
     const { setUserData, userData } = useUser();
     const {  next } = usePageNavigation(); 
     const handleSelect = (age) => {
    setUserData((prev) => ({ ...prev, age }));
    console.log("Selected age:", age); 
    next();
  };
    return(
        <div>
        <p style={{fontWeight:"600",fontSize:"18px"}}>
            What is your age ?
        </p>
        <p style={{fontWeight:"400",color:"#90a5c2",fontSize:"16px",fontStyle:"italic"}}>
                We 've helped thousands of men of all ages achieve their fitness goals. Metabolism tends to drop with age. But there's ways around that.
        </p>

        <div style={{paddingTop:"20px",width:"100%"}}>
            <Button text="Teens" onClick={() => handleSelect("Teens")} />
            <Button text="Twenties" onClick={() => handleSelect("Twenties")} />
            <Button text="Thirties" onClick={() => handleSelect("Thirties")} />
            <Button text="Fourties" onClick={() => handleSelect("Fourties")} />
            <Button text="Over Fifty" onClick={() => handleSelect("Over Fifty")} />
        </div>


    </div>
    )
}
export default Age