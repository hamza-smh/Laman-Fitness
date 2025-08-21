import { useEffect } from "react";
import { useUser } from "../../context/UserContext";
import SelectButton from "../../components/selectButton/selectButton";
import usePageNavigation from "../../hooks/usePageNavigation";
import { useState } from "react";
import { useFormValidation } from "../../context/FormValidationContext";
const DietaryRestrictions = () => {
  const { userData,setUserData } = useUser();
  const { next } = usePageNavigation();
  const { setPageValid } = useFormValidation();
  const [allergies, setSelectedAreas] = useState([]);

  const areaOptions = [
    "Vegan",
    "Vegetarian",
    "Gluten Free",
    "Dairy Free",
  ];

  const handleToggleArea = (area) => {
    if (allergies.includes("none")) {
      setSelectedAreas([area]);
    } else if (allergies.includes(area)) {
      setSelectedAreas(allergies.filter((a) => a !== area));
    } else {
      if (allergies.length < 5) {
        setSelectedAreas([...allergies, area]);
      }
    }
  };

  const handleSelectAll = () => {
    setSelectedAreas(["none"]);
  };

  const handleNext = () => {
    if (allergies.length === 0) {
      alert("Please select at least one option.");
      return;
    }

    setUserData((prev) => ({
      ...prev,
      dietary_restrictions:allergies
    }));
    next();
  };

   useEffect(() => {

       if (allergies.length > 0) {
           setUserData(prev => ({
               ...prev,
               dietary_restriction:allergies
           }));
           setPageValid(31, true);
       }
   }, [allergies]);


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
            selected={allergies.includes(area)}
          />
        ))}

        <SelectButton
          text={"None"}
          onClick={handleSelectAll}
          selected={allergies.includes("none")}
        />
      </div>

    </div>
  );
};

export default DietaryRestrictions;
