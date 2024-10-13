import React from "react";
import style from "../styles/Contact.module.css";
import { motion } from "framer-motion";
import { pageAnim } from "../animation";
import { ScrollTop } from "../components/ScrollTop";

const ContactUs = () => {
  return (
    <motion.div
      className={style.contact}
      variants={pageAnim}
      exit="exit"
      initial="hidden"
      animate="show"
    >
      <ScrollTop />
      <h2>Get in touch.</h2>
      <ul className={style.navLinks}>
        <li>
          <div className={style.circle}></div>
          <h3>Send Us a Message</h3>
        </li>
        <li>
          <div className={style.circle}></div>
          <h3>Send an email</h3>
        </li>
        <li>
          <div className={style.circle}></div>
          <h3>Social Media</h3>
        </li>
      </ul>
    </motion.div>
  );
};

export default ContactUs;
