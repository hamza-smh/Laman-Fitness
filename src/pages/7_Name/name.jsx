import { useState, useEffect } from "react";
import { useUser } from "../../context/UserContext";
import InputField from "../../components/inputField/inputField";
import usePageNavigation from "../../hooks/usePageNavigation";
import { useFormValidation } from "../../context/FormValidationContext";

const Name = () => {
  const { userData, setUserData } = useUser();
  const { next } = usePageNavigation();
  const { setPageValid } = useFormValidation();

  const [name, setName] = useState(userData.name || "");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
    if (e.target.value.trim()) {
      setError("");
    }
  };

  useEffect(() => {
    if (name.trim()) {
      setUserData((prev) => ({
        ...prev,
        name: name.trim(),
      }));
      setPageValid(1, true);
    }
  }, [name, setUserData]);

  useEffect(() => {
    const handleBeforeNext = () => {
      if (!name.trim()) {
        setError("Name is required");
        return false;
      }
      return true;
    };

    window.handleBeforeNext = handleBeforeNext;
  }, [name]);

  return (
    <div>
      <p style={{ fontWeight: "600", fontSize: "18px" }}>
        Enter your first name:
      </p>
     <div style={{paddingTop:"30px"}}>
        <InputField type="text" value={name} handleChange={handleChange} />
        {error && <span className="error">{error}</span>}
      </div>
    </div>
  );
};

export default Name;
