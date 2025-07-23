import { useUser } from '../../context/UserContext'
import usePageNavigation from '../../hooks/usePageNavigation'
import NavButton from "../../components/nav-btn/nav-button";
import Rating from '../../components/rating/rating'
import "./style.css"
const Diet = () => {
  const { userData, setUserData } = useUser()
  const { next, prev } = usePageNavigation();

  const handleSelect = (diet) => {
    setUserData(prev => ({
      ...prev,
      diet
    }))
    next()
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
        <NavButton text="Previous" nav={prev} />
        <NavButton text="Next" nav={next} />
      </div>
    </div>
  )
}

export default Diet
