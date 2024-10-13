import React from "react";
import AboutSection from "../components/AboutSection";
import Services from "../components/Services";
import FaqSection from "../components/FaqSection";
import { motion } from "framer-motion";
import { pageAnim } from "../animation";
import { ScrollTop } from "../components/ScrollTop";

const AboutUs = () => {
  return (
    <motion.div variants={pageAnim} exit="exit" initial="hidden" animate="show">
      <ScrollTop />
      <AboutSection />
      <Services />
      <FaqSection />
    </motion.div>
  );
};

export default AboutUs;
