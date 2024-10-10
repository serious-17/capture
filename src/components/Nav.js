import React from "react";
import { Link } from "react-router-dom";
import style from "../styles/Nav.module.css";

const Nav = () => {
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
          <div className="line"></div>
        </li>
        <li>
          <Link className={style.navLinks} to="/work">
            Our Work
          </Link>
          <div className="line"></div>
        </li>
        <li>
          <Link className={style.navLinks} to="/contact">
            Contact Us
          </Link>
          <div className="line"></div>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
