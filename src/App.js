// import MainLayout from "./layout";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import { UserProvider } from "./context/UserContext";

// function App() {
//   return (
//     <BrowserRouter>
//       <UserProvider>
//         <Routes>
//           <Route path="/page/:index" element={<MainLayout />} />
//           <Route path="*" element={<Navigate to="/page/1" replace />} />
//         </Routes>
//       </UserProvider>
//     </BrowserRouter>
//   );
// }

// export default App;




import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./layout";
import { UserProvider } from "./context/UserContext";
import { FormValidationProvider } from "./context/FormValidationContext";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <FormValidationProvider>
          <Routes>
            <Route path="/page/:index" element={<MainLayout />} />
            <Route path="*" element={<Navigate to="/page/1" replace />} />
          </Routes>
        </FormValidationProvider>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
