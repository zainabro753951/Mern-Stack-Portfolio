import React, { useState } from "react";
import { motion } from "framer-motion";
import { HashLoader } from "react-spinners";

const HireMeBtn = ({ text, isLoading }) => {
  const [mouseHovered, setMouseHovered] = useState(false);

  return (
    <button
      onMouseEnter={() => setMouseHovered(true)}
      onMouseLeave={() => setMouseHovered(false)}
      className={`flex items-center justify-center h-0 ${
        isLoading
          ? "bg-transparent border-themePurple border"
          : "bg-themePurple"
      } md:px-[2vw] sm:px-[3vw] xs:px-[4vw] md:py-[1.7vw] sm:py-[2.7vw] xs:py-[3.4vw] md:rounded-[0.5vw] xs:rounded-[1vw]`}
    >
      {isLoading ? (
        <HashLoader
          color="#FF6D5A"
          size={30}
          title="Please waiting after response come"
        />
      ) : (
        <>
          <motion.div
            className="xl:flex xs:hidden leading-none w-fit flex-col items-center md:gap-[1.6vw] xs:gap-[2.6vw] relative font-bold md:text-[1.1vw] sm:text-[2.1vw] xs:text-[3.1vw] text-white"
            animate={{ y: mouseHovered ? -20 : 20 }}
            transition={{
              type: "spring",
              duration: 1,
              stiffness: 500,
              damping: 25,
            }}
          >
            <span>{text}</span>
            <span>{text}</span>
          </motion.div>
          <div
            className={`${
              isLoading ? "hidden" : "xl:hidden"
            } font-bold md:text-[1.1vw] sm:text-[2.1vw] xs:text-[3.1vw] text-white`}
          >
            {text}
          </div>
        </>
      )}
    </button>
  );
};

export default HireMeBtn;
