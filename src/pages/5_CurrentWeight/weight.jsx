import "./weight.css"
import { useState,useEffect } from 'react'
import { useUser } from '../../context/UserContext'
import usePageNavigation from '../../hooks/usePageNavigation'
import ToggleSwitch from '../../components/toggleSwitch/toggleSwitch'
import InputField from '../../components/inputField/inputField'
import { useFormValidation } from "../../context/FormValidationContext";

const Weight = () => {
    const { setUserData, userData } = useUser()
    const { next } = usePageNavigation()
    const { setPageValid } = useFormValidation();
    const [unit, setUnit] = useState('lbs');
    const [weight, setWeight] = useState({
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
           setWeight({
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
           setWeight({
               lbs: lbs.toFixed(1),
               kg: value
           });
       }
       setErrors(newErrors);
   };

    useEffect(() => {
        const lbs = parseFloat(weight.lbs);
        const kg = parseFloat(weight.kg);
        const islbsValid = unit === "lbs" && !isNaN(lbs) && errors.lbs === '';
        const isKgValid = unit === "kg" && !isNaN(kg) && errors.kg === '';

        if (islbsValid || isKgValid) {
            setUserData(prev => ({
                ...prev,
                weight
            }));
            setPageValid(5, true)
            } else {
            setPageValid(5, false); 
        }
    }, [weight, unit]);

    return (
        <div>
            <p
                style={{
                    fontWeight: '600',
                    fontSize: '18px'
                }}
            >
                What is your current weight ?
            </p>
             <p style={{fontWeight:"400",color:"#90a5c2",fontSize:"16px",fontStyle:"italic"}}>
            Thanks
            for sharing this with us. We don't mean to pry, we just need to know so we can build a plan that's right
            for you.
            </p>

            <div className='weight-input-container' >
                <ToggleSwitch option1={"lbs"} option2={"kg"} state={unit} setState={setUnit} />

                {unit === "lbs" ? (
                     <div className="input-group">
                        <div className = "input-colFull" >
                        <div className='inputHolderFull' >
                            <label>lbs</label>
                            <InputField
                                type={"number"}
                                value={weight.lbs}
                                handleChange={handleWeightChange("lbs")}
                                />
                        </div>
                        {errors.lbs && <span className="error">{errors.lbs}</span>}
                        </div>
                    </div>
                ) : (
                    <div className="input-group">
                        <div className = "input-colFull" >
                        <div className='inputHolderFull' >
                            <label>kg</label>
                            <InputField
                                type={"number"}
                                value={weight.kg}
                                handleChange={handleWeightChange("kg")}
                            />
                        </div>
                        {errors.kg && <span className="error">{errors.kg}</span>}
                    </div>
                    </div>
                )}
            </div>
        </div>
    )
}
export default Weight
