import { useEffect } from "react";
import { useUser } from "../../context/UserContext";
import SelectButton from "../../components/selectButton/selectButton";
import usePageNavigation from "../../hooks/usePageNavigation";
import { useState } from "react";
import { useFormValidation } from "../../context/FormValidationContext";
const NutritionHabits = () => {
  const { userData,setUserData } = useUser();
  const { next } = usePageNavigation();
  const { setPageValid } = useFormValidation();
  const [habits, setSelectedAreas] = useState([]);

  const areaOptions = [
    "I cook most/all of my meals at home",
    "I eat out several times a week",
    "I live with family so I'm not in charge of meal prep",
    "I eat well during weekdays, but I struggle during weekends",
    "I eat well during the day, but I struggle with late night snacking",
  ];

  const handleToggleArea = (area) => {
    if (habits.includes("none")) {
      setSelectedAreas([area]);
    } else if (habits.includes(area)) {
      setSelectedAreas(habits.filter((a) => a !== area));
    } else {
      if (habits.length < 5) {
        setSelectedAreas([...habits, area]);
      }
    }
  };

  const handleSelectAll = () => {
    setSelectedAreas(["none"]);
  };


   useEffect(() => {

       if (habits.length > 0) {
           setUserData(prev => ({
               ...prev,
               nutrition_habits: habits
           }));
           setPageValid(30, true);
       }
   }, [habits]);


  return (
    <div>
      <p style={{ fontWeight: "600", fontSize: "18px" }}>
        What best describes your nutrition habits during the week ?
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
            selected={habits.includes(area)}
          />
        ))}

      </div>

    </div>
  );
};

export default NutritionHabits;
