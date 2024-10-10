import React from "react";
import style from "../styles/AboutSection.module.css";
import photographer from "../images/home1.png";
import Wave from "./Wave";

const AboutSection = () => {
  return (
    <div className={style.about}>
      <div className={style.description}>
        <div className={style.title}>
          <h2>We work to make</h2>
          <h2>
            your <span>dreams</span>
          </h2>
          <h2>come true</h2>
        </div>
        <p>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills.
        </p>
        <button>Contact Us</button>
      </div>

      <div className={style.image}>
        <img src={photographer} alt="photographer" />
      </div>
      <Wave />
    </div>
  );
};

export default AboutSection;
