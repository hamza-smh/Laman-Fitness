import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    mainFocus: null,
    gender: null,
    age: null,
    height:null,
    weight:null,
    name:null,
    currentBodyType:null,
    bodyFat:null,
    idealWeight:null,
    bestDescription:null,
    areas_to_target:null,
    focus_building:null,
    gym_experience:null,
    email:null,

  });

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
