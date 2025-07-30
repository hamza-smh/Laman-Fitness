import { bodyFatFemale,bodyFatMale } from "../../pages/10_BodyFat/bodyFatData";
import { useUser } from "../../context/UserContext";
import React, { useEffect, useRef } from "react";
import { parseMuscleGainKg } from "../../pages/11_TargetWeight/targetWeight";
import "./style.css"
export const getNextMonthsAndExactDate = () => {
  const today = new Date();
  const monthsList = [];

  for (let i = -1; i < 1; i++) {
    const nextMonth = new Date(today.getFullYear(), today.getMonth() + i + 1, 1);
    const monthAbbrev = nextMonth.toLocaleString('default', { month: 'short' });
    monthsList.push(monthAbbrev);
  }
  const exactDate = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate());
  const formattedExactDateFull = exactDate.toDateString();

  const formattedExactDate = exactDate.toLocaleDateString('default', {
    day: 'numeric',
    month: 'short'
  });


  return {
    nextMonth: monthsList,
    exactDateOneMonthsLater: formattedExactDate,
    exactDateMonthsLaterFull: formattedExactDateFull
  };
};

export function getBodyFatProgression(userData, weightLoss) {
    const gender = userData.gender?.toLowerCase?.() || "";
    const bodyFatArray = gender === "male" ? bodyFatMale : bodyFatFemale;

    const current = bodyFatArray.find(bf => bf.id === Number(userData.bodyFat));

    if (!current) {
        console.error("Invalid bodyFat id:", userData.bodyFat);
        return [];
    }

    const currentFat = current.data;
    const targetFat = Number(weightLoss);

    const steps = 5;
    const stepSize = (currentFat - targetFat) / (steps - 1);
    const result = [];

    for (let i = 0; i < steps; i++) {
        result.push(Math.round(currentFat - stepSize * i));
    }

    return result;
}


export const PredictionGraphLoss = () => {
  const { setUserData, userData } = useUser();
  const weightLoss = ((userData.weight.kg - userData.idealWeight.kg) / userData.weight.kg * 100).toFixed(0)
  const progression = getBodyFatProgression( userData, weightLoss);
  const pathRef = useRef(null);
  useEffect(() => {
    const path = pathRef.current;
    if (path) {
      const length = path.getTotalLength();
      path.style.strokeDasharray = length;
      path.style.strokeDashoffset = length;
      path.getBoundingClientRect(); // Force layout
      path.style.transition = "stroke-dashoffset 2s ease-out";
      path.style.strokeDashoffset = "0";
    }
  }, []);

  return (
    <div className = "recharts-responsive-container resp-chart" >
      <div div className = "recharts-wrapper" role = "region" style = {{position: "relative",cursor: "default",width: "100%",height: "100%"}}>
        <svg className = "recharts-surface" width = "100%" height = "100%" viewBox = "0 0 450 300" >
          <title>
          </title>
          <desc>
          </desc>
          <defs>
            <clipPath id="recharts1-clip">
              <rect x="55" y="10" height="260" width="365">
              </rect>
            </clipPath>
          </defs>
          <defs>
            {/* <linearGradient id="colorWeight" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stop-color="#406EDF" stop-opacity="0.8">
              </stop>
              <stop offset="95%" stop-color="#406EDF" stop-opacity="0">
              </stop>
            </linearGradient> */}
            <linearGradient id="colorWeight" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#406EDF" stopOpacity="0.8">
                <animate attributeName="stop-opacity" from="0" to="0.8" dur="2s" fill="freeze" />
              </stop>
              <stop offset="100%" stopColor="#406EDF" stopOpacity="0">
                <animate attributeName="stop-opacity" from="0" to="0" dur="2s" fill="freeze" />
              </stop>
              </linearGradient>
          </defs>
          <g className="recharts-layer recharts-cartesian-axis recharts-xAxis xAxis">
            <line orientation="bottom" width="365" height="30" x="55" y="270" className="recharts-cartesian-axis-line" stroke="#666" fill="none" x1="55" y1="270" x2="420" y2="270">
            </line>
            <g className="recharts-cartesian-axis-ticks">
              <g className="recharts-layer recharts-cartesian-axis-tick">
                <line orientation="bottom" width="365" height="30" x="55" y="270" className="recharts-cartesian-axis-tick-line" stroke="#666" fill="none" x1="55" y1="276" x2="55" y2="270">
                </line>
                <text orientation="bottom" width="365" height="30" x="55" y="278" stroke="none" fill="#666" className="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle">
                  <tspan x="55" dy="0.71em">
                    {getNextMonthsAndExactDate().nextMonth[0]}
                  </tspan>
                </text>
              </g>
              <g className="recharts-layer recharts-cartesian-axis-tick">
                <line orientation="bottom" width="365" height="30" x="55" y="270" className="recharts-cartesian-axis-tick-line" stroke="#666" fill="none" x1="420" y1="276" x2="420" y2="270">
                </line>
                <text orientation="bottom" width="365" height="30" x="420" y="278" stroke="none" fill="#666" className="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle">
                  <tspan x="420" dy="0.71em">
                    {getNextMonthsAndExactDate().nextMonth[1]}
                    </tspan>
                </text>
              </g>
            </g>
          </g>
          <g className="recharts-layer recharts-cartesian-axis recharts-yAxis yAxis">
            <line width="55" orientation="left" height="260" x="0" y="10" className="recharts-cartesian-axis-line" stroke="#666" fill="none" x1="55" y1="10" x2="55" y2="270">
            </line>
            <g className="recharts-cartesian-axis-ticks">
              <g className="recharts-layer recharts-cartesian-axis-tick">
                <line width="55" orientation="left" height="260" x="0" y="10" className="recharts-cartesian-axis-tick-line" stroke="#666" fill="none" x1="49" y1="270" x2="55" y2="270">
                </line>
                <text width="55" orientation="left" height="260" x="47" y="270" stroke="none" fill="#666" className="recharts-text recharts-cartesian-axis-tick-value" text-anchor="end">
                  <tspan x="47" dy="0.355em">
                    {progression[4]}
                  </tspan>
                </text>
              </g>
              <g className="recharts-layer recharts-cartesian-axis-tick">
                <line width="55" orientation="left" height="260" x="0" y="10" className="recharts-cartesian-axis-tick-line" stroke="#666" fill="none" x1="49" y1="205" x2="55" y2="205">
                </line>
                <text width="55" orientation="left" height="260" x="47" y="205" stroke="none" fill="#666" className="recharts-text recharts-cartesian-axis-tick-value" text-anchor="end">
                  <tspan x="47" dy="0.355em">
                      {progression[3]}
                    </tspan>
                </text>
              </g>
              <g className="recharts-layer recharts-cartesian-axis-tick">
                <line width="55" orientation="left" height="260" x="0" y="10" className="recharts-cartesian-axis-tick-line" stroke="#666" fill="none" x1="49" y1="140" x2="55" y2="140">
                </line>
                <text width="55" orientation="left" height="260" x="47" y="140" stroke="none" fill="#666" className="recharts-text recharts-cartesian-axis-tick-value" text-anchor="end">
                  <tspan x="47" dy="0.355em">
                      {progression[2]}
                    </tspan>
                </text>
              </g>
              <g className="recharts-layer recharts-cartesian-axis-tick">
                <line width="55" orientation="left" height="260" x="0" y="10" className="recharts-cartesian-axis-tick-line" stroke="#666" fill="none" x1="49" y1="75" x2="55" y2="75">
                </line>
                <text width="55" orientation="left" height="260" x="47" y="75" stroke="none" fill="#666" className="recharts-text recharts-cartesian-axis-tick-value" text-anchor="end">
                  <tspan x="47" dy="0.355em">
                      {progression[1]}
                  </tspan>
                </text>
              </g>
              <g className="recharts-layer recharts-cartesian-axis-tick">
                <line width="55" orientation="left" height="260" x="0" y="10" className="recharts-cartesian-axis-tick-line" stroke="#666" fill="none" x1="49" y1="10" x2="55" y2="10">
                </line>
                <text width="55" orientation="left" height="260" x="47" y="10" stroke="none" fill="#666" className="recharts-text recharts-cartesian-axis-tick-value" text-anchor="end">
                  <tspan x="47" dy="0.355em">
                     {progression[0]}
                  </tspan>
                </text>
              </g>
            </g>
            <text offset="5" x="5" y="140" fill="#808080" transform="rotate(-90, 5, 140)" className="recharts-text recharts-label" text-anchor="start">
              <tspan x="5" dy="0.355em">
                Body Fat (%)</tspan>
            </text>
          </g>
          <g className="recharts-layer recharts-area">
            <g className="recharts-layer">
              <defs>
                <clipPath id="animationClipPath-recharts-area-3">
                  <rect x="55" y="0" width="365" height="274">
                  </rect>
                </clipPath>
              </defs>
              <g className="recharts-layer" clip-path="url(#animationClipPath-recharts-area-3)">
                <g className="recharts-layer">
                  <path stroke-width="4" fill-opacity="1" fill="url(#colorWeight)" width="365" height="260" stroke="none" className="recharts-curve recharts-area-area" d="M55,10L420,270L420,270L55,270Z">
                  </path>
                  {/* <path stroke="#406EDF" stroke-width="4" fill-opacity="1" fill="none" width="365" height="260" className="recharts-curve recharts-area-curve" d="M55,10L420,270">
                  </path> */}
                   < path
                    ref={pathRef}
                    d = "M55,10L420,270"
                    fill="none"
                    stroke="#406EDF"
                    strokeWidth="4"
                  />
                </g>
              </g>
            </g>
          </g>
          <g className="recharts-layer recharts-reference-line">
            <line x="1756345876686" stroke="#FF0000" stroke-width="0" fill="none" fill-opacity="1" x1="420" y1="270" x2="420" y2="10" className="recharts-reference-line-line">
            </line>
            <g>
              <defs>
                <marker id="arrow" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto" markerUnits="strokeWidth">
                  <path d="M0,0 L0,6 L9,3 z" fill="#787878">
                  </path>
                </marker>
              </defs>
              <ellipse cx="351.25" cy="40" rx="68.75" ry="29.411764705882355" fill="#DFB140">
              </ellipse>
              <text x="351.25" y="43" text-anchor="middle" alignment-baseline="middle" fill="#000">
                  Body Fat: {weightLoss}%
                <tspan fill="#ea552b" dx="2" dy="4">
                ▼</tspan>
              </text>
              <path d="M361.25,70 Q396.42499999999995,147.5 411.59999999999997,225" fill="transparent" stroke="#787878" stroke-width="3" marker-end="url(#arrow)">
              </path>
            </g>
          </g>
        </svg>
      </div>
    </div>




  )
}