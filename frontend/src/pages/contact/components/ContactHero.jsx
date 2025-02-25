import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import GetTop from "../../../Context/GetTop";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const ContactHero = () => {
  const { targetSection } = GetTop();
  const contactText = useRef(null);

  gsap.config({ force3D: true });

  useGSAP(() => {
    gsap.from(contactText.current, {
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
      <div className="max-w-[1200px] h-[70vh] mx-auto flex flex-col items-center lg:gap-[1.5vw] md:gap-[2.5vw] xs:gap-[4vw] justify-center">
        <h2
          id="blueGardient"
          ref={contactText}
          style={{ willChange: "scale, transform, opacity" }}
          className="lg:text-[5.5vw] md:text-[6.5vw] xs:text-[8vw] lg:leading-[6vw] md:leading-[7vw] xs:leading-[8.5vw] font-bold font-lexend_deca"
        >
          Contact
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
            Contact
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;
