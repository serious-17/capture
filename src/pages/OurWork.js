import React from "react";
import athlete from "../images/athlete-small.png";
import racer from "../images/theracer-small.png";
import goodTimes from "../images/goodtimes-small.png";
import style from "../styles/OurWork.module.css";

import { Link } from "react-router-dom";
import useScroll from "../components/useScroll";
import { motion } from "framer-motion";
import { lineAnim, scrollAnim } from "../animation";

const OurWork = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  const [element3, controls3] = useScroll();

  return (
    <div className={style.work}>
      <motion.div
        className={style.movie}
        ref={element}
        variants={scrollAnim}
        animate={controls}
        initial="hidden"
      >
        <h2>The Athlete</h2>
        <motion.div
          className={style.line}
          ref={element}
          variants={lineAnim}
          animate={controls}
          initial="hidden"
        ></motion.div>
        <Link to={"/work/the-athlete"}>
          <img src={athlete} alt="the-athlete" />
        </Link>
      </motion.div>

      <motion.div
        className={style.movie}
        ref={element2}
        variants={scrollAnim}
        animate={controls2}
        initial="hidden"
      >
        <h2>The Racer</h2>
        <motion.div
          className={style.line}
          ref={element2}
          variants={lineAnim}
          animate={controls2}
          initial="hidden"
        ></motion.div>
        <Link to={"/work/the-racer"}>
          <img src={racer} alt="the-racer" />
        </Link>
      </motion.div>

      <motion.div
        className={style.movie}
        ref={element3}
        variants={scrollAnim}
        animate={controls3}
        initial="hidden"
      >
        <h2>Good Times</h2>
        <motion.div
          className={style.line}
          ref={element3}
          variants={lineAnim}
          animate={controls3}
          initial="hidden"
        ></motion.div>
        <Link to={"/work/good-times"}>
          <img src={goodTimes} alt="good-times" />
        </Link>
      </motion.div>
    </div>
  );
};

export default OurWork;
