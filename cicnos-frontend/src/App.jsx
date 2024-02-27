import "./App.css";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import Divition from "./components/Divition";
import Footer from "./components/Footer";
import TrendingProducts from "./components/Trending";

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
      <Divition />
      <TrendingProducts />
      <Footer />
    </>
  );
}

export default App;
