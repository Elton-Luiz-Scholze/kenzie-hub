import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { AllRoutes } from "./Routes/AllRoutes";

function App() {
  const [user, setUser] = useState({});
  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        closeOnClick={true}
        pauseOnHover={true}
        draggable={true}
        progress={undefined}
        theme="colored"
      />
      <AllRoutes user={user} setUser={setUser} />
    </div>
  );
}

export default App;
