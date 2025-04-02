import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ArroIcon from "../../../components/ArroIcon";
import { motion } from "motion/react";

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
      className="flex items-center gap-4 elem bg-white rounded-xl border-b-2 border-gray-200 border-r border-l lg:p-[1vw] md:p-[2vw] xs:p-[4.5vw]"
    >
      <div className="lg:p-[3vw] md:p-[4vw] xs:p-[5.5vw]">
        <img
          className="lg:w-[4.5vw] md:w-[7.5vw] sm:w-[10vw] xs:w-[13vw]"
          src={data.icon}
          alt=""
        />
      </div>
      <div className="flex flex-col gap-5">
        <div>
          <h1
            id="aboutName"
            className="lg:text-[2.3vw] md:text-[3.4vw] xs:text-[4.9vw] font-lexend_deca text-themeBlue font-medium transition-all duration-700"
          >
            {data.name}
          </h1>
          <p className="lg:text-[1.3vw] md:text-[2.3vw] xs:text-[3.6vw] text-gray-500 font-jost tracking-wide">
            {data.disc}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p className="lg:text-[1.4vw] md:text-[2.4vw] xs:text-[3.7vw] text-gray-500">
            {data.projects} Projects
          </p>
          <Link
            id="icon"
            className="lg:p-[0.8vw] md:p-[1.6vw] sm:p-[2.1vw] xs:p-[2.6vw] duration-1000 rounded-full border border-gray-400"
          >
            <ArroIcon className={"lg:w-[0.7vw] md:w-[1.7vw] xs:w-[3.5vw]"} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutCardData;
