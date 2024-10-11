import React from "react";
import Nav from "./components/Nav";
import AboutUs from "./pages/AboutUs";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";
import "./styles/GlobalStyles.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" Component={AboutUs} />
        <Route path="/work" Component={OurWork} />
        <Route path="/contact" Component={ContactUs} />
      </Routes>
    </div>
  );
}

export default App;
