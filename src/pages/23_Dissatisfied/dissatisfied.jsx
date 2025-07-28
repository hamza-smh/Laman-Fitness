import "./style.css"
import { useUser } from '../../context/UserContext'
import usePageNavigation from '../../hooks/usePageNavigation'
import NavButton from "../../components/nav-btn/nav-button";
import Rating from '../../components/rating/rating'
import { useFormValidation } from "../../context/FormValidationContext";
const Dissatisfied = () => {
  const { userData, setUserData } = useUser()
  const { next, prev ,goPrev,goNext} = usePageNavigation();
  const { setPageValid } = useFormValidation();

  const handleSelect = dissatisfied => {
    setUserData(prev => ({
      ...prev,
      dissatisfied
    }))
    setPageValid(23, true);
    goNext()
    console.log('Dissatisfied? :', dissatisfied)
  }

  return (
    <div className='blue-wrapper'>
      <div className='white-card'>
        <p style={{ fontWeight: '600', fontSize: '24px' }}>
          How strongly do you relate to the below statement?
        </p>
        <p style={{ fontWeight: '400', fontSize: '20px' }}>
          "I feel dissatisfied with where I'm at and I know I'm capable of more.
          I'm ready to change and commit to a plan, but I just need something I
          can trust will work."
        </p>

        <Rating onSelect={handleSelect} rate={userData.dissatisfied} />
      </div>
       <div className="navBtnHolder" style={{ paddingTop: "40px" }}>
        <NavButton text="Previous" nav={goPrev} />
        <NavButton text="Next" nav={goNext} />
      </div>
    </div>
  )
}

export default Dissatisfied
