import "./targetWeight.css"
import { useState,useEffect } from 'react'
import { useUser } from '../../context/UserContext'
import Button from "../../components/button/button"
import usePageNavigation from '../../hooks/usePageNavigation'
import ToggleSwitch from '../../components/toggleSwitch/toggleSwitch'
import InputField from '../../components/inputField/inputField'
import { useFormValidation } from "../../context/FormValidationContext";

export const parseMuscleGainKg = (value) => {
    if (value === "As much as possible") {
        return 12;
    } else if (value === "I'm not sure, whatever is recommended") {
        return 8;
    } else {
        const match = parseFloat(value);
        return isNaN(match) ? 0 : match;
    }
};

const TargetWeight = () => {
    const { setUserData, userData } = useUser()
    const { next } = usePageNavigation()
    const { setPageValid } = useFormValidation();
    const [unit, setUnit] = useState('lbs');
    const [idealWeight, setIdealWeight] = useState({
        lbs: '',
        kg: '',
    })
    const [errors, setErrors] = useState({
        lbs: '',
        kg: '',
    });
   

   const handleWeightChange = (field) => (e) => {
       const value = e.target.value;
       let newErrors = {
           ...errors
       };

       if (field === 'lbs') {
           const lbs = parseFloat(value) || 0;

           // Validation
           if (lbs < 50 || lbs > 700) {
               newErrors.lbs = 'Weight in lbs must be between 50 and 700';
           } else {
               newErrors.lbs = '';
           }

           const kg = lbs * 0.453592;
           setIdealWeight({
               lbs: value,
               kg: kg.toFixed(1)
           });

       } else if (field === 'kg') {
           const kg = parseFloat(value) || 0;

           if (kg < 20 || kg > 300) {
               newErrors.kg = 'Weight in kg must be between 20 and 300';
           } else {
               newErrors.kg = '';
           }

           const lbs = kg / 0.453592;
           setIdealWeight({
               lbs: lbs.toFixed(1),
               kg: value
           });
       }
       setErrors(newErrors);
   };

   const handleSelect = (focus) => {
       setUserData((prev) => ({
           ...prev,
           muscleGain: focus
       }));
       next();
   };

    useEffect(() => {
        const lbs = parseFloat(idealWeight.lbs);
        const kg = parseFloat(idealWeight.kg);
        const isLbsValid = unit === "lbs" && !isNaN(lbs) && errors.lbs === '';
        const isKgValid = unit === "kg" && !isNaN(kg) && errors.kg === '';
        const gainKg = parseMuscleGainKg(userData.muscleGain);
        const totalKg = parseFloat(userData?.weight?.kg) + gainKg;
        const lbsValue = (totalKg * 2.20462).toFixed(1);

        console.log("rr", totalKg); 

        console.log("ss",gainKg)

        if (userData.muscleGain) {
            setUserData(prev => ({
                ...prev,
                idealWeight: {
                    lbs: lbsValue,
                    kg: totalKg
                }
            }));
            setPageValid(11, true);
        }
         else {
            setPageValid(11, false);
        }

    }, [idealWeight, unit, userData.muscleGain, errors]);



    return (
        <div>
                {userData.unit ==="lbs"?
                    <>
                        <p className="heading">
                            How many lbs of muscle would you like to gain ?
                        </p>

                         <div style={{paddingTop:"20px",width:"100%"}}>
                            <Button
                              text="5 lbs"
                              onClick={() => handleSelect("5lbs")}
                              className={userData.muscleGain === "5lbs" ? "selected" : ""}
                            />

                            <Button
                              text="10 lbs"
                              onClick={() => handleSelect("10lbs")}
                              className={userData.muscleGain === "10lbs" ? "selected" : ""}
                            />

                            <Button
                              text="15 lbs"
                              onClick={() => handleSelect("15lbs")}
                              className={userData.muscleGain === "15lbs" ? "selected" : ""}
                            />
                            <Button
                              text="20 lbs"
                              onClick={() => handleSelect("20lbs")}
                              className={userData.muscleGain === "10kg" ? "selected" : ""}
                            />
                            <Button
                              text="As much as possible"
                              onClick={() => handleSelect("As much as possible")}
                              className={userData.muscleGain === "As much as possible" ? "selected" : ""}
                            />
                            <Button
                              text="I'm not sure, whatever is recommended"
                              onClick={() => handleSelect("I'm not sure, whatever is recommended")}
                              className={userData.muscleGain === "I'm not sure, whatever is recommended" ? "selected" : ""}
                            />
                        </div>
                    </>
                    :
                    <>
                        <p className="heading">
                            How many kgs of muscle would you like to gain ?
                        </p>

                         <div style={{paddingTop:"20px",width:"100%"}}>
                            <Button
                              text="2.5 kg"
                              onClick={() => handleSelect("2.5kg")}
                              className={userData.muscleGain === "2.5kg" ? "selected" : ""}
                            />

                            <Button
                              text="5 kg"
                              onClick={() => handleSelect("5kg")}
                              className={userData.muscleGain === "5kg" ? "selected" : ""}
                            />

                            <Button
                              text="7.5 kg"
                              onClick={() => handleSelect("7.5kg")}
                              className={userData.muscleGain === "7.5kg" ? "selected" : ""}
                            />
                            <Button
                              text="10 kg"
                              onClick={() => handleSelect("10kg")}
                              className={userData.muscleGain === "10kg" ? "selected" : ""}
                            />
                            <Button
                              text="As much as possible"
                              onClick={() => handleSelect("As much as possible")}
                              className={userData.muscleGain === "As much as possible" ? "selected" : ""}
                            />
                            <Button
                              text="I'm not sure, whatever is recommended"
                              onClick={() => handleSelect("I'm not sure, whatever is recommended")}
                              className={userData.muscleGain === "I'm not sure, whatever is recommended" ? "selected" : ""}
                            />
                        </div>
                    </>
                }
        </div>
    )
}
export default TargetWeight
