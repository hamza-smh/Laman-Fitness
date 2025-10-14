import Button from '../../components/button/button'
import { useUser } from '../../context/UserContext'
import usePageNavigation from '../../hooks/usePageNavigation'
import { useFormValidation } from "../../context/FormValidationContext";

const Gender = () => {
  const { setUserData, userData } = useUser()
  const { next } = usePageNavigation()
 const { setPageValid } = useFormValidation();

  const handleSelect = gender => {
    setUserData(prev => ({
      ...prev,
      gender
    }))
    console.log('Selected gender:', gender)
    setPageValid(2, true);
    next()
  }
  return (
    <div>
      <p className="heading">
        What gender do you identify with ?
      </p>{' '}
      <p className='subheading'>
        How you should train and eat will vary slightly based on your gender.{' '}
      </p>
      <div
        style={{
          paddingTop: '20px',
          width: '100%'
        }}
      >
        <Button className={userData.gender === "Male" ? "selected" : ""} text='Male' onClick={() => handleSelect('Male')} />{' '}
        <Button className={userData.gender === "Female" ? "selected" : ""} text='Female' onClick={() => handleSelect('Female')} />{' '}
      </div>
    </div>
  )
}
export default Gender
