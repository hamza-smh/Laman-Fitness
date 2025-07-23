import { useUser } from "../../context/UserContext";
import Button from "../../components/button/button"
import usePageNavigation from "../../hooks/usePageNavigation";

const BuiltWithScience =()=>{
    const {userData,setUserData} = useUser();
    const { page, next, prev } = usePageNavigation(); 

    const handleSelect = (perception) => {
        setUserData((prev) => ({
            ...prev,
            science_view: perception
        }));
        next();
        console.log("Science?", perception);
    };
    return(
    <div>
        <p style={{fontWeight:"600",fontSize:"20px"}}>
            Built With Science uses the latest in science to help you get results fast.How familiar are you with the latest research in fitness and nutrition ?
        </p>

        <div style={{paddingTop:"20px",width:"100%"}}>
            <Button text={"Very familiar, I stay on top of the latest research and have a lot of experience with analyzing studies"}  onClick={() => handleSelect("Very familiar, I stay on top of the latest research and have a lot of experience with analyzing studies")}/>
            <Button text={"I'm familiar with a lot of the research but I have a hard time putting it all together into a plan specific to me"}  onClick={() => handleSelect("I'm familiar with a lot of the research but I have a hard time putting it all together into a plan specific to me")}/>
            <Button text={"I try to gather science-based fitness information online but it's hard to know who I can trust"}  onClick={() => handleSelect("I try to gather science-based fitness information online but it's hard to know who I can trust")}/>
            <Button text={"Not at all, I think I've been following a lot of 'bro-science'"}  onClick={() => handleSelect("Not at all, I think I've been following a lot of 'bro-science'")}/>
        </div>


    </div>
    )
}
export default BuiltWithScience