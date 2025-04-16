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
      <div className="max-w-[1200px] md:h-[70vh] xs:h-[50vw] mx-auto flex flex-col items-centermd:gap-[1vw] xs:gap-[2vw] justify-center items-center">
        <h2
          id="blueGardient"
          ref={contactText}
          style={{ willChange: "scale, transform, opacity" }}
          className="md:text-[5.5vw] xs:text-[6.5vw] md:leading-[6vw] xs:leading-[7vw] font-bold font-lexend_deca"
        >
          Contact
        </h2>
        <div className="flex items-center gap-2 font-lexend_deca">
          <Link
            to={"/"}
            className="text-themePurple md:text-[1.3vw] xs:text-[2.3vw] "
          >
            Home
          </Link>
          <span className="md:text-[2vw] xs:text-[3vw] -rotate-90 text-gray-400">
            <RiArrowDropDownLine />
          </span>
          <p className="md:text-[1.3vw] xs:text-[2.3vw] text-gray-400">
            Contact
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;
