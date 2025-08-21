import { useUser } from "../../context/UserContext";
import Button from "../../components/button/button"
import usePageNavigation from "../../hooks/usePageNavigation";
import { useFormValidation } from "../../context/FormValidationContext";


const BuiltWithScience =()=>{
    const {userData,setUserData} = useUser();
    const { page, next, prev } = usePageNavigation(); 
    const { setPageValid } = useFormValidation();

    const handleSelect = (perception) => {
        setUserData((prev) => ({
            ...prev,
            science_view: perception
        }));
        setPageValid(13, true);
        next();
        console.log("Science?", perception);
    };
    return(
    <div>
        <p style={{fontWeight:"600",fontSize:"20px"}}>
            Built With Science uses the latest in science to help you get results fast.How familiar are you with the latest research in fitness and nutrition ?
        </p>

        <div style={{paddingTop:"20px",width:"100%"}}>
            <Button className={userData.science_view === "Very familiar, I stay on top of the latest research and have a lot of experience with analyzing studies" ? "selected" : ""} 
                    text={"Very familiar, I stay on top of the latest research and have a lot of experience with analyzing studies"}  
                    onClick={() => handleSelect("Very familiar, I stay on top of the latest research and have a lot of experience with analyzing studies")}/>

            <Button className={userData.science_view === "I'm familiar with a lot of the research but I have a hard time putting it all together into a plan specific to me" ? "selected" : ""} 
                    text={"I'm familiar with a lot of the research but I have a hard time putting it all together into a plan specific to me"}  
                    onClick={() => handleSelect("I'm familiar with a lot of the research but I have a hard time putting it all together into a plan specific to me")}/>

            <Button className={userData.science_view === "I try to gather science-based fitness information online but it's hard to know who I can trust" ? "selected" : ""} 
                    text={"I try to gather science-based fitness information online but it's hard to know who I can trust"}  
                    onClick={() => handleSelect("I try to gather science-based fitness information online but it's hard to know who I can trust")}/>

            <Button className={userData.science_view === "Not at all, I think I've been following a lot of 'bro-science'" ? "selected" : ""} 
                    text={"Not at all, I think I've been following a lot of 'bro-science'"}  
                    onClick={() => handleSelect("Not at all, I think I've been following a lot of 'bro-science'")}/>
        </div>


    </div>
    )
}
export default BuiltWithScience