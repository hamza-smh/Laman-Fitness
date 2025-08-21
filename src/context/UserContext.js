import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

const LOCAL_STORAGE_KEY = "userData";

export const UserProvider = ({ children }) => {
  const getInitialData = () => {
    try {
      const data = localStorage.getItem(LOCAL_STORAGE_KEY);
      return data ? JSON.parse(data) : {
        // mainFocus: null,
         gender: null,
        // age: null,
        // height: null,
        // weight: null,
         name: null,
        // currentBodyType: null,
        // bodyFat: null,
        // overweight:null,
        // muscleGain:null,
        // idealWeight: null,
        // bestDescription: null,
        // consistency_issue:null,
        // areas_to_target: null,
        // focus_building: null,
        // gym_experience: null,
         email: null,
        // trying_since: null,
        reason_to_join:null,
        ashamed: null, 
        lastVisitedPage: null,
        dissatisfied:null,
        consistent:null,
        diet:null,
        past_attempts:null,
        workout_tracking_app: null,
        science_view:null,
        active:null,
        excercise_freq:null,
        workout_time:null,
        equipment:null,
        past_injuries:null,
        calories: null,
        protien: null,
        nutrition_habits:null,
        dietary_restrictions:null,
        busy:null,
        support:null,
        following_Jeremy_for:null,
        heard_about_us:null,
        priority:null,

      };
    } catch (err) {
      console.error("Failed to parse userData from localStorage", err);
      return {};
    }
  };

  const [userData, setUserData] = useState(getInitialData);

  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(userData));
    } catch (err) {
      console.error("Failed to save userData to localStorage", err);
    }
  }, [userData]);

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);



//when deleting data
//localStorage.removeItem("userData");
