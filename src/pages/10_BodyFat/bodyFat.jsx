import "./style.css"
import { useState } from "react";
import { useUser } from "../../context/UserContext";
import { bodyFatMale,bodyFatFemale } from "./bodyFatData";
import Card from "../../components/card/card"
import usePageNavigation from "../../hooks/usePageNavigation";
import { useFormValidation } from "../../context/FormValidationContext";

const BodyFat = () => {
    const [selectedId, setSelectedId] = useState(null);
    const { setUserData, userData } = useUser();
    const [gender, setGender] = useState(userData.gender)
    const { next } = usePageNavigation();
    const { setPageValid } = useFormValidation();

    const handleCardClick = (id) => {
        setSelectedId(id);
        setUserData((prev) => ({
            ...prev,
            bodyFat: id,
        }));
        setPageValid(10, true);
        next();
    };
    return (
        <div>
            <p style={{ fontWeight: "600", fontSize: "18px" }}>
                Which image best reflects your current body fat level ?
            </p>
            <p style={{ fontWeight: "400", color: "#90a5c2", fontSize: "16px", fontStyle: "italic" }}>
                Doesn’ t need to be exact; choose the closest fit.
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
                        bodyFatMale.map((type) => (
                            <Card
                                key={type.id}
                                id={type.id}
                                img={type.img}
                                text={type.text}
                                position={type.position}
                                isSelected={userData.bodyFat === type.id}
                                onSelect={handleCardClick}
                            />
                        ))
                        :
                        bodyFatFemale.map((type) => (
                            <Card
                                key={type.id}
                                id={type.id}
                                img={type.img}
                                text={type.text}
                                isSelected={userData.bodyFat === type.id}
                                onSelect={handleCardClick}
                            />
                        ))
                    }
                </div>

            </div>

        </div>
    )
}
export default BodyFat