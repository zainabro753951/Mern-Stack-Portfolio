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
      <div className="md:max-w-[80vw] mx-auto h-[70vh]">
        <div className="w-full h-full flex flex-col gap-4 items-center justify-center">
          <h1
            ref={aboutRef}
            style={{ willChange: "scale, transform, opacity" }}
            className="lg:text-[5.5vw] md:text-[6.5vw] xs:text-[8vw] lg:leading-[6vw] md:leading-[7vw] xs:leading-[8.5vw] font-bold font-lexend_deca"
          >
            <span className="gardient-text">About</span>
            &nbsp;
            <span className="gradient-stroke-text px-2" data-text="Me"></span>
          </h1>
          <div className="flex items-center gap-2 font-lexend_deca">
            <Link
              to={"/"}
              className="text-themePurple lg:text-[1.3vw] md:text-[2.3vw] xs:text-[3.6vw]"
            >
              Home
            </Link>
            <span className="text-3xl -rotate-90 text-black">
              <RiArrowDropDownLine />
            </span>
            <p className="lg:text-[1.3vw] md:text-[2.3vw] xs:text-[3.6vw] text-gray-500">
              About
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
