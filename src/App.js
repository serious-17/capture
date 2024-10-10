import React from "react";
import Nav from "./components/Nav";
import AboutUs from "./pages/AboutUs";
import "./styles/GlobalStyles.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <AboutUs />
    </div>
  );
}

export default App;
