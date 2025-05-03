let icons = [
  "/imgs/LInks/facebook.png",
  "/imgs/LInks/youtube.png",
  "/imgs/LInks/email.png",
  "/imgs/LInks/behance.png",
  "/imgs/LInks/linkedin.png",
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
import OptimizedImage from "../../../Common/OptimiseImage";
gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollToPlugin);

const Hero = ({ content, isLoading }) => {
  const textRef = useRef(null);
  const myName = useRef(null);
  const webDev = useRef(null);
  const backBanner = useRef(null);
  const { isDarkMode } = ToggleTheme();
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const [About, setAbout] = useState(content?.about || null);

  useEffect(() => {
    setAbout(content?.about || null);
  }, [content]);
  console.log(content);

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

  const splitText = About?.split("") || null;
  const spanedText = splitText?.map((letter, index) => (
    <span key={index} className="letter">
      {letter}
    </span>
  ));

  const onHovered = (icon) => {
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
        <div className={`w-full animate-pulse bg-gray-200`}>
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
          className={`w-full bg-hero bg-cover bg-no-repeat`}
        >
          <div className="md:max-w-[80vw] mx-auto px-5 place-items-center md:gap-[2vw] xs:gap-[3vw] md:py-[8vw] xs:pb-[6vw] xs:pt-[10vw] grid lg:grid-cols-2 items-center">
            <div>
              <div className="flex flex-col">
                <h2
                  ref={textRef}
                  style={{ willChange: "transform, opacity" }}
                  className="md:text-[3vw] xs:text-[4vw] font-lexend_deca text-themeGray md:leading-[3.5vw] xs:leading-[4.5vw] font-semibold"
                >
                  Hi! I'm
                </h2>
                <h1
                  ref={myName}
                  style={{ willChange: "transform, opacity" }}
                  className="md:text-[5.5vw] xs:text-[6.5vw] md:leading-[6vw]  xs:leading-[7vw] font-lexend_deca font-bold"
                >
                  <span className="gardient-text">
                    {content?.firstName || null}
                  </span>
                  &nbsp;
                  <span
                    className="gradient-stroke-text px-2"
                    data-text={content?.lastName || null}
                  ></span>
                </h1>
                <h3 className="md:text-[2vw] xs:text-[3vw] font-lexend_deca font-bold tracking-wide md:leading-[2.5vw] xs:leading-[3.5vw]">
                  <span className="text-themeGray ">MERN Stack</span>{" "}
                  <span ref={webDev} className="text-themeBlue">
                    Web Developer
                  </span>
                </h3>
              </div>
              <p className="md:text-[1.3vw] will-change-contents xs:text-[2.3vw]  lg:py-[2vw] md:py-[3vw] xs:py-[4vw] font-jost text-gray-500">
                {spanedText}
              </p>
              <div className="flex items-center md:gap-[2vw] xs:gap-[3vw]">
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
                      <OptimizedImage
                        className={` ${
                          idx === 0
                            ? "md:w-[1vw] xs:w-[1.7vw] "
                            : "md:w-[1.8vw] xs:w-[2.8vw]"
                        }`}
                        src={icon}
                      />
                    </a>
                  );
                })}
              </div>
              <div className="md:py-[3vw] xs:py-[4vw] flex items-center md:gap-[1.5vw] xs:gap-[2.5vw]">
                <Link>
                  <HireMeBtn text={"Download Now"} />
                </Link>
                <Link
                  id="talkBtn"
                  className="md:text-[1.4vw] xs:text-[2.4vw] font-lexend_deca relative font-semibold text-themeBlue"
                >
                  Let's Talk
                </Link>
              </div>
            </div>
            <div>
              <div className="md:w-[20vw] xs:w-[40vw] relative">
                <img loading="lazy" />
                <OptimizedImage
                  ref={backBanner}
                  style={{ willChange: "scale, opacity" }}
                  src="/imgs/myBanner.png"
                />
                <OptimizedImage
                  id="meAnimate"
                  style={{ willChange: "opacity" }}
                  src={
                    content?.profileImg
                      ? `${backendUrl.slice(0, -4)}/${content?.profileImg}`
                      : null
                  }
                  alt="Descriptive text"
                  width={800}
                  height={600}
                  className="absolute top-0 object-cover left-0 w-full h-full"
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
