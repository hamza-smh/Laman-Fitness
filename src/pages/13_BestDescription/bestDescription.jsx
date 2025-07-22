import { useUser } from "../../context/UserContext";
import Button from "../../components/button/button"
import usePageNavigation from "../../hooks/usePageNavigation";

const BestDescription =()=>{
    const {userData,setUserData} = useUser();
    const { page, next, prev } = usePageNavigation(); 

    const handleSelect = (desc) => {
        setUserData((prev) => ({
            ...prev,
            bestDescription: desc
        }));
        next();
        console.log("Best Description", desc);
    };
    return(
    <div>
        <p style={{fontWeight:"600",fontSize:"18px"}}>
            Which best describes you ?
        </p>

        <div style={{paddingTop:"20px",width:"100%"}}>
            <Button text={"My diet and training needs a lot of work"}  onClick={() => handleSelect("amateur")}/>
            <Button text={"I have some healthy habits but I struggle with consistency"}  onClick={() => handleSelect("intermediate")}/>
            <Button text={"I mostly eat healthy and train regularly but the progress is slow"}  onClick={() => handleSelect("experienced")}/>
        </div>


    </div>
    )
}
export default BestDescription