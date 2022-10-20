import { ToastContainer } from "react-toastify";
import { Providers } from "./contexts/Providers";
import { AllRoutes } from "./Routes/AllRoutes";
import { GlobalStyle } from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Providers>
          <AllRoutes />
          <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            closeOnClick={true}
            pauseOnHover={true}
            draggable={true}
            theme="colored"
          />
        </Providers>
      </div>
    </>
  );
}

export default App;
