import { useUser } from '../../context/UserContext'
import usePageNavigation from '../../hooks/usePageNavigation'
import NavButton from "../../components/nav-btn/nav-button";
import Rating from '../../components/rating/rating'
import "./style.css"
const Consistent = () => {
  const { userData, setUserData } = useUser()
  const { next, prev } = usePageNavigation();

  const handleSelect = (consistent) => {
    setUserData(prev => ({
      ...prev,
      consistent
    }))
    next()
    console.log('Consistent? :', consistent)
  }

  return (
    <div className='blue-wrapper'>
      <div className='white-card'>
        <p style={{ fontWeight: '600', fontSize: '24px' }}>
          How strongly do you relate to the below statement?
        </p>
        <p style={{ fontWeight: '400', fontSize: '20px' }}>
          "I struggle with staying consistent. I need some outside motivation or accountability. I make a bit of progress but then lose it all as soon as I stop being consistent."
        </p>

        <Rating onSelect={handleSelect} rate={userData.consistent} />
      </div>
       <div className="navBtnHolder" style={{ paddingTop: "40px" }}>
        <NavButton text="Previous" nav={prev} />
        <NavButton text="Next" nav={next} />
      </div>
    </div>
  )
}

export default Consistent
