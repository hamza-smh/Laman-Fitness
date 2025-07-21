import Button from "../../components/Button/button"
import { useUser } from "../../context/UserContext";
const Age = ()=>{
     const { setUserData, userData } = useUser();
     const handleSelect = (gender) => {
    setUserData((prev) => ({ ...prev, gender }));
    console.log("Selected gender:", gender); // optional
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
            <Button text="Male" onClick={() => handleSelect("Male")} />
            <Button text="Female" onClick={() => handleSelect("Female")} />
        </div>


    </div>
    )
}
export default Age