import React from "react";
import Nav from "./components/Nav";
import AboutUs from "./pages/AboutUs";
import OurWork from "./pages/OurWork";
import MovieDetail from "./pages/MovieDetail";
import ContactUs from "./pages/ContactUs";
import "./styles/GlobalStyles.css";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <div className="App">
      <Nav />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" Component={AboutUs} />
          <Route path="/work" Component={OurWork} />
          <Route path="/work/:id" Component={MovieDetail} />
          <Route path="/contact" Component={ContactUs} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
