import Button from "../../components/Button/button"

const MainFocus =()=>{
    return(
    <div>
        <p style={{fontWeight:"600",fontSize:"18px"}}>
            What is your main focus right now ?
        </p>

        <div style={{paddingTop:"20px",width:"100%"}}>
            <Button text={"I am only focused on losing weight"}/>
            <Button text={"Building muscle is more important than losing fat"}/>
            <Button text={"I'd like to build muscle while I lose fat"}/>
        </div>


    </div>
    )
}
export default MainFocus