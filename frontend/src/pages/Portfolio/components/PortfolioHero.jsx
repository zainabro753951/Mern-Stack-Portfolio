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
  }, []);

  return (
    <div
      ref={targetSection}
      className="w-full bg-portfolioHero bg-cover bg-center bg-no-repeat"
    >
      <div className="md:max-w-[80vw] h-[70vh] mx-auto flex flex-col items-center gap-7 justify-center">
        <h2
          id="blueGardient"
          ref={portfolioText}
          style={{ willChange: "scale, transform, opacity" }}
          className="lg:text-[5.5vw] md:text-[6.5vw] xs:text-[8vw] lg:leading-[6vw] md:leading-[7vw] xs:leading-[8.5vw] font-semibold font-lexend_deca"
        >
          Portolio
        </h2>
        <div className="flex items-center gap-2 font-lexend_deca">
          <Link
            to={"/"}
            className="text-themePurple lg:text-[1.3vw] md:text-[2.3vw] xs:text-[3.6vw]"
          >
            Home
          </Link>
          <span className="text-3xl -rotate-90 text-gray-400">
            <RiArrowDropDownLine />
          </span>
          <p className="lg:text-[1.3vw] md:text-[2.3vw] xs:text-[3.6vw] text-gray-400">
            Portfolio
          </p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioHero;
