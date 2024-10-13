import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

const useScroll = () => {
  const [element, view] = useInView({ threshold: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (view) {
      controls.start("show");
    } else {
      controls.start("hidden");
    }
  });

  return [element, controls];
};

export default useScroll;
