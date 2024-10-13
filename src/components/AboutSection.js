import React from "react";
import style from "../styles/AboutSection.module.css";
import photographer from "../images/home1.png";
import Wave from "./Wave";

import { motion } from "framer-motion";
import { fade, photoAnim, titleAnim } from "../animation";

const AboutSection = () => {
  return (
    <div className={style.about}>
      <div className={style.description}>
        <div className={style.title}>
          <div className="hide">
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </div>
          <div className="hide">
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span>
            </motion.h2>
          </div>
          <div className="hide">
            <motion.h2 variants={titleAnim}>come true</motion.h2>
          </div>
        </div>
        <motion.p variants={fade}>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills.
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </div>

      <div className={style.image}>
        <motion.img
          variants={photoAnim}
          src={photographer}
          alt="photographer"
        />
      </div>
      <Wave />
    </div>
  );
};

export default AboutSection;
