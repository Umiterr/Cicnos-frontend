import "./App.css";
import React, { useEffect, useState, useContext } from "react";
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
import Login from "./components/Login";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import api from "../src/utils/api";
import CurrentUserContext from "./contexts/CurrentUserContext";

import {
  Route,
  Routes,
  BrowserRouter as Router,
  useNavigate,
} from "react-router-dom";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const Navigate = useNavigate();
  const currentPath = window.location.pathname;

  const shouldShowHeader = () => {
    return currentPath !== "/tienda" && currentPath !== "/profile";
  };

  const fetchUserData = async () => {
    try {
      const userInfo = await api.getUserInfo();
      setLoggedIn(true);
    } catch (error) {
      console.error("Error fetching current user data:", error);
      setLoggedIn(false);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const userInfo = await api.getUserInfo();
        setCurrentUser(userInfo);
        setLoggedIn(true);
      } catch (error) {
        console.error("Error fetching current user data:", error);
        setLoggedIn(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once after the initial render

  useEffect(() => {
    console.log(currentUser);
  }, [currentUser]); // Log the updated currentUser whenever it changes

  return (
    <CurrentUserContext.Provider value={currentUser}>
      {shouldShowHeader() && <Header />}
      {!shouldShowHeader() && currentPath !== "/profile" && <HeaderShop />}

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

        <Route
          path="/signup"
          element={
            loggedIn ? (
              <Navigate to="/profile" replace />
            ) : (
              <Signup onLogin={fetchUserData} />
            )
          }
        />
        <Route
          path="/signin"
          element={
            loggedIn ? (
              <Navigate to="/profile" replace />
            ) : (
              <Login onLogin={fetchUserData} />
            )
          }
        />
        <Route
          path="/profile"
          element={
            loggedIn ? (
              <Profile user={currentUser} />
            ) : (
              <Navigate to="/signin" />
            )
          }
        />
      </Routes>

      <img src="logo.svg" alt="Descripción de la imagen" className="BG_logo" />

      <Footer />
    </CurrentUserContext.Provider>
  );
}

export default App;
