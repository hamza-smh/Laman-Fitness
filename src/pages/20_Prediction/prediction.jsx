import "./style.css";
import { useUser } from "../../context/UserContext";
import usePageNavigation from "../../hooks/usePageNavigation";
import {PredictionGraph} from "../../components/predictionGraph/graphGain.jsx"
import { PredictionGraphLoss } from "../../components/predictionGraph/graphLoss"; 
import { getNextSixMonthsAndExactDate } from "../../components/predictionGraph/graphGain.jsx";
import { getNextMonthsAndExactDate } from "../../components/predictionGraph/graphLoss";
import { parseMuscleGainKg } from "../11_TargetWeight/targetWeight";
import emailjs from "emailjs-com"



const Prediction = ({ onContinue }) => {
  const { next, prev,cont } = usePageNavigation();
  const { setUserData, userData } = useUser();

  const weightLoss = ((userData.weight.kg-userData.idealWeight.kg)/userData.weight.kg *100).toFixed(0)

  // const sendEmail = () => {
  //   emailjs.send(
  //       "service_y3jvsl2",
  //       "template_awedr74", {
  //         email: userData.email,
  //         name: userData.name, // you can send other fields too
  //         age: userData.age, // you can send other fields too
  //         message: JSON.stringify(userData, , 2)
  //       },
  //       "sF8IiNs7zAG1Tdn4q"
  //     )
  //     .then((res) => {
  //       console.log("Email sent!", res.status, res.text);
  //     })
  //     .catch((err) => {
  //       console.error("Failed to send email", err);
  //     });
  // };

  const sendEmail = async () => {
    try {
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          service_id: "service_y3jvsl2",
          template_id: "template_awedr74",
          user_id: "sF8IiNs7zAG1Tdn4q",
          template_params: {
            name: userData.name,
            age: userData.age,
            gender: userData.gender,
            email: userData.email,
            active:userData.active,
            areas_to_target:userData.areas_to_target,
            mainFocus: userData.mainFocus ,
            height: `${userData.height.feet}'${userData.height.inches}" (${userData.height.cm} cm)`,
            weight: `${userData.weight.lbs} lbs (${userData.weight.kg} kg)`,
            currentBodyType: userData.currentBodyType,
            bodyFat: userData.bodyFat,
            overweight: userData.overweight,
            muscleGain: userData.muscleGain,
            idealWeight: `${userData.idealWeight.lbs} lbs (${userData.idealWeight.kg} kg)`,
            bestDescription: userData.bestDescription,
            consistency_issue: userData.consistency_issue,
            focus_building: userData.focus_building,
            gym_experience: userData.gym_experience,
            reason_to_join: userData.reason_to_join,
            ashamed: userData.ashamed,
            dissatisfied: userData.dissatisfied,
            consistent: userData.consistent,
            diet: userData.diet,
            past_attempts: userData.past_attempts,
            workout_tracking_app: userData.workout_tracking_app,
            science_view: userData.science_view,
            active: userData.active,
            excercise_freq: userData.excercise_freq,
            workout_time: userData.workout_time,
            equipment: userData.equipment,
            past_injuries: userData.past_injuries,
            calories: userData.calories,
            protien: userData.protien,
            nutrition_habits: userData.nutrition_habits,
            dietary_restrictions: userData.dietary_restrictions,
            busy: userData.busy,
            support: userData.support,
            following_Jeremy_for: userData.following_Jeremy_for,
            heard_about_us: userData.heard_about_us,
            priority: userData.priority,



            time: new Date().toLocaleString(), 
          }
        })
      });

      if (response.ok) {
        console.log("✅ Email sent successfully!");
      } else {
        console.error("❌ Email failed:", await response.text());
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };


  return (
    <>
    <div className="prediction-container">
      <p className="prediction-subtext">
        We predict you'll {
          userData.mainFocus==="losing weight" || userData.mainFocus==="build muscle + losing weight"?"be"
          :"gain"
        }

      </p>
      <p className="prediction-heading">
        {
          userData.mainFocus==="losing weight" || userData.mainFocus==="build muscle + losing weight"?
          `${weightLoss}% body fat by ${getNextMonthsAndExactDate().exactDateOneMonthsLater}`
          :
          `${parseMuscleGainKg(userData.muscleGain)}kg of muscle by ${getNextSixMonthsAndExactDate().exactDateFourMonthsLater}`
        }
      </p>
      <div className="graphHolder">
            {
              userData.mainFocus === "losing weight" ?
              <PredictionGraphLoss />
              :
              userData.mainFocus === "building muscle" ?
              <PredictionGraph gain={parseMuscleGainKg(userData.muscleGain)} userData={userData}/>
              :
              userData.mainFocus === "build muscle + losing weight"?
              <PredictionGraphLoss />
              :""
            }
      </div>      
      
      <p>
        Great news! Based on Built With Science members like you we predict you 'll be able to hit your { userData.mainFocus==="losing weight"?"fat losing":"muscle building"} goal by {" "}
        {userData.mainFocus === "losing weight"?
        getNextMonthsAndExactDate().exactDateOneMonthsLater
        :
        getNextSixMonthsAndExactDate().exactDateFourMonthsLater} or earlier.
        <br /><br />
        Next, tell us a bit more about your habits and behaviours so we can create the best plan for you.
      </p>
      
      
      <div className="navBtnHolder" style={{ paddingTop: "40px" }}>
         <button className="cont-button" onClick={() => { sendEmail();  }}>Continue</button>
      </div>
    </div>
    </>
  );
};

export default Prediction;



