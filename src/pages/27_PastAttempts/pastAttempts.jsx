import { useEffect } from "react";
import { useUser } from "../../context/UserContext";
import SelectButton from "../../components/selectButton/selectButton";
import usePageNavigation from "../../hooks/usePageNavigation";
import { useState } from "react";
import { useFormValidation } from "../../context/FormValidationContext";

const PastAttempts = () => {
  const { userData,setUserData } = useUser();
  const { next } = usePageNavigation();
  const { setPageValid } = useFormValidation();
  const [attempts, setAttempts] = useState([]);

  const attemptTypes = [
    "Paid For an online Fitness Program",
    "Created a program myself using free information online",
    "Personal Trainer",
    "Calorie Counting",
    "Paid Meal Plans",
    "Keto",
    "Intermittent Fasting"
  ];

  const handleToggleArea = (area) => {
    if (attempts.includes("none")) {
      setAttempts([area]);
    } else if (attempts.includes(area)) {
      setAttempts(attempts.filter((a) => a !== area));
    } else {
      if (attempts.length < 8) {
        setAttempts([...attempts, area]);
      }
    }
  };

  const handleSelectNone = () => {
    setAttempts(["none"]);
  };

  const handleNext = () => {
    if (attempts.length === 0) {
      alert("Please select at least one area or select none");
      return;
    }
    setUserData((prev) => ({
      ...prev,
      past_attempts: attempts
    }));
    next();
  };

   useEffect(() => {
       if (attempts.length > 0) {
           setUserData(prev => ({
               ...prev,
               past_attempts: attempts
           }));
          setPageValid(10, true);
       }
   }, [attempts]);


  return (
    <div>
      <p style={{ fontWeight: "600", fontSize: "18px" }}>
        Have you attempted any of the following in the past to gain muscle ?
      </p>
      <p style={{ fontWeight: "400", color: "#90a5c2", fontSize: "16px", fontStyle: "italic" }}>
        Select all that apply
      </p>

      <div style={{ paddingTop: "20px", width: "100%", display: "flex",flexDirection:"column", flexWrap: "wrap", gap: "10px" }}>
        {attemptTypes.map((area, index) => (
          <SelectButton
            key={index}
            text={area}
            onClick={() => handleToggleArea(area)}
            className = {userData.past_attempts === area ? "selected" : ""}
            selected={userData.past_attempts?.includes(area)}
          />
        ))}

        <SelectButton
          text={"None"}
          onClick={handleSelectNone}
          selected={attempts.includes("all")}
        />
      </div>

    </div>
  );
};

export default PastAttempts;
