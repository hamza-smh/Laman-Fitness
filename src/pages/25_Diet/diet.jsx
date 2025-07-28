import "./style.css"
import { useUser } from '../../context/UserContext'
import { useParams, useNavigate } from "react-router-dom";
import usePageNavigation from '../../hooks/usePageNavigation'
import NavButton from "../../components/nav-btn/nav-button";
import Rating from '../../components/rating/rating'
import { useFormValidation } from "../../context/FormValidationContext";
const Diet = () => {
  const { userData, setUserData } = useUser()
  const { next, prev,goNext, goPrev } = usePageNavigation();
  const { setPageValid } = useFormValidation();
  const navigate = useNavigate();

  const handleSelect = (diet) => {
    setUserData(prev => ({
      ...prev,
      diet
    }))
    setPageValid(25,true)
    console.log('Diet? :', diet)    
  }


  return (
    <div className='blue-wrapper'>
      <div className='white-card'>
        <p style={{ fontWeight: '600', fontSize: '24px' }}>
          How strongly do you relate to the below statement?
        </p>
        <p style={{ fontWeight: '400', fontSize: '20px' }}>
            "I know how important my diet is but I just don't know where to start or how to do it in a way that easily fits into MY life."
        </p>

        <Rating onSelect={handleSelect} rate={userData.diet} />
      </div>
       <div className="navBtnHolder" style={{ paddingTop: "40px" }}>
        <NavButton text="Previous" nav={goPrev} />
        <NavButton text="Next" nav={goNext} />
      </div>
    </div>
  )
}

export default Diet
