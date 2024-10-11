import React from "react";
import athlete from "../images/athlete-small.png";
import racer from "../images/theracer-small.png";
import goodTimes from "../images/goodtimes-small.png";
import style from "../styles/OurWork.module.css";

import { Link } from "react-router-dom";

const OurWork = () => {
  return (
    <div className={style.work}>
      <div className={style.movie}>
        <h2>The Athlete</h2>
        <div className={style.line}></div>
        <Link to={"/work/the-athlete"}>
          <img src={athlete} alt="the-athlete" />
        </Link>
      </div>

      <div className={style.movie}>
        <h2>The Racer</h2>
        <div className={style.line}></div>
        <Link to={"/work/the-racer"}>
          <img src={racer} alt="the-racer" />
        </Link>
      </div>

      <div className={style.movie}>
        <h2>Good Times</h2>
        <div className={style.line}></div>
        <Link to={"/work/good-times"}>
          <img src={goodTimes} alt="good-times" />
        </Link>
      </div>
    </div>
  );
};

export default OurWork;
