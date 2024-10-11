import React from "react";
import { questions } from "../data";
import QuestionComp from "./QuestionComp";
import { v4 } from "uuid";
import style from "../styles/FaqSection.module.css";

const FaqSection = () => {
  const faqs = questions();

  return (
    <div className={style.faqSection}>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      {faqs.map((faq) => (
        <QuestionComp
          question={faq.question}
          answer1={faq.answer1}
          answer2={faq.answer2}
          key={v4()}
          style={style}
        />
      ))}
    </div>
  );
};

export default FaqSection;
