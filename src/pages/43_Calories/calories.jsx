import { useUser } from "../../context/UserContext";
import Button from "../../components/button/button"
import usePageNavigation from "../../hooks/usePageNavigation";
import { useFormValidation } from "../../context/FormValidationContext";
const Calories =()=>{
    const {userData,setUserData} = useUser();
    const { page, next, prev } = usePageNavigation(); 
    const { setPageValid } = useFormValidation();
    const handleSelect = (calorie) => {
        setUserData((prev) => ({
            ...prev,
            calories: calorie
        }));
        setPageValid(26, true); 
        next();
        console.log("calorie intake:", calorie);
    };
    return(
    <div>
            {
                // userData.mainFocus === "losing weight"?
                // <p style = {{fontWeight: "600",fontSize: "21px"}}>
                //     To lose weight, you need to eat less calories than you 're burning every day.
                //     <br />
                //     We estimate you should eat around 
                //     <span style={{backgroundColor:"#2FEC2F",padding:"3px",borderRadius:"5px",fontWeight:"700"}}>
                //         1900 to 2000 calories
                //     </span> 
                //     per day.
                // </p>
                // :
           //     userData.mainFocus === "build muscle + losing weight" ?
                <p style = {{fontWeight: "600",fontSize: "21px"}}>
                   To build muscle and lose fat, you need to eat slightly less calories than you 're burning every day.                   
                    <br />
                    We estimate you should eat around {" "}
                    <span style={{backgroundColor:"#2FEC2F",padding:"3px",borderRadius:"5px",fontWeight:"700"}}>
                        2600 to 2700 calories
                    </span> 
                    {" "}per day.
                </p>
                // :
                // userData.mainFocus === "building muscle" ?
                // <p style = {{fontWeight: "600",fontSize: "21px"}}>
                //    To build muscle and lose fat, you need to eat slightly less calories than you 're burning every day.                   
                //     <br />
                //     We estimate you should eat around {" "}
                //     <span style={{backgroundColor:"#2FEC2F",padding:"3px",borderRadius:"5px",fontWeight:"700"}}>
                //         2600 to 2700 calories
                //     </span> 
                //     {" "}per day.
                // </p>:""
            }
            
            <br />
            <p style = {{fontWeight: "600",fontSize: "21px"}}>
                How close are you to this ?
            </p>

        <div style={{paddingTop:"20px",width:"100%"}}>
            <Button className={userData.calories === "no idea" ? "selected" : ""} text={"I have no idea, I've never kept track"}  onClick={() => handleSelect("no idea")}/>
            <Button className={userData.calories === "eating more" ? "selected" : ""} text={"I'm definitely eating more than that"}  onClick={() => handleSelect("eating more")}/>
            <Button className={userData.calories === "eating less" ? "selected" : ""} text={"I'm definitely eating less than that"}  onClick={() => handleSelect("eating less")}/>
            <Button className={userData.calories === "pretty close" ? "selected" : ""} text={"I'm pretty close to that target everyday"}  onClick={() => handleSelect("pretty close")}/>
        </div>


    </div>
    )
}
export default Calories