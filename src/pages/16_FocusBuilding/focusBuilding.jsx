import { useEffect } from "react";
import { useState } from "react";
import { useUser } from "../../context/UserContext";
import SelectButton from "../../components/selectButton/selectButton";
import usePageNavigation from "../../hooks/usePageNavigation";
import { useFormValidation } from "../../context/FormValidationContext";

const FocusBuilding = () => {
  const { userData,setUserData } = useUser();
  const { next } = usePageNavigation();
  const { setPageValid } = useFormValidation();
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
           setPageValid(16, true);
       }
   }, [selectedAreas]);


  return (
    <div>
      <p className="heading">
        What muscle group do you want to focus on building the most ?
      </p>
      <p style={{ fontWeight: "400", color: "#90a5c2", fontSize: "16px", fontStyle: "italic" }}>
        This helps me create a program that targets your specific goals
      </p>

      <div style={{ paddingTop: "20px", width: "100%", display: "flex",flexDirection:"column", flexWrap: "wrap", gap: "10px" }}>
        {areaOptions.map((area, index) => (
          <SelectButton
            key={index}
            text={area}
            onClick={() => handleToggleArea(area)}
            selected={userData.focus_building?.includes(area)}
          />
        ))}

        <SelectButton
          text={"I want to grow everything equally"}
          onClick={handleSelectAll}
          selected={userData.focus_building?.includes("all")}
        />
      </div>

    </div>
  );
};

export default FocusBuilding;
