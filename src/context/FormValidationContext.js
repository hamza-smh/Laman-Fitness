// // context/FormValidationContext.js
// import { createContext, useContext, useState } from "react";

// const FormValidationContext = createContext();

// export const FormValidationProvider = ({ children }) => {
//   const [validationStatus, setValidationStatus] = useState({}); // { 1: true, 2: false }

//   const setPageValid = (pageNumber, isValid) => {
//     setValidationStatus((prev) => ({
//       ...prev,
//       [pageNumber]: isValid,
//     }));
//   };

//   return (
//     <FormValidationContext.Provider
//       value={{ validationStatus, setPageValid }}
//     >
//       {children}
//     </FormValidationContext.Provider>
//   );
// };

// export const useFormValidation = () => useContext(FormValidationContext);

import { createContext, useContext, useEffect, useState } from "react";

const FormValidationContext = createContext();

const LOCAL_STORAGE_KEY = "formValidationStatus";

export const FormValidationProvider = ({ children }) => {
  const [validationStatus, setValidationStatus] = useState(() => {
    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
      return stored ? JSON.parse(stored) : {};
    } catch (err) {
      console.error("Failed to parse validation status from localStorage", err);
      return {};
    }
  });

  const setPageValid = (pageNumber, isValid) => {
    setValidationStatus((prev) => {
      const updated = { ...prev, [pageNumber]: isValid };
      try {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
      } catch (err) {
        console.error("Failed to save validation status to localStorage", err);
      }
      return updated;
    });
  };
  const resetValidationStatus = () => {
    for (let i = 1; i <= 54; i++) { 
      setPageValid(i,false);
    }
  };


  // Optional: Sync state with localStorage on app load
  useEffect(() => {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setValidationStatus(parsed);
      } catch (err) {
        console.error("Invalid validation status in localStorage", err);
      }
    }
  }, []);

  return (
    <FormValidationContext.Provider value = {{validationStatus,setPageValid,resetValidationStatus}}>
      {children}
    </FormValidationContext.Provider>
  );
};

export const useFormValidation = () => useContext(FormValidationContext);
