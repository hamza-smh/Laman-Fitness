 import "./LiquidLoader.css";

// const LiquidLoader = ({ progress = 75 }) => {
//   return (
//     <div className="progressbar-container">
//       <div className="progressbar-track">
//         <div
//           className="progressbar-liquid"
//           style={{ width: `${progress}%` }}
//         >
//           <div className="liquid-wave" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LiquidLoader;



const LiquidLoader = ()=>{
 return(
  <div  className = "loadingContainer"
  style = {{
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      maxHeight: "150px"
    }}>
    <div className="battery">
      <div className="liquid">
          <div style={{transform:"rotate(-90deg)",position:"absolute",top:"150px",color:"#fff",right:"-40px",fontSize:"25px"}}>
            Calculating......
          </div>
        </div>
    </div>
  </div>

 ) 
}
export default LiquidLoader;