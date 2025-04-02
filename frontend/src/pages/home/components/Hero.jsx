let icons = [
  "../../../../public/imgs/LInks/facebook.png",
  "../../../../public/imgs/LInks/youtube.png",
  "../../../../public/imgs/LInks/email.png",
  "../../../../public/imgs/LInks/behance.png",
  "../../../../public/imgs/LInks/linkedin.png",
];

import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import HireMeBtn from "../../../components/HireMeBtn";
import GetTop from "../../../Context/GetTop";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import ToggleTheme from "../../../Context/ToggleTheme";
gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollToPlugin);

const Hero = ({ content, isLoading }) => {
  const textRef = useRef(null);
  const myName = useRef(null);
  const webDev = useRef(null);
  const backBanner = useRef(null);
  const iconsRef = useRef([]);
  const { isDarkMode } = ToggleTheme();

  const [About, setAbout] = useState(content ? content.about : "");

  useEffect(() => {
    if (content) {
      setAbout(content.about);
    }
  }, [content]);

  gsap.config({ nullTargetWarn: false, force3D: true });
  useEffect(() => {
    const context = gsap.context(() => {
      gsap.to(textRef.current, {
        rotation: -90,
        y: "-600%",
        x: "-45%",
        duration: 2,
        ease: "bounce.out",
        transformOrigin: "center",
        force3D: true,
        onComplete: () => {
          gsap.to(textRef.current, {
            rotation: 0,
            y: 0,
            x: 0,
            duration: 2,
            transformOrigin: "center",
            force3D: true,
            ease: "back",
          });
        },
      });

      gsap.from(myName.current, {
        rotationZ: -90,
        rotationY: 90,
        delay: 0.8,
        duration: 1.5,
        transformOrigin: "center",
        ease: "back",
        force3D: true,
      });
    });

    gsap.to(".letter", {
      color: "#FF6D5A",
      duration: 1,
      delay: 1,
      stagger: 0.01,
    });
    gsap.to(".letter", {
      color: "#6b728f",
      delay: 2,
      rotateX: 180,
      stagger: 0.01,
      duration: 1,
    });

    gsap.from(webDev.current, {
      y: -54,
      rotate: 45,
      transformOrigin: "center",
      delay: 1.5,
      force3D: true,
      ease: "power",
    });

    return () => {
      context.revert();
    };
  }, [textRef, myName]);

  useGSAP(() => {
    gsap.from(".icon", {
      scale: 0,
      duration: 2,
      stagger: 0.1,
      transformOrigin: "center",
      force3D: true,
      ease: "elastic.out(1.5, 0.3)",
    });
    gsap.from(backBanner.current, {
      scale: 0,
      duration: 1.5,
      delay: 1.5,
      ease: "power4",
      transformOrigin: "center",
      force3D: true,
    });

    gsap.from("#meAnimate", {
      opacity: 0,
      duration: 1,
      delay: 2,
    });
  }, [backBanner]);

  const splitText = About.split("");
  const spanedText = splitText.map((letter, index) => (
    <span key={index} className="letter">
      {letter}
    </span>
  ));

  const onHovered = (icon) => {
    console.log(icon);

    gsap.to(`.${icon}`, {
      scale: 1.8,
      duration: 1.5,
      ease: "elastic",
      force3D: true,
    });
  };
  const onLeaved = (icon) => {
    console.log(icon);
    gsap.to(`.${icon}`, {
      scale: 1,
      duration: 1.5,
      force3D: true,
      ease: "elastic",
    });
  };

  const { targetSection } = GetTop();
  return (
    <>
      {isLoading ? (
        <div className={`w-full  animate-pulse bg-gray-200`}>
          <div className="md:max-w-[80vw] mx-auto px-5 grid lg:grid-cols-2 md:pt-[6vw] xs:pt-[20vw] pb-[6vw] gap-5">
            {/* Left Column - Text Content */}
            <div>
              <div className="flex flex-col space-y-4">
                {/* Hi! I'm */}
                <div className="h-8 w-24 bg-gray-300 rounded"></div>

                {/* Name */}
                <div className="flex space-x-2">
                  <div className="h-16 w-32 bg-gray-400 rounded"></div>
                  <div className="h-16 w-40 bg-gray-400 rounded"></div>
                </div>

                {/* MERN Stack Web Developer */}
                <div className="flex space-x-2">
                  <div className="h-6 w-24 bg-gray-300 rounded"></div>
                  <div className="h-6 w-32 bg-blue-300 rounded"></div>
                </div>
              </div>

              {/* Description Paragraph */}
              <div className="mt-6 space-y-2">
                <div className="h-4 w-full bg-gray-300 rounded"></div>
                <div className="h-4 w-4/5 bg-gray-300 rounded"></div>
                <div className="h-4 w-3/4 bg-gray-300 rounded"></div>
              </div>

              {/* Social Icons */}
              <div className="flex space-x-4 mt-6">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-8 w-8 bg-blue-300 rounded-full"
                  ></div>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex space-x-4 mt-10">
                <div className="h-12 w-36 bg-blue-400 rounded-full"></div>
                <div className="h-12 w-24 bg-blue-300 rounded-full"></div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div>
              <div className="lg:w-[20vw] md:w-[30vw] xs:w-[50vw] relative">
                <div className="w-full h-64 bg-gray-300 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          ref={targetSection}
          className={`w-full bg-hero isDarkMode ? "bg-zinc-950 text-gray-300" : "bg-gray-200 text-black" bg-cover bg-no-repeat`}
        >
          <div className="md:max-w-[80vw] mx-auto px-5 place-items-center gap-5 pb-[6vw] grid lg:grid-cols-2 md:pt-[6vw] xs:pt-[20vw] items-center">
            <div>
              <div className="flex flex-col">
                <h2
                  ref={textRef}
                  style={{ willChange: "transform, opacity" }}
                  className="lg:text-[3vw] md:text-[4vw] xs:text-[5.5vw] font-lexend_deca text-themeGray lg:leading-[3vw] md:leading-[4vw] xs:leading-[5.5vw] font-semibold"
                >
                  Hi! I'm
                </h2>
                <h1
                  ref={myName}
                  style={{ willChange: "transform, opacity" }}
                  className="lg:text-[5.5vw] md:text-[6.5vw] xs:text-[8vw] lg:leading-[6vw] md:leading-[7vw] xs:leading-[8.5vw] md:py-0 xs:py-[3vw] font-lexend_deca font-bold"
                >
                  <span className="gardient-text">
                    {content ? content.firstName : ""}
                  </span>
                  <span
                    className="gradient-stroke-text px-2"
                    data-text={content ? content.lastName : ""}
                  ></span>
                </h1>
                <h3 className="lg:text-[2vw] md:text-[3vw]  xs:text-[4.5vw] font-lexend_deca font-bold tracking-wide leading-[2.5vw]">
                  <span className="text-themeGray ">MERN Stack</span>{" "}
                  <span ref={webDev} className="text-themeBlue">
                    Web Developer
                  </span>
                </h3>
              </div>
              <p className="lg:text-[1.3vw] will-change-contents md:text-[2.3vw] xs:text-[3.6vw] lg:py-[2vw] md:py-[3vw] xs:py-[4.5vw] font-jost text-gray-500">
                {spanedText}
              </p>
              <div className="flex items-center lg:gap-[2vw] md:gap-[3vw] xs:gap-[4.5vw]">
                {icons.map((icon, idx) => {
                  return (
                    <a
                      href=""
                      key={idx}
                      style={{ willChange: "scale, opacity" }}
                      onMouseEnter={() => onHovered(`iconRef-${idx + 1}`)}
                      onMouseLeave={() => onLeaved(`iconRef-${idx + 1}`)}
                      className={`text-themeBlue will-change-auto iconRef-${
                        idx + 1
                      }`}
                    >
                      <img
                        className={` ${
                          idx === 0
                            ? "lg:w-[1.2vw] md:w-[1.6vw] xs:w-[2vw]"
                            : "lg:w-[1.8vw] md:w-[2.2vw] xs:w-[2.6]"
                        }`}
                        src={icon}
                        alt=""
                      />
                    </a>
                  );
                })}
              </div>
              <div className="py-10 flex items-center gap-5">
                <Link>
                  <HireMeBtn text={"Download Now"} />
                </Link>
                <Link
                  id="talkBtn"
                  className="lg:text-[1.4vw] md:text-[2.4vw] xs:text-[3.9vw] font-lexend_deca relative font-semibold text-themeBlue"
                >
                  Let's Talk
                </Link>
              </div>
            </div>
            <div>
              <div className="lg:w-[20vw] md:w-[30vw] xs:w-[50vw] relative">
                <img
                  ref={backBanner}
                  style={{ willChange: "scale, opacity" }}
                  src="/imgs/myBanner.png"
                  alt=""
                  loading="lazy"
                />
                <img
                  id="meAnimate"
                  style={{ willChange: "opacity" }}
                  className="absolute top-20 object-cover left-0 w-full h-full"
                  loading="lazy"
                  src={
                    content.profileImg
                      ? `http://localhost:3000/${content.profileImg}`
                      : "/imgs/me.png"
                  }
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
