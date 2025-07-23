import { useState, useEffect } from "react";
import { useUser } from "../../context/UserContext";
import InputField from "../../components/inputField/inputField";
import usePageNavigation from "../../hooks/usePageNavigation";

const Email = () => {
  const { userData, setUserData } = useUser();
  const { next } = usePageNavigation();

  const [email, setEmail] = useState(userData.email || "");
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    // Basic email regex
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleChange = (e) => {
    const val = e.target.value;
    setEmail(val);

    if (!val.trim()) {
      setError("Email is required");
    } else if (!validateEmail(val)) {
      setError("Please enter a valid email");
    } else {
      setError("");
    }
  };

  useEffect(() => {
    if (validateEmail(email)) {
      setUserData((prev) => ({
        ...prev,
        email,
      }));
    }
  }, [email]);

  return (
    <div>
      <p style={{ fontWeight: "600", fontSize: "18px" }}>
        {userData.name}, enter your email to see how long it will take to reach your weight loss goal
      </p>

      <div style={{ paddingTop: "30px" }}>
        <InputField type="text" value={email} handleChange={handleChange} place={"you@mail.com"}/>
        {error && <span className="error">{error}</span>}
      </div>

      <div style = {
        {
          padding: "10px 20px",
          backgroundColor: "#f5f5f5",
          position: "relative",
          width: "calc(100% + 68px)",
          marginLeft: "-34px", 
          marginTop: "30px",
          top:"33px",
          zIndex: 6,
          borderRadius: "0px 0px 6px 6px",
          boxShadow: "inset 0 6px 6px -6px rgba(0, 0, 0, 0.2)",
        }
      } >
        <p style={{fontSize:"14px",color:"#555555"}}>We 'll email you a copy of your results for convenient access.</p>
        <br />
        <p style = {{fontSize: "14px",color: "#555555"}}>
          By clicking "See My Results"
          below you acknowledge that you have read, understood, and accepted the 
          <b style={{ textDecoration: "underline"}}><a href="https://builtwithscience.com/terms-of-use/" style={{color:"#555555"}}>{" "}Terms of Use</a></b> and <b style={{ textDecoration: "underline"}}><a href="https://builtwithscience.com/privacy-policy/" style={{color:"#555555"}}>{" "}Privacy Policy.</a></b> You may receive emails from Built With Science and can unsubscribe at any time.
        </p>
      </div>
    </div>
  );
};

export default Email;
