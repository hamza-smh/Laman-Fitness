export const PredictionGraph = () =>{
    return(
        <div className="recharts-responsive-container" 
          width="450" height="300" 
          style={{width: "90%", height: "300px", minWidth: "0px"}}>
            <div className="recharts-wrapper" role="region" 
                style={{position: "relative", cursor: "default", width: "450px", height: "300px"}}>
                <svg className="recharts-surface" width="450" height="300" viewBox="0 0 450 300">
                <title>
                </title>
                <desc>
                </desc>
                <defs>
                  <clipPath id="recharts1-clip">
                    <rect x="55" y="10" height="260" width="365"></rect>
                  </clipPath>
                </defs>
                <defs>
                  <linearGradient id="colorWeight" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stop-color="#406EDF" stop-opacity="0.8">
                    </stop>
                    <stop offset="95%" stop-color="#406EDF" stop-opacity="0">
                    </stop>
                  </linearGradient>
                </defs>
                <g class="recharts-layer recharts-cartesian-axis recharts-xAxis xAxis">
                  <line orientation="bottom" width="365" height="30" x="55" y="270" className="recharts-cartesian-axis-line" stroke="#666" fill="none" x1="55" y1="270" x2="420" y2="270"></line>
                    <g className="recharts-cartesian-axis-ticks">
                    <g class="recharts-layer recharts-cartesian-axis-tick">
                  <line orientation="bottom" width="365" height="30" x="55" y="270" className="recharts-cartesian-axis-tick-line" stroke="#666" fill="none" x1="55" y1="276" x2="55" y2="270"></line>
                  <text orientation="bottom" width="365" height="30" x="55" y="278" stroke="none" fill="#666" className="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle">
                    <tspan x="55" dy="0.71em">
                      Jul
                    </tspan>
                  </text>
                  </g>
                  <g className="recharts-layer recharts-cartesian-axis-tick">
                  <line orientation="bottom" width="365" height="30" x="55" y="270" className="recharts-cartesian-axis-tick-line" stroke="#666" fill="none" x1="146.9918699186992" y1="276" x2="146.9918699186992" y2="270"></line>
                  <text orientation="bottom" width="365" height="30" x="146.9918699186992" y="278" stroke="none" fill="#666" class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle">
                    <tspan x="146.9918699186992" dy="0.71em">
                      Aug
                    </tspan>
                  </text></g>
                  <g class="recharts-layer recharts-cartesian-axis-tick">
                  <line orientation="bottom" width="365" height="30" x="55" y="270" class="recharts-cartesian-axis-tick-line" stroke="#666" fill="none" x1="238.98373983739836" y1="276" x2="238.98373983739836" y2="270">
                  </line>
                  <text orientation="bottom" width="365" height="30" x="238.98373983739836" y="278" stroke="none" fill="#666" className="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle">
                  <tspan x="238.98373983739836" dy="0.71em">
                    Sep
                  </tspan>
                  </text>
                  </g>
                  <g class="recharts-layer recharts-cartesian-axis-tick">
                  <line orientation="bottom" width="365" height="30" x="55" y="270" className="recharts-cartesian-axis-tick-line" stroke="#666" fill="none" x1="328.0081300813008" y1="276" x2="328.0081300813008" y2="270">
                  </line>
                  <text orientation="bottom" width="365" height="30" x="328.0081300813008" y="278" stroke="none" fill="#666" className="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle">
                  <tspan x="328.0081300813008" dy="0.71em">
                    Oct
                  </tspan>
                  </text>
                  </g>
                  <g class="recharts-layer recharts-cartesian-axis-tick">
                  <line orientation="bottom" width="365" height="30" x="55" y="270" className="recharts-cartesian-axis-tick-line" stroke="#666" fill="none" x1="420" y1="276" x2="420" y2="270">
                  </line>
                  <text orientation="bottom" width="365" height="30" x="420" y="278" stroke="none" fill="#666" className="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle">
                  <tspan x="420" dy="0.71em">
                  Nov
                  </tspan>
                  </text>
                  </g>
                  </g>
                  </g>
                  <g class="recharts-layer recharts-cartesian-axis recharts-yAxis yAxis">
                  <line width="55" orientation="left" height="260" x="0" y="10" className="recharts-cartesian-axis-line" stroke="#666" fill="none" x1="55" y1="10" x2="55" y2="270">
                  </line>
                  <g class="recharts-cartesian-axis-ticks">
                  <g class="recharts-layer recharts-cartesian-axis-tick">
                  <line width="55" orientation="left" height="260" x="0" y="10" class="recharts-cartesian-axis-tick-line" stroke="#666" fill="none" x1="49" y1="270" x2="55" y2="270"></line><text width="55" orientation="left" height="260" x="47" y="270" stroke="none" fill="#666" class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="end"><tspan x="47" dy="0.355em">0</tspan></text></g><g class="recharts-layer recharts-cartesian-axis-tick">
                  <line width="55" orientation="left" height="260" x="0" y="10" class="recharts-cartesian-axis-tick-line" stroke="#666" fill="none" x1="49" y1="218" x2="55" y2="218"></line><text width="55" orientation="left" height="260" x="47" y="218" stroke="none" fill="#666" class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="end"><tspan x="47" dy="0.355em">1</tspan></text></g><g class="recharts-layer recharts-cartesian-axis-tick">
                  <line width="55" orientation="left" height="260" x="0" y="10" class="recharts-cartesian-axis-tick-line" stroke="#666" fill="none" x1="49" y1="166" x2="55" y2="166"></line><text width="55" orientation="left" height="260" x="47" y="166" stroke="none" fill="#666" class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="end"><tspan x="47" dy="0.355em">2</tspan></text></g><g class="recharts-layer recharts-cartesian-axis-tick"><line width="55" orientation="left" height="260" x="0" y="10" class="recharts-cartesian-axis-tick-line" stroke="#666" fill="none" x1="49" y1="114" x2="55" y2="114"></line><text width="55" orientation="left" height="260" x="47" y="114" stroke="none" fill="#666" class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="end"><tspan x="47" dy="0.355em">3</tspan></text></g><g class="recharts-layer recharts-cartesian-axis-tick"><line width="55" orientation="left" height="260" x="0" y="10" class="recharts-cartesian-axis-tick-line" stroke="#666" fill="none" x1="49" y1="61.999999999999986" x2="55" y2="61.999999999999986"></line><text width="55" orientation="left" height="260" x="47" y="61.999999999999986" stroke="none" fill="#666" class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="end"><tspan x="47" dy="0.355em">4</tspan></text></g><g class="recharts-layer recharts-cartesian-axis-tick"><line width="55" orientation="left" height="260" x="0" y="10" class="recharts-cartesian-axis-tick-line" stroke="#666" fill="none" x1="49" y1="10" x2="55" y2="10"></line><text width="55" orientation="left" height="260" x="47" y="10" stroke="none" fill="#666" class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="end"><tspan x="47" dy="0.355em">5</tspan></text></g></g><text offset="5" x="5" y="140" fill="#808080" transform="rotate(-90, 5, 140)" class="recharts-text recharts-label" text-anchor="start"><tspan x="5" dy="0.355em">Muscle (kg)</tspan></text></g><g class="recharts-layer recharts-area"><g class="recharts-layer"><defs><clipPath id="animationClipPath-recharts-area-3"><rect x="55" y="0" width="365" height="274"></rect></clipPath></defs><g class="recharts-layer" clip-path="url(#animationClipPath-recharts-area-3)"><g class="recharts-layer">
                  <path stroke-width="4" fill-opacity="1" fill="url(#colorWeight)" width="365" height="260" stroke="none" className="recharts-curve recharts-area-area" d="M55,270C85.664,252.667,116.328,235.333,146.992,218C177.656,200.667,208.32,183.627,238.984,166C268.659,148.942,298.333,139.308,328.008,114C358.672,87.848,389.336,48.924,420,10L420,270C389.336,270,358.672,270,328.008,270C298.333,270,268.659,270,238.984,270C208.32,270,177.656,270,146.992,270C116.328,270,85.664,270,55,270Z">
                  </path>
                  <path stroke="#406EDF" stroke-width="4" fill-opacity="1" fill="none" width="365" height="260" className="recharts-curve recharts-area-curve" d="M55,270C85.664,252.667,116.328,235.333,146.992,218C177.656,200.667,208.32,183.627,238.984,166C268.659,148.942,298.333,139.308,328.008,114C358.672,87.848,389.336,48.924,420,10">
                  </path>
                  </g>
                  </g>
                  </g>
                  </g>
                  <g class="recharts-layer recharts-reference-line">
                  <line x="1763883694295" stroke="#FF0000" stroke-width="0" fill="none" fill-opacity="1" x1="420" y1="270" x2="420" y2="10" className="recharts-reference-line-line">
                  </line>
                  <g>
                  <defs>
                  <marker id="arrow" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto" markerUnits="strokeWidth">
                  <path d="M0,0 L0,6 L9,3 z" fill="#535353">
                  </path>
                  </marker>
                  </defs>
                  <ellipse cx="328.75" cy="235" rx="91.25" ry="29.411764705882355" fill="#DFB140">
                  </ellipse>
                  <text x="328.75" y="238" text-anchor="middle" alignment-baseline="middle" fill="#000">Muscle Gained: 5 kg<tspan fill="#6aa84f" dx="2" dy="4">
                  ▲
                  </tspan>
                  </text>
                  <path d="M338.75,200 Q385.17499999999995,120 411.59999999999997,40" fill="transparent" stroke="#535353" stroke-width="3" marker-end="url(#arrow)">
                  </path>
                  </g>
                  </g>
                  </svg>
                  </div>
                  </div>



    )
}