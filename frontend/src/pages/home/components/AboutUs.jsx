import React, { useRef } from "react";
import { Link } from "react-router-dom";
import HireMeBtn from "../../../components/HireMeBtn";
import { motion } from "framer-motion";
import AboutCardData from "./AboutCardData";

const AboutUs = ({ content, isLoading }) => {
  const AboutHead = useRef(null);

  let cardData = [
    {
      icon: "/imgs/about1.svg",
      name: "Front-End",
      disc: "lorem Ipsum dolor sit amet, consectetur",
      projects: 185,
    },
    {
      icon: "/imgs/about2.svg",
      name: "Back-End",
      disc: "lorem Ipsum dolor sit amet, consectetur",
      projects: 148,
    },
    {
      icon: "/imgs/about3.svg",
      name: "Web Architecture",
      disc: "lorem Ipsum dolor sit amet, consectetur",
      projects: 135,
    },
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };

  const cardItem = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const headingAnimation = {
    hidden: {
      y: -90,
      opacity: 0,
      rotate: 45,
      transformOrigin: "center",
    },
    visible: {
      y: 0,
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.1, 0.25, 1], // Similar to power4 in GSAP
      },
    },
  };

  return (
    <div className="w-full bg-[#F9FBFF]">
      <div className="md:max-w-[80vw] mx-auto md:py-[6vw] xs:py-[7vw] px-5 place-items-center grid lg:grid-cols-2 md:gap-[6vw] xs:gap-[7vw] place-content-center items-center">
        {isLoading ? (
          <div>
            {/* Loading skeleton remains the same */}
            <div className="flex items-center md:gap-[0.5vw] xs:gap-[1vw]">
              <div className="lg:w-[6vw] md:w-[8vw] xs:w-[12vw] h-[1.5vw] bg-gray-200 rounded animate-pulse"></div>
              <div className="lg:w-[2.2vw] md:w-[3.2vw] xs:w-[4.7vw] aspect-square bg-gray-200 rounded-full animate-pulse"></div>
            </div>
            <div className="overflow-hidden space-y-2">
              <div className="lg:w-[25vw] md:w-[35vw] xs:w-[45vw] h-[3.6vw] bg-gray-200 rounded animate-pulse"></div>
              <div className="lg:w-[30vw] md:w-[40vw] xs:w-[50vw] h-[3.6vw] bg-gray-200 rounded animate-pulse"></div>
            </div>
            <div className="py-8 space-y-3">
              <div className="w-full h-[1.9vw] bg-gray-200 rounded animate-pulse"></div>
              <div className="w-full h-[1.9vw] bg-gray-200 rounded animate-pulse"></div>
              <div className="w-[80%] h-[1.9vw] bg-gray-200 rounded animate-pulse"></div>
            </div>
            <div className="lg:w-[10vw] md:w-[15vw] xs:w-[20vw] h-[3vw] bg-gray-200 rounded animate-pulse"></div>
          </div>
        ) : (
          <div>
            <div className="flex items-center md:gap-[0.5vw] xs:gap-[1vw] pb-2">
              <h1 className="md:text-[1.3vw] xs:text-[2.3vw] text-themeBlue font-jost">
                About Me
              </h1>
              <div id="rotateAbout">
                <img
                  src="/imgs/About/aboutSvg.png"
                  className="md:w-[2.2vw] xs:w-[4.2vw]"
                  alt=""
                  loading="lazy"
                />
              </div>
            </div>
            <div className="overflow-hidden">
              <motion.h2
                ref={AboutHead}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={headingAnimation}
                className="md:text-[2.6vw] will-change-transform xs:text-[3.3vw] font-semibold md:leading-[3.1vw] xs:leading-[4vw] font-lexend_deca"
              >
                {content.aboutHeadline}
              </motion.h2>
            </div>
            <p className="md:py-[1.5vw] xs:py-[2.5vw] text-gray-500 md:text-[1.3vw] xs:text-[2.3vw] md:leading-[1.9vw] xs:leading-[3.5vw] font-jost tracking-wide leading-7">
              {content.about}
            </p>
            <Link>
              <HireMeBtn text={"Hire Me"} />
            </Link>
          </div>
        )}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
          className="flex flex-col lg:gap-[2vw] md:gap-[3vw] xs:gap-[4.5vw]"
        >
          {cardData.map((data, idx) => (
            <motion.div key={idx} variants={cardItem} className="aboutCards">
              <AboutCardData data={data} idx={idx} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
