import React from "react";
import { questions } from "../data";
import QuestionComp from "./QuestionComp";
import { v4 } from "uuid";
import style from "../styles/FaqSection.module.css";
import { motion } from "framer-motion";
import useScroll from "./useScroll";
import { scrollAnim } from "../animation";

const FaqSection = () => {
  const faqs = questions();
  const [element, controls] = useScroll();

  return (
    <motion.div
      className={style.faqSection}
      ref={element}
      variants={scrollAnim}
      animate={controls}
      initial="hidden"
    >
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
    </motion.div>
  );
};

export default FaqSection;
