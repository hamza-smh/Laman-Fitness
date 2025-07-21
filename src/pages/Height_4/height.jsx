import "./height.css"
import { useState,useEffect } from 'react'
import { useUser } from '../../context/UserContext'
import usePageNavigation from '../../hooks/usePageNavigation'
import ToggleSwitch from '../../components/toggleSwitch/toggleSwitch'
import InputField from '../../components/inputField/inputField'

const Height = () => {
    const { setUserData, userData } = useUser()
    const { next } = usePageNavigation()
    const [unit, setUnit] = useState('ft')
    const [height, setHeight] = useState({
        feet: '',
        inches: '',
        cm: ''
    })
    const [errors, setErrors] = useState({
        feet: '',
        inches: '',
        cm: ''
    });

    const handleHeightChange = (field) => (e) => {
        const value = e.target.value;
        let newErrors = {
            ...errors
        };

        if (field === 'feet' || field === 'inches') {
            const updated = {
                ...height,
                [field]: value
            };

            const feet = parseFloat(updated.feet) || 0;
            const inches = parseFloat(updated.inches) || 0;

            // Validation
            if (feet < 0 || feet > 9) {
                newErrors.feet = 'Feet must be between 0 and 9';
            } else {
                newErrors.feet = '';
            }

            if (inches < 0 || inches >= 12) {
                newErrors.inches = 'Inches must be between 0 and 11.99';
            } else {
                newErrors.inches = '';
            }

            const cm = (feet * 30.48) + (inches * 2.54);

            setHeight({
                feet: updated.feet,
                inches: updated.inches,
                cm: cm.toFixed(1)
            });
            setErrors(newErrors);

        } else if (field === 'cm') {
            const cm = parseFloat(value) || 0;

            if (cm < 50 || cm > 300) {
                newErrors.cm = 'CM must be between 50 and 300';
            } else {
                newErrors.cm = '';
            }

            const totalInches = cm / 2.54;
            const feet = Math.floor(totalInches / 12);
            const inches = totalInches % 12;

            setHeight({
                feet: feet.toString(),
                inches: inches.toFixed(1),
                cm: value
            });
            setErrors(newErrors);
        }
    };

    useEffect(() => {
        const feet = parseFloat(height.feet);
        const inches = parseFloat(height.inches);
        const cm = parseFloat(height.cm);

        const isFtValid = unit === "ft" && (!isNaN(feet) || !isNaN(inches));
        const isCmValid = unit === "cm" && !isNaN(cm);

        if (isFtValid || isCmValid) {
            setUserData(prev => ({
                ...prev,
                height
            }));
        }
    }, [height, unit]);

    return (
        <div>
            <p
                style={{
                    fontWeight: '600',
                    fontSize: '18px'
                }}
            >
                What is your height ?
            </p>

            <div className='height-input-container'>
                <ToggleSwitch option1={"ft"} option2={"cm"} state={unit} setState={setUnit} />

                {unit === "ft" ? (
                    <div className="input-group">
                        <div className='inputHolder'>
                            <label>ft</label>
                            <InputField 
                                type={"number"} 
                                value={height.feet} 
                                handleChange={handleHeightChange("feet")} 
                            />
                            {errors.feet && <span className="error">{errors.feet}</span>}
                        </div>
                        <div className='inputHolder' >
                            <label>in</label>
                            <InputField
                                type="number"
                                value={height.inches}
                                handleChange={handleHeightChange("inches")}
                            />
                            {errors.inches && <span className="error">{errors.inches}</span>}
                        </div>
                    </div>
                ) : (
                    <div className="input-group">
                        <div div className='inputHolderFull' >
                            <label>cm</label>
                            <InputField
                                type={"number"}
                                value={height.cm}
                                handleChange={handleHeightChange("cm")}
                            />
                            {errors.cm && <span className="error">{errors.cm}</span>}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
export default Height
