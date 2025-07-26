import "./targetWeight.css"
import { useState,useEffect } from 'react'
import { useUser } from '../../context/UserContext'
import Button from "../../components/button/button"
import usePageNavigation from '../../hooks/usePageNavigation'
import ToggleSwitch from '../../components/toggleSwitch/toggleSwitch'
import InputField from '../../components/inputField/inputField'
import { useFormValidation } from "../../context/FormValidationContext";

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

        if (userData.overweight) {
            if (isLbsValid || isKgValid) {
                setUserData(prev => ({
                    ...prev,
                    idealWeight
                }));
                setPageValid(11, true);
            } else {
                setPageValid(11, false);
            }
        } else {
            if (userData.muscleGain && userData.muscleGain !== '') {
                setPageValid(11, true);
            } else {
                setPageValid(11, false);
            }
        }
    }, [idealWeight, unit, userData.muscleGain, userData.overweight, errors]);


    return (
        <div>
            {
                userData.overweight ?
                (
                    <>
                    <p
                        style={{
                            fontWeight: '600',
                            fontSize: '18px'
                        }}
                    >
                        What is your ideal weight that you want to reach ?
                    </p>
                    
                    <div className='weight-input-container'>
                        <ToggleSwitch option1={"lbs"} option2={"kg"} state={unit} setState={setUnit} />
                    
                        {unit === "lbs" ? (

                             <div className="input-group">
                                <div div className = "input-colFull" >
                                <div div className='inputHolderFull' >
                                    <label>lbs</label>
                                    <InputField
                                        type={"number"}
                                        value={idealWeight.lbs}
                                        handleChange={handleWeightChange("lbs")}
                                    />
                                </div>
                                {errors.lbs && <span className="error">{errors.lbs}</span>}
                            </div>
                            </div>
                        ) : (
                            <div className="input-group">
                                <div div className = "input-colFull" >
                                <div div className='inputHolderFull' >
                                    <label>kg</label>
                                    <InputField
                                        type={"number"}
                                        value={idealWeight.kg}
                                        handleChange={handleWeightChange("kg")}
                                    />
                                    </div>
                                    {errors.kg && <span className="error">{errors.kg}</span>}
                                </div>
                            </div>
                        )}
                    </div>
                </>
                )
                :
                (
                    <>
                        <p style={{fontWeight: '600',fontSize: '18px'}}>
                            How many lbs of muscle would you like to gain ?
                        </p>

                         <div style={{paddingTop:"20px",width:"100%"}}>
                            <Button
                              text="2.5kg"
                              onClick={() => handleSelect("2.5kg")}
                              className={userData.muscleGain === "2.5kg" ? "selected" : ""}
                            />

                            <Button
                              text="5kg"
                              onClick={() => handleSelect("5kg")}
                              className={userData.muscleGain === "5kg" ? "selected" : ""}
                            />

                            <Button
                              text="7.5kg"
                              onClick={() => handleSelect("7.5kg")}
                              className={userData.muscleGain === "7.5kg" ? "selected" : ""}
                            />
                            <Button
                              text="10kg"
                              onClick={() => handleSelect("10kg")}
                              className={userData.muscleGain === "7.5kg" ? "selected" : ""}
                            />
                            <Button
                              text="As much as possible"
                              onClick={() => handleSelect("As much as possible")}
                              className={userData.muscleGain === "As much as possible" ? "selected" : ""}
                            />
                            <Button
                              text="I'm not sure, wwhatever is recommended"
                              onClick={() => handleSelect("I'm not sure, wwhatever is recommended")}
                              className={userData.muscleGain === "I'm not sure, wwhatever is recommended" ? "selected" : ""}
                            />
                        </div>

                    </>
                )

            }
            
        </div>
    )
}
export default TargetWeight
