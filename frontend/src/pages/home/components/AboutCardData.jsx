import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ArroIcon from "../../../components/ArroIcon";
import { motion } from "motion/react";
import OptimizedImage from "../../../Common/OptimiseImage";

const AboutCardData = ({ data, idx }) => {
  return (
    <motion.div
      whileHover={{
        rotateZ: -12,
        boxShadow: "0 0 20px #d1d1d1, 0 0 80px #d1d1d1",
      }}
      style={{
        willChange: "transform", // Informs browser to optimize
        backfaceVisibility: "hidden", // Helps on mobile devices
      }}
      transition={{
        duration: 0.6,
        ease: "easeInOut",
        stiffness: 100, // Controls speed
        type: "spring",
      }}
      className="flex items-center md:gap-[0.4vw] xs:gap-[1vw] bg-white md:rounded-[1vw] xs:rounded-[2vw] border-b-2 border-gray-200 border-r border-l lg:p-[1vw] md:p-[2vw] xs:p-[4.5vw]"
    >
      <div className="md:p-[3vw] xs:p-[4vw]">
        <OptimizedImage className="md:w-[4.5vw] xs:w-[6.5vw]" src={data.icon} />
      </div>
      <div className="flex flex-col md:gap-[0.8vw] xs:gap-[1.8vw]">
        <div>
          <h1
            id="aboutName"
            className="md:text-[2.3vw] xs:text-[3.4vw] font-lexend_deca text-themeBlue font-medium transition-all duration-700"
          >
            {data.name}
          </h1>
          <p className="md:text-[1.3vw] xs:text-[2.3vw] text-gray-500 font-jost tracking-wide">
            {data.disc}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p className="md:text-[1.4vw] xs:text-[2.4vw] text-gray-500">
            {data.projects} Projects
          </p>
          <Link
            id="icon"
            className="md:p-[0.8vw] xs:p-[1.8vw] duration-1000 rounded-full border border-gray-400"
          >
            <ArroIcon className={"md:w-[0.7vw] xs:w-[1.7vw]"} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutCardData;
