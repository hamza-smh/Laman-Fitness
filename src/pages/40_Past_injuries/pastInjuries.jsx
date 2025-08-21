import { useEffect } from "react";
import { useUser } from "../../context/UserContext";
import SelectButton from "../../components/selectButton/selectButton";
import usePageNavigation from "../../hooks/usePageNavigation";
import { useState } from "react";
import { useFormValidation } from "../../context/FormValidationContext";


const PastInjuries = () => {
  const { userData,setUserData } = useUser();
  const { next } = usePageNavigation();
  const { setPageValid } = useFormValidation();

  const [selectedAreas, setSelectedAreas] = useState([]);

  const areaOptions = [
    "Shoulder Injury",
    "Elbow Injury",
    "Lower Back Injury",
    "Lower Back",
    "Knee Injury",
  ];

  const handleToggleArea = (area) => {
    if (selectedAreas.includes("none")) {
      setSelectedAreas([area]);
    } else if (selectedAreas.includes(area)) {
      setSelectedAreas(selectedAreas.filter((a) => a !== area));
    } else {
      if (selectedAreas.length < 5) {
        setSelectedAreas([...selectedAreas, area]);
      }
    }
  };

  const handleSelectAll = () => {
    setSelectedAreas(["none"]);
  };

  const handleNext = () => {
    if (selectedAreas.length === 0) {
      alert("Please select at least one option.");
      return;
    }

    setUserData((prev) => ({
      ...prev,
      past_injuries: selectedAreas
    }));
    setPageValid(40, true);
    next();
  };

   useEffect(() => {

       if (selectedAreas.length > 0) {
           setUserData(prev => ({
               ...prev,
               past_injuries: selectedAreas
           }));
           setPageValid(23, true);
       }
   }, [selectedAreas]);


  return (
    <div>
      <p style={{ fontWeight: "600", fontSize: "18px" }}>
        Do you have any past injuries ?
      </p>
      <p style={{ fontWeight: "400", color: "#90a5c2", fontSize: "16px", fontStyle: "italic" }}>
        Select all that apply
      </p>

      <div style={{ paddingTop: "20px", width: "100%", display: "flex",flexDirection:"column", flexWrap: "wrap", gap: "10px" }}>
        {areaOptions.map((area, index) => (
          <SelectButton
            key={index}
            text={area}
            onClick={() => handleToggleArea(area)}
            // selected={selectedAreas.includes(area)}
            className = {userData.past_injuries === area ? "selected" : ""}
            selected={userData.past_injuries?.includes(area)}
          />
        ))}

        <SelectButton
          text={"None"}
          onClick={handleSelectAll}
          selected={selectedAreas.includes("none")}
        />
      </div>

    </div>
  );
};

export default PastInjuries;
