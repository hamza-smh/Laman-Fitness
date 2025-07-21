import MainLayout from "./layout";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <div>
      <BrowserRouter>
        <UserProvider>
          <MainLayout />
        </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
