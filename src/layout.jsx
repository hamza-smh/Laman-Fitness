import './layout.css'
import { useState, useEffect } from 'react'
import { useUser } from './context/UserContext'
import { useParams, useNavigate } from 'react-router-dom'
import NavButton from './components/nav-btn/nav-button'
import usePageNavigation from './hooks/usePageNavigation'
import { useFormValidation } from './context/FormValidationContext'
import GettingStarted from './components/progressBar/gettingStarted.jsx'
import HabitsAndBehaviour from './components/progressBar/habitsAndBehavoiur.jsx'
import PageGuard from './components/pageGuard/pageGuard'
import MainFocus from './pages/1_MainFocus/mainFocus'
import Gender from './pages/2_Gender/gender'
import Age from './pages/3_Age/age'
import Height from './pages/4_Height/height'
import Weight from './pages/5_CurrentWeight/weight'
import NotAlone from './pages/6_NotAlone/not_alone'
import Name from './pages/7_Name/name'
import BodyType from './pages/8_BodyType/bodyType'
import Tricky from './pages/9_Tricky/tricky'
import BodyFat from './pages/10_BodyFat/bodyFat'
import TargetWeight from './pages/11_TargetWeight/targetWeight'
import Verified from './pages/12_Verified/verified'
import BestDescription from './pages/13_BestDescription/bestDescription'
import Praise from './pages/14_Praise/praise'
import DifficultAreas from './pages/15_DifficultAreas/difficultAreas'
import FocusBuilding from './pages/16_FocusBuilding/focusBuilding'
import Testimonial from './pages/17_Testimonial/testimonial'
import GymExperience from './pages/18_GymExperience/gymExperience'
import Email from './pages/19_Email/email'
import Trying from './pages/20_Trying/trying'
import MainReason from './pages/21_MainReason/mainReason'
import Ashamed from './pages/22_Ashamed/ashamed'
import Dissatisfied from './pages/23_Dissatisfied/dissatisfied'
import Consistent from './pages/24_Consistent/consistent'
import Diet from './pages/25_Diet/diet'
import UnsustainableDiets from './pages/26_UnsustainableDiets/unsustainableDiets'
import PastAttempts from './pages/27_PastAttempts/pastAttempts'
import WorkoutTrackingApp from './pages/28_WorkoutTrackingApp/workoutTrackingApp'
import NutritionTrackingApp from './pages/29_NutritionTrackingApp/nutritionTrackingApp'
import TrainingAndNutrition from './components/progressBar/trainingAndNutrition'
import BuiltWithScience from './pages/30_BuiltWithScience/builtWithScience'
import NoBlame from './pages/31_NoBlame/noBlame'
import Active from './pages/32_Active/active'
import Comfortable from './pages/33_Comfortable/comfortable'
import PerfectYourForm from './pages/34_PerfectYourForm/perfectYourForm'
import ExcerciseFrequency from './pages/35_ExcerciseFrequency/excerciseFrequency'
import WorkoutTime from './pages/36_WorkoutTime/workoutTime'
import WorkoutVideo from './pages/37_WorkoutVideo/workoutVideo'
import Equipment from './pages/38_Equipment/equipment'
import Verified2 from './pages/39_Verified2/verified'
import PastInjuries from './pages/40_Past_injuries/pastInjuries'
import SmartWorkout from './pages/41_SmartWorkout/smartWorkout'
import AlmostReady from './pages/42_AlmostReady/almostReady'
import Calories from './pages/43_Calories/calories'
import CalorieOutput from './pages/44_CalorieOutput/calorieOutput'
import Protein from './pages/45_Protein/protein'
import ProteinOutput from './pages/46_ProteinOutput/proteinOutput'
import NutritionHabits from './pages/47_NutritionHabits/nutritionHabits'
import DietaryRestrictions from './pages/48_DietaryRestictions/dietaryRestrictions'
import Busy from './pages/49_Busy/busy'
import Support from './pages/50_Support/support'
import FollowJeremy from './pages/51_FollowJeremy/followJeremy'
import HearAboutUs from './pages/52_HearAboutUs/hearAboutUs'
import BusyCheck from './pages/53_BusyCheck/busyCheck'
import FocusFirst from './pages/54_FocusFirst/focusFirst'
import Consistency from './pages/14_Consistency/consistency'
import YourProgress from './pages/19_YourProgress/yourProgress'
import Results from './pages/Final/result'

const MainLayout = () => {
  const { page, next, prev } = usePageNavigation()
  const { setUserData, userData } = useUser()
  const { setPageValid, validationStatus, resetValidationStatus } = useFormValidation()
  const { index } = useParams()
  const navigate = useNavigate()

  const [showProgress, setShowProgress] = useState(false)
  useEffect(() => {
    if (page === 19) {
      setShowProgress(true)
      const timer = setTimeout(() => {
        setShowProgress(false)
      }, 2000)

      return () => clearTimeout(timer)
    }
  }, [page])

  // useEffect(() => {
  //   if (
  //     page === 26 &&
  //     userData?.diet !== undefined &&
  //     userData.diet !== 4 &&
  //     userData.diet !== 5
  //   ) {
  //     setPageValid(26, true)
  //     userData.lastVisitedPage === 25 ? next() : navigate('/page/25')
  //   }
  // }, [userData, page])

  const screen =
    // page === 1 ? (
    //   <MainFocus />
    //) : 
    
    // ) : page === 3 ? (
    //   <Age />
    // ) : page === 4 ? (
    //   <Height />
    // ) : page === 5 ? (
    //   <Weight />
    // ) : page === 6 ? (
    //   <NotAlone />
    
    // ) : page === 8 ? (
    //   <BodyType />
    // ) : page === 9 ? (
    //   <Tricky />
    // ) : page === 10 ? (
    //   <BodyFat />
    // ) : page === 11 ? (
    //   <TargetWeight />
    // ) : page === 12 ? (
    //   <Verified />
    // ) : page === 13 ? (
    //   <BestDescription />
    // ) : page === 14 ? (
    //   <Consistency />
    // ) : page === 15 ? (
    //   <DifficultAreas />
    // ) : page === 16 ? (
    //   <FocusBuilding />
    // ) : page === 17 ? (
    //   <Testimonial />
    // ) : page === 18 ? (
    //   <GymExperience />
    
    // ) : page === 20 ? (
    //   <Trying />
      page === 1 ? ( 
      <Name />
    ): page === 2 ? (
      <Gender />
    ) : page === 3 ? (
      <Email />
    ) : page === 4 ? (
      <MainReason />
    ) : page === 5 ? (
      <Ashamed />
    ) : page === 6 ? (
      <Dissatisfied />
    ) : page === 7 ? (
      <Consistent />
    ) : page === 8 ? (
      <Diet />
    ) : page === 9 ? (
      <UnsustainableDiets />
    ) : page === 10 ? (
      <PastAttempts />
    ) : page === 11 ? (
      <WorkoutTrackingApp />
    ) : page === 12 ? (
      <NutritionTrackingApp />
    ) : page === 13 ? (
      <BuiltWithScience />
    ) : page === 14 ? (
      <NoBlame />
    ) : page === 15 ? (
      <Active />
    ) : page === 16 ? (
      <Comfortable />
    ) : page === 17 ? (
      <PerfectYourForm />
    ) : page === 18 ? (
      <ExcerciseFrequency />
    ) : page === 19 ? (
      <WorkoutTime />
    ) : page === 20 ? (
      <WorkoutVideo />
    ) : page === 21 ? (
      <Equipment />
    ) : page === 22 ? (
      <Verified2 />
    ) : page === 23 ? (
      <PastInjuries />
    ) : page === 24 ? (
      <SmartWorkout />
    ) : page === 25 ? (
      <AlmostReady />
    ) : page === 26 ? (
      <Calories />
    ) : page === 27 ? (
      <CalorieOutput />
    ) : page === 28 ? (
      <Protein />
    ) : page === 29 ? (
      <ProteinOutput />
    ) : page === 30 ? (
      <NutritionHabits />
    ) : page === 31 ? (
      <DietaryRestrictions />
    ) : page === 32 ? (
      <Busy />
    ) : page === 33 ? (
      <Support />
    ) : page === 34 ? (
      <FollowJeremy />
    ) : page === 35 ? (
      <HearAboutUs />
    ) : page === 36 ? (
      <BusyCheck />
    ) : page === 37 ? (
      <FocusFirst />
    ) : page === 38 ? (
      <Results />
    ) : (
      <h1>Not Found</h1>
    )

  console.log('userData', userData)
  console.log('Form Valid', validationStatus)

  const goNext = () => {
    const currentPage = parseInt(page)
    if (!validationStatus[currentPage]) {
      return
    }
    setUserData(prev => ({ ...prev, lastVisitedPage: page }))
    sessionStorage.setItem('lastVisitedPage', page)
    next()
  }

  const goPrev = () => {
    setUserData(prev => ({ ...prev, lastVisitedPage: page }))
    sessionStorage.setItem('lastVisitedPage', page)
    prev()
  }

  useEffect(() => {
    if (!validationStatus || Object.keys(validationStatus).length === 0) return
    const currentPage = parseInt(index)
    for (let i = 1; i < currentPage; i++) {
      if (!validationStatus[i]) {
        navigate(`/page/${i}`)
        return
      }
    }
  }, [index, validationStatus, navigate])

  const handleClear = () => {
    localStorage.removeItem('userData')
    resetValidationStatus() 
    window.location.reload()
  }

  useEffect(() => {
    localStorage.setItem('validationStatus', JSON.stringify(validationStatus))
  }, [validationStatus])

  return (
    <PageGuard pageNumber={page}>
      <div className='container'>
        <div
          className='header'
          style={{
            backgroundColor:
              // page === 6 ||
              // page === 9 ||
              // page === 12 ||
              // (page === 14 &&
              //   userData.bestDescription !==
              //     'I have some healthy habits but I struggle with consistency') ||
              // page === 17 ||
              page === 6 ||
              page === 7 ||
              page === 8 ||
              page === 9 ||
              page === 14 ||
              page === 17 ||
              page === 19 ||
              page === 20 ||
              page === 22 ||
              page === 24 ||
              page === 25 ||
              page === 27 ||
              page === 29 
              //page === 33
                ? '#ADD8E6'
                : '#FFF'
          }}
        >
          {page <= 20
            ? 'Getting Started'
            : page <= 27
            ? 'Habits & Behaviors'
            : page <= 35
            ? 'training and nutrition':""}
          {page <= 20 ? (
            <GettingStarted />
          ) : page <= 27 ? (
            <HabitsAndBehaviour />
          ): page <= 35 ? (
            <TrainingAndNutrition />
          ):""}
        </div>
        {
        // page === 6 ? (
        //   <div>
        //     <NotAlone />
        //   </div>
        // ) : page === 9 ? (
        //   <div>
        //     <Tricky />
        //   </div>
        // ) : page === 12 ? (
        //   <div>
        //     <Verified />
        //   </div>
        // ) : page === 14 &&
        //   userData.bestDescription !==
        //     'I have some healthy habits but I struggle with consistency' ? (
        //   <div>
        //     <Praise />
        //   </div>
        // ) : page === 17 ? (
        //   <div>
        //     <Testimonial />
        //   </div>
        //  ) : page === 19 && showProgress && userData.lastVisitedPage === 18 ? (
        //   <div>
        //     <YourProgress />
        //   </div>
        // ) : page === 20 ? (
        //   <div>
        //     <Trying />
        //   </div>
        //) : 
         page === 6 ? (
          <div>
            <Dissatisfied />
          </div>
        ) : page === 7 ? (
          <div>
            <Consistent />
          </div>
        ) : page === 8 ? (
          <div>
            <Diet />
          </div>
        ): page === 9 ? (
          <div>
            <UnsustainableDiets />
          </div>
        ) : page === 14 ? (
          <div>
            <NoBlame />
          </div>
        ) : page === 17 ? (
          <div>
            <PerfectYourForm />
          </div>
        ) : page === 20 ? (
          <div>
            <WorkoutVideo />
          </div>
        ) : page === 22? (
          <div>
            <Verified2 />
          </div>
        ) : page === 24 ? (
          <div>
            <SmartWorkout />
          </div>
        ) : page === 25 ? (
          <div>
            <AlmostReady />
          </div>
        ) : page === 27 ? (
          <div>
            <CalorieOutput />
          </div>
        ) : page === 29 ? (
          <div>
            <ProteinOutput />
          </div>
        ) : page === 36 ? (
          <div>
            <BusyCheck />
          </div>
        ) : (
          <div className='content-wrapper'>
            <div className='card'>{screen}</div>
            <div className='navBtnHolder'>
              {page !== 1  ? <NavButton text='Previous' nav={goPrev} /> : ''}
              {
              page < 37 ? (
                <NavButton text='Next' nav={goNext} />
              ) : 
              page !== 38 && 
                <NavButton text='See Results' nav={goNext} />
              }

              <button className="result-button" onClick={()=>handleClear()}>
                  Clear
              </button>
            </div>
          </div>
        )}
      </div>
    </PageGuard>
  )
}
export default MainLayout
