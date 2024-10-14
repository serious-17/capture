import React from "react";
import { Link } from "react-router-dom";
import style from "../styles/Nav.module.css";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Nav = () => {
  const { pathname } = useLocation();

  return (
    <nav>
      <h1 className={style.logo}>
        <Link to="/">Capture</Link>
      </h1>
      <ul>
        <li>
          <Link className={style.navLinks} to="/">
            About Us
          </Link>
          <motion.div
            className={style.line}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/" ? "100%" : "0%" }}
            transition={{ duration: 1 }}
          ></motion.div>
        </li>
        <li>
          <Link className={style.navLinks} to="/work">
            Our Work
          </Link>
          <motion.div
            className={style.line}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/work" ? "100%" : "0%" }}
            transition={{ duration: 1 }}
          ></motion.div>
        </li>
        <li>
          <Link className={style.navLinks} to="/contact">
            Contact Us
          </Link>
          <motion.div
            className={style.line}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/contact" ? "100%" : "0%" }}
            transition={{ duration: 1 }}
          ></motion.div>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
