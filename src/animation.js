export const pageAnim = {
  hidden: { y: 200 },
  show: {
    y: 0,
    transition: {
      duration: 0.75,
      staggerChildren: 0.25,
      when: "beforeChildren",
    },
  },
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
  show: { opacity: 1, transition: { duration: 0.5 } },
};

export const photoAnim = {
  hidden: { opacity: 0, scale: 1.2 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};
