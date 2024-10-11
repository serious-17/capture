import React from "react";
import Nav from "./components/Nav";
import AboutUs from "./pages/AboutUs";
import OurWork from "./pages/OurWork";
import "./styles/GlobalStyles.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" Component={AboutUs} />
        <Route path="/work" Component={OurWork} />
      </Routes>
    </div>
  );
}

export default App;
