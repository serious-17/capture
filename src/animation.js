export const pageAnim = {
  hidden: { y: 300, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.75,
      staggerChildren: 0.25,
      when: "beforeChildren",
    },
  },
  exit: { opacity: 0, transition: { duration: 0.5 } },
};

export const waveAnim = {
  hidden: { pathOffset: 1, pathLength: 0 },
  show: {
    pathOffset: 0,
    pathLength: 1,
    transition: {
      duration: 1,
    },
  },
};

export const titleAnim = {
  hidden: { y: "100%" },
  show: { y: "0%", transition: { duration: 0.5 } },
};

export const fade = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.75 } },
};

export const photoAnim = {
  hidden: { opacity: 0, scale: 1.2 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

export const scrollAnim = {
  hidden: {
    opacity: 0,
    scale: 1.1,
    transition: { duration: 0.5 },
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

export const lineAnim = {
  hidden: { width: "0%" },
  show: { width: "100%", transition: { duration: 1 } },
};

export const slideAnim = {
  hidden: { x: "-130%", skew: "45deg" },
  show: { x: "100%", skew: "0deg", transition: { duration: 1 } },
};

export const extract = {
  hidden: { opacity: 1, pointerEvents: "all" },
  show: {
    opacity: 1,
    pointerEvents: "none",
    transition: { staggerChildren: 0.12, ease: "easeOut" },
  },
};
