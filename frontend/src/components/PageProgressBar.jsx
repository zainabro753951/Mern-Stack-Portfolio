import React from "react";
import { motion, useScroll } from "framer-motion";

const PageProgressBar = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{
        scaleX: scrollYProgress,
        width: "100%", // Add this
      }}
      className="z-[9999] h-2 origin-left fixed left-0 top-0 bg-themePurple"
    />
  );
};

export default PageProgressBar;
