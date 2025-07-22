import { useEffect } from "react";
import { useUser } from "../../context/UserContext";
import SelectButton from "../../components/selectButton/selectButton";
import usePageNavigation from "../../hooks/usePageNavigation";
import { useState } from "react";

const DifficultAreas = () => {
  const { setUserData } = useUser();
  const { next } = usePageNavigation();

  const [selectedAreas, setSelectedAreas] = useState([]);

  const areaOptions = [
    "Belly",
    "Love Handles",
    "Chest",
    "Lower Back",
    "Legs",
    "Arms",
    "Hips"
  ];

  const handleToggleArea = (area) => {
    if (selectedAreas.includes("all")) {
      setSelectedAreas([area]);
    } else if (selectedAreas.includes(area)) {
      setSelectedAreas(selectedAreas.filter((a) => a !== area));
    } else {
      if (selectedAreas.length < 3) {
        setSelectedAreas([...selectedAreas, area]);
      }
    }
  };

  const handleSelectAll = () => {
    setSelectedAreas(["all"]);
  };

  const handleNext = () => {
    if (selectedAreas.length === 0) {
      alert("Please select at least one area.");
      return;
    }

    setUserData((prev) => ({
      ...prev,
      areas_to_target: selectedAreas
    }));
    next();
  };

   useEffect(() => {

       if (selectedAreas.length > 0) {
           setUserData(prev => ({
               ...prev,
               areas_to_target:selectedAreas
           }));
       }
   }, [selectedAreas]);


  return (
    <div>
      <p style={{ fontWeight: "600", fontSize: "18px" }}>
        As a woman, what area(s) of your body is the most difficult for you to lose fat from?
      </p>
      <p style={{ fontWeight: "400", color: "#90a5c2", fontSize: "16px", fontStyle: "italic" }}>
        Select up to 3 muscle groups
      </p>

      <div style={{ paddingTop: "20px", width: "100%", display: "flex",flexDirection:"column", flexWrap: "wrap", gap: "10px" }}>
        {areaOptions.map((area, index) => (
          <SelectButton
            key={index}
            text={area}
            onClick={() => handleToggleArea(area)}
            selected={selectedAreas.includes(area)}
          />
        ))}

        <SelectButton
          text={"They are all equally difficult"}
          onClick={handleSelectAll}
          selected={selectedAreas.includes("all")}
        />
      </div>

    </div>
  );
};

export default DifficultAreas;
