import { ToastContainer } from "react-toastify";
import { AllRoutes } from "./Routes/AllRoutes";
import { GlobalStyle } from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyle />
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
        <AllRoutes />
      </div>
    </>
  );
}

export default App;
