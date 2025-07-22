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
    idealWeight:null
  });

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
