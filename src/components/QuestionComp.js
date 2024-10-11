import React from "react";

const QuestionComp = ({ question, answer1, answer2, style }) => {
  return (
    <div className={style.question}>
      <h4>{question}</h4>
      <div className={style.answer}>
        <p>{answer1}</p>
        <p>{answer2}</p>
      </div>
      <div className={style.line}></div>
    </div>
  );
};

export default QuestionComp;
