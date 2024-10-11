import React from "react";
import AboutSection from "../components/AboutSection";
import Services from "../components/Services";
import FaqSection from "../components/FaqSection";
import { motion } from "framer-motion";
import { pageAnim } from "../animation";

const AboutUs = () => {
  return (
    <motion.div variants={pageAnim} initial="hidden" animate="show">
      <AboutSection />
      <Services />
      <FaqSection />
    </motion.div>
  );
};

export default AboutUs;
