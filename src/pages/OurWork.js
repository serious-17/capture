import React from "react";
import athlete from "../images/athlete-small.png";
import racer from "../images/theracer-small.png";
import goodTimes from "../images/goodtimes-small.png";
import style from "../styles/OurWork.module.css";

const OurWork = () => {
  return (
    <div className={style.work}>
      <div className={style.movie}>
        <h2>The Athlete</h2>
        <div className={style.line}></div>
        <img src={athlete} alt="the-athlete" />
      </div>

      <div className={style.movie}>
        <h2>The Racer</h2>
        <div className={style.line}></div>
        <img src={racer} alt="the-racer" />
      </div>

      <div className={style.movie}>
        <h2>Good Times</h2>
        <div className={style.line}></div>
        <img src={goodTimes} alt="good-times" />
      </div>
    </div>
  );
};

export default OurWork;
