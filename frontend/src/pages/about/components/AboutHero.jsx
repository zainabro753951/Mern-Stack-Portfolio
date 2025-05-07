import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import GetTop from "../../../Context/GetTop";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const AboutHero = () => {
  const aboutRef = useRef(null);
  const { targetSection } = GetTop();

  gsap.config({ nullTargetWarn: false, force3D: true });
  useGSAP(() => {
    gsap.from(aboutRef.current, {
      scale: 0.7,
      y: -45,
      opacity: 0,
      transformOrigin: "center",
      duration: 1.5,
      force3D: true,
      ease: "back",
    });
  }, []);
  return (
    <div ref={targetSection} className="bg-aboutHero bg-cover bg-no-repeat">
      <div className="md:max-w-[80vw] mx-auto md:h-[70vh] xs:h-[50vh]">
        <div className="w-full h-full flex flex-col md:gap-[1vw] xs:gap-[2vw] items-center justify-center">
          <h1
            ref={aboutRef}
            style={{ willChange: "scale, transform, opacity" }}
            className="md:text-[5.5vw] sm:text-[6.5vw] xs:text-[7.5vw] md:leading-[6vw] sm:leading-[7vw] xs:leading-[8vw]  font-bold font-lexend_deca"
          >
            <span className="gardient-text">About</span>
            &nbsp;
            <span className="gradient-stroke-text px-2" data-text="Me"></span>
          </h1>
          <div className="flex items-center gap-2 font-lexend_deca">
            <Link
              to={"/"}
              className="text-themePurple md:text-[1.3vw] sm:text-[2.3vw] xs:text-[3.3vw] md:leading-[1.9vw] sm:leading-[2.9vw] xs:leading-[4.1vw]"
            >
              Home
            </Link>
            <span className="md:text-[2vw] sm:text-[3vw] xs:text-[4vw] -rotate-90 text-black">
              <RiArrowDropDownLine />
            </span>
            <p className="md:text-[1.3vw] sm:text-[2.3vw] xs:text-[3.3vw] md:leading-[1.9vw] sm:leading-[2.9vw] xs:leading-[4.1vw] text-gray-500">
              About
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
