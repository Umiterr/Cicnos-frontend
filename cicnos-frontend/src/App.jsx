import "./App.css";
import React from "react";
import { useEffect } from "react";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import Divition from "./components/Divition";
import Footer from "./components/Footer";
import TrendingProducts from "./components/Trending";
import Shop from "./components/Shop";
import Deco from "./components/Deco";
import Moda from "./components/Moda";
import Publicidad from "./components/Publicidad";
import Imprime from "./components/Imprime";
import About from "./components/AboutUs";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import ShopNav from "./components/ShopNav";
import DecoSpecs from "./components/DecoSpecs";
import Features from "./components/Features";
import AdSpecs from "./components/AdSpecs";
import FashSpecs from "./components/FashSpecs";
import HeaderShop from "./components/HeaderShop";

import {
  Route,
  Routes,
  BrowserRouter as Router,
  useNavigate,
} from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const currentPath = window.location.pathname;

  const shouldShowHeader = () => {
    return currentPath !== "/tienda";
  };

  return (
    <>
      {shouldShowHeader() && <Header />}
      {!shouldShowHeader() && <HeaderShop />}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <LandingPage />
              <Divition />
              <Features />

              <Divition />
              <TrendingProducts />
            </>
          }
        />

        <Route
          path="/decoracion"
          element={
            <>
              <Deco />
              <Divition />
              <DecoSpecs />
            </>
          }
        />
        <Route
          path="/moda"
          element={
            <>
              <Moda />
              <Divition />
              <FashSpecs />
            </>
          }
        />
        <Route
          path="/publicidad"
          element={
            <>
              <Publicidad />
              <Divition />
              <AdSpecs />
            </>
          }
        />
        <Route
          path="/imprime-tu-diseno"
          element={
            <>
              <Imprime />
            </>
          }
        />
        <Route
          path="/tienda"
          element={
            <>
              {/* <ShopNav /> */}
              <Shop />
            </>
          }
        />
        <Route
          path="/quienes-somos"
          element={
            <>
              <About />
            </>
          }
        />
        <Route
          path="/contacto"
          element={
            <>
              <Contact />
            </>
          }
        />
        <Route
          path="/preguntas-frecuentes"
          element={
            <>
              <FAQ />
            </>
          }
        />
        <Route path="/login" element={""} />
      </Routes>

      <img src="logo.svg" alt="Descripción de la imagen" className="BG_logo" />

      <Footer />
    </>
  );
}

export default App;
