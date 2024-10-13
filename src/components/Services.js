import React from "react";
import style from "../styles/Services.module.css";
import diaphragm from "../images/diaphragm.svg";
import clock from "../images/clock.svg";
import teamwork from "../images/teamwork.svg";
import money from "../images/money.svg";
import camera from "../images/home2.png";
import { motion } from "framer-motion";
import useScroll from "./useScroll";
import { scrollAnim } from "../animation";

const Services = () => {
  const [element, controls] = useScroll();

  return (
    <motion.div
      className={style.services}
      ref={element}
      variants={scrollAnim}
      initial="hidden"
      animate={controls}
    >
      <div className={style.description}>
        <h2>
          High <span>quality</span> services
        </h2>
        <div className={style.cards}>
          <div className={style.card}>
            <div className={style.icon}>
              <img src={clock} alt="efficient" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className={style.card}>
            <div className={style.icon}>
              <img src={teamwork} alt="teamwork" />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className={style.card}>
            <div className={style.icon}>
              <img src={diaphragm} alt="diaphragm" />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className={style.card}>
            <div className={style.icon}>
              <img src={money} alt="affordable" />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
      <div className={style.image}>
        <img src={camera} alt="camera" />
      </div>
    </motion.div>
  );
};

export default Services;
