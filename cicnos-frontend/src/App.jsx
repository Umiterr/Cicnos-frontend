import { useState } from "react";
import reactLogo from "./assets/react.svg";

import "./App.css";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header></Header>
      <LandingPage></LandingPage>
    </>
  );
}

export default App;
