import React from "react";
import style from "../styles/Contact.module.css";
import { motion } from "framer-motion";
import { fade, pageAnim, titleAnim } from "../animation";
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
      <div className="hide">
        <motion.h2 variants={titleAnim}>Get in touch.</motion.h2>
      </div>

      <ul className={style.navLinks}>
        <div className="hide">
          <motion.li variants={titleAnim}>
            <div className={style.circle}></div>
            <h3>
              Send Us a <span className={style.message}>Message</span>
            </h3>
          </motion.li>
        </div>

        <div className="hide">
          <motion.li variants={titleAnim}>
            <div className={style.circle}></div>
            <h3>Send an email</h3>
          </motion.li>
        </div>

        <div className="hide">
          <motion.li variants={titleAnim}>
            <div className={style.circle}></div>
            <h3>Social Media</h3>
          </motion.li>
        </div>
      </ul>
    </motion.div>
  );
};

export default ContactUs;
