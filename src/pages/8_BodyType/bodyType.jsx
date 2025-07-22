import "./style.css"
import { useState } from "react";
import { useUser } from "../../context/UserContext";
import { currentBodyMale, currentBodyFemale } from "./currentBody"
import Card from "../../components/card/card"
import usePageNavigation from "../../hooks/usePageNavigation";


const BodyType = () => {
    const [selectedId, setSelectedId] = useState(null);
    const { setUserData, userData } = useUser();
    const [gender, setGender] = useState(userData.gender)
    const { next } = usePageNavigation();
    const handleCardClick = (id) => {
        setSelectedId(id);
        setUserData((prev) => ({
            ...prev,
            currentBodyType: id,
        }));
        next();
    };
    return (
        <div>
            <p style={{ fontWeight: "600", fontSize: "18px" }}>
                How would you describe your body type ?
            </p>
            <p style={{ fontWeight: "400", color: "#90a5c2", fontSize: "16px", fontStyle: "italic" }}>
                This will help us determine the right approach
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
                                isSelected={selectedId === type.id}
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
                                isSelected={selectedId === type.id}
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