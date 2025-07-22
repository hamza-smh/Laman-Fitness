import "./targetWeight.css"
import { useState,useEffect } from 'react'
import { useUser } from '../../context/UserContext'
import usePageNavigation from '../../hooks/usePageNavigation'
import ToggleSwitch from '../../components/toggleSwitch/toggleSwitch'
import InputField from '../../components/inputField/inputField'

const TargetWeight = () => {
    const { setUserData, userData } = useUser()
    const { next } = usePageNavigation()
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

    useEffect(() => {
        const lbs = parseFloat(idealWeight.lbs);
        const kg = parseFloat(idealWeight.kg);
        const islbsValid = unit === "lbs" && !isNaN(lbs);
        const isKgValid = unit === "kg" && !isNaN(kg);

        if (islbsValid || isKgValid) {
            setUserData(prev => ({
                ...prev,
                idealWeight
            }));
        }
    }, [idealWeight, unit]);

    return (
        <div>
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
                ) : (
                    <div className="input-group">
                        <div div className='inputHolderFull' >
                            <label>kg</label>
                            <InputField
                                type={"number"}
                                value={idealWeight.kg}
                                handleChange={handleWeightChange("kg")}
                            />
                            {errors.kg && <span className="error">{errors.kg}</span>}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
export default TargetWeight
