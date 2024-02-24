import "./App.css";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <>
      <Header />
      <LandingPage />
      <img
        src="../public/logo.svg"
        alt="Descripción de la imagen"
        className="BG_logo"
      />
    </>
  );
}

export default App;
