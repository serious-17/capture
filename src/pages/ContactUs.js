import React from "react";
import style from "../styles/Contact.module.css";

const ContactUs = () => {
  return (
    <div className={style.contact}>
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
    </div>
  );
};

export default ContactUs;
