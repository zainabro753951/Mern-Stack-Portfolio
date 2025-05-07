import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import GetTop from "../../../Context/GetTop";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const PortfolioHero = () => {
  const { targetSection } = GetTop();

  gsap.config({ nullTargetWarn: false, force3D: true });
  const portfolioText = useRef(null);
  useGSAP(() => {
    gsap.from(portfolioText.current, {
      scale: 0.7,
      y: -45,
      opacity: 0,
      transformOrigin: "center",
      duration: 1.5,
      force3D: true,
      ease: "back",
    });
  });
  return (
    <div
      ref={targetSection}
      className="w-full bg-portfolioHero bg-cover bg-center bg-no-repeat"
    >
      <div className="md:max-w-[80vw] md:h-[70vh] xs:h-[35vh] mx-auto flex flex-col items-center md:gap-[1.3vw] xs:gap-[2.3vw] justify-center">
        <h2
          id="blueGardient"
          ref={portfolioText}
          style={{ willChange: "scale, transform, opacity" }}
          className="md:text-[5.5vw] sm:text-[6.5vw] xs:text-[7.5vw] md:leading-[6vw] sm:leading-[7vw] xs:leading-[8vw]  font-bold font-lexend_deca"
        >
          Portolio
        </h2>
        <div className="flex items-center gap-2 font-lexend_deca">
          <Link
            to={"/"}
            className="text-themePurple md:text-[1.3vw] sm:text-[2.3vw] xs:text-[3.3vw] "
          >
            Home
          </Link>
          <span className="md:text-[2vw] sm:text-[3vw] xs:text-[4vw] -rotate-90 text-gray-400">
            <RiArrowDropDownLine />
          </span>
          <p className="md:text-[1.3vw] sm:text-[2.3vw] xs:text-[3.3vw]  text-gray-400">
            Portfolio
          </p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioHero;
