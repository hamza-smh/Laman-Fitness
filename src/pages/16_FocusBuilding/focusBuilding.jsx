import { useEffect } from "react";
import { useUser } from "../../context/UserContext";
import SelectButton from "../../components/selectButton/selectButton";
import usePageNavigation from "../../hooks/usePageNavigation";
import { useState } from "react";

const FocusBuilding = () => {
  const { setUserData } = useUser();
  const { next } = usePageNavigation();

  const [selectedAreas, setSelectedAreas] = useState([]);

  const areaOptions = [
    "Chest",
    "Back",
    "Arms",
    "Shoulders",
    "Legs",
    "Glutes",
    "Calves"
  ];

  const handleToggleArea = (area) => {
    if (selectedAreas.includes("all")) {
      setSelectedAreas([area]);
    } else if (selectedAreas.includes(area)) {
      setSelectedAreas(selectedAreas.filter((a) => a !== area));
    } else {
      if (selectedAreas.length < 2) {
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
      focus_building: selectedAreas
    }));
    next();
  };

   useEffect(() => {

       if (selectedAreas.length > 0) {
           setUserData(prev => ({
               ...prev,
               focus_building: selectedAreas
           }));
       }
   }, [selectedAreas]);


  return (
    <div>
      <p style={{ fontWeight: "600", fontSize: "18px" }}>
        What muscle group(s) do you want to focus on building the most ?
      </p>
      <p style={{ fontWeight: "400", color: "#90a5c2", fontSize: "16px", fontStyle: "italic" }}>
        Select up to 2 muscle groups
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
          text={"I want to grow everything equally"}
          onClick={handleSelectAll}
          selected={selectedAreas.includes("all")}
        />
      </div>

    </div>
  );
};

export default FocusBuilding;
