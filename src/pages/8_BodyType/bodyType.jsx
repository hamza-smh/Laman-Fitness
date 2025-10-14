import "./style.css"
import { useState } from "react";
import { useUser } from "../../context/UserContext";
import { currentBodyMale, currentBodyFemale } from "./currentBody"
import Card from "../../components/card/card"
import usePageNavigation from "../../hooks/usePageNavigation";
import { useFormValidation } from "../../context/FormValidationContext";

const BodyType = () => {
    const [selectedId, setSelectedId] = useState(null);
    const { setUserData, userData } = useUser();
    const [gender, setGender] = useState(userData.gender)
    const { setPageValid } = useFormValidation();

    const { next } = usePageNavigation();
    const handleCardClick = (id) => {
        setSelectedId(id);
        console.log("sad",selectedId)
        setUserData((prev) => ({
            ...prev,
            currentBodyType: id,
        }));
        setPageValid(8, true);
        next();
    };
    return (
        <div>
            <p style={{ fontWeight: "600", fontSize: "18px" }}>
                Which image best reflects your current body type ?
            </p>
            <p style={{ fontWeight: "400", color: "#90a5c2", fontSize: "16px", fontStyle: "italic" }}>
                This will help me determine the right approach
                for your body
            </p>
            <div style={
                {
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "16px",
                    marginTop: "20px"
                }
            } >

                <div className="card-grid">
                    {gender === "Male" ?
                        currentBodyMale.map((type) => (
                            <Card
                                key={type.id}
                                id={type.id}
                                img={type.img}
                                text={type.text}
                                info={type.info}
                                position={type.position}
                                isSelected={userData.currentBodyType === type.id}
                                onSelect={handleCardClick}
                            />
                        ))
                        :
                        currentBodyFemale.map((type) => (
                            <Card
                                key={type.id}
                                id={type.id}
                                img={type.img}
                                text={type.text}
                                info={type.info}
                                isSelected={userData.currentBodyType === type.id}
                                onSelect={handleCardClick}
                            />
                        ))
                    }
                </div>

            </div>

        </div>
    )
}
export default BodyType