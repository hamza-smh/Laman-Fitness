import Button from "../../components/Button/button"
import { useUser } from "../../context/UserContext";
const Gender = ()=>{
     const { setUserData, userData } = useUser();
     const handleSelect = (gender) => {
    setUserData((prev) => ({ ...prev, gender }));
    console.log("Selected gender:", gender); // optional
  };
    return(
        <div>
        <p style={{fontWeight:"600",fontSize:"18px"}}>
            What gender do you identify with ?
        </p>
        <p style={{fontWeight:"400",color:"#90a5c2",fontSize:"16px",fontStyle:"italic"}}>
                How you should train and eat will vary slightly based on your gender.
        </p>

        <div style={{paddingTop:"20px",width:"100%"}}>
            <Button text="Male" onClick={() => handleSelect("Male")} />
            <Button text="Female" onClick={() => handleSelect("Female")} />
        </div>


    </div>
    )
}
export default Gender