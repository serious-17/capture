import React, { useState } from "react";
import { motion } from "framer-motion";

const QuestionComp = ({ question, answer1, answer2, style }) => {
  const [isOpen, setIsopen] = useState(false);
  const toggleHandler = (e) => {
    setIsopen(!isOpen);
  };

  return (
    <motion.div layout onClick={toggleHandler} className={style.question}>
      <motion.h4 layout>{question}</motion.h4>
      <div
        style={{ display: `${isOpen ? "block" : "none"}` }}
        className={style.answer}
      >
        <p>{answer1}</p>
        <p>{answer2}</p>
      </div>
      <div className={style.line}></div>
    </motion.div>
  );
};

export default QuestionComp;
