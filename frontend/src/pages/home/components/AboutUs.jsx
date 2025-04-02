import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import HireMeBtn from "../../../components/HireMeBtn";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { ScrollToPlugin } from "gsap/all";
import gsap from "gsap";
import ArroIcon from "../../../components/ArroIcon";
import AboutCardData from "./AboutCardData";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollToPlugin);
const AboutUs = ({ content, isLoading }) => {
  console.log(content);

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

  // Gsap Animations here
  gsap.config({ nullTargetWarn: false, force3D: true });
  useGSAP(() => {
    gsap.from(AboutHead.current, {
      scrollTrigger: {
        trigger: AboutHead.current,
        start: "center 80%",
        end: "bottom 10%",
        toggleActions: "play none none reverse",
      },
      y: -90,
      duration: 1,
      opacity: 0,
      transformOrigin: "center",
      rotate: 45,
      ease: "power4",
      force3D: true,
    });
    gsap.from(".aboutCards", {
      scrollTrigger: {
        trigger: ".aboutCards",
        start: "center 65%",
        end: "bottom 10%",
        toggleActions: "play none none reverse",
      },
      scale: 0,
      y: -100,
      duration: 1,
      transformOrigin: "center",
      ease: "power4",
      stagger: 0.2,
      force3D: true,
    });
  }, []);
  return (
    <div className="w-full bg-[#F9FBFF]">
      <div className="md:max-w-[80vw] mx-auto md:py-[6vw] xs:py-[8vw] px-5 place-items-center grid lg:grid-cols-2 lg:gap-[6vw] xs:gap-[7vw] place-content-center items-center">
        {isLoading ? (
          <div>
            {/* Title Row Skeleton */}
            <div className="flex items-center gap-3 pb-2">
              <div className="lg:w-[6vw] md:w-[8vw] xs:w-[12vw] h-[1.5vw] bg-gray-200 rounded animate-pulse"></div>
              <div className="lg:w-[2.2vw] md:w-[3.2vw] xs:w-[4.7vw] aspect-square bg-gray-200 rounded-full animate-pulse"></div>
            </div>

            {/* Heading Skeleton */}
            <div className="overflow-hidden space-y-2">
              <div className="lg:w-[25vw] md:w-[35vw] xs:w-[45vw] h-[3.6vw] bg-gray-200 rounded animate-pulse"></div>
              <div className="lg:w-[30vw] md:w-[40vw] xs:w-[50vw] h-[3.6vw] bg-gray-200 rounded animate-pulse"></div>
            </div>

            {/* Paragraph Skeleton */}
            <div className="py-8 space-y-3">
              <div className="w-full h-[1.9vw] bg-gray-200 rounded animate-pulse"></div>
              <div className="w-full h-[1.9vw] bg-gray-200 rounded animate-pulse"></div>
              <div className="w-[80%] h-[1.9vw] bg-gray-200 rounded animate-pulse"></div>
            </div>

            {/* Button Skeleton */}
            <div className="lg:w-[10vw] md:w-[15vw] xs:w-[20vw] h-[3vw] bg-gray-200 rounded animate-pulse"></div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-3 pb-2">
              <h1 className="lg:text-[1.3vw] md:text-[2.3vw] xs:text-[3.6vw] text-themeBlue font-jost">
                About Me
              </h1>
              <div id="rotateAbout">
                <img
                  src="/imgs/About/aboutSvg.png"
                  className="lg:w-[2.2vw] md:w-[3.2vw] xs:w-[4.7vw]"
                  alt=""
                  loading="lazy"
                />
              </div>
            </div>
            <div className="overflow-hidden">
              <h2
                ref={AboutHead}
                style={{ willChange: "transform, opacity" }}
                className="lg:text-[2.6vw] will-change-transform md:text-[3.3vw] xs:text-[4.6vw] font-semibold lg:leading-[3.2vw] md:leading-[3.9vw] xs:leading-[5.1vw] font-lexend_deca"
              >
                {content.aboutHeadline}
              </h2>
            </div>
            <p className="py-8 text-gray-500 lg:text-[1.3vw] md:text-[2.3vw] xs:text-[3.6vw] lg:leading-[1.9vw] md:leading-[2.9vw] xs:leading-[5.5vw] font-jost tracking-wide leading-7">
              {content.about}
            </p>
            <Link>
              <HireMeBtn text={"Hire Me"} />
            </Link>
          </div>
        )}
        <div className="flex flex-col lg:gap-[2vw] md:gap-[3vw] xs:gap-[4.5vw]">
          {cardData.map((data, idx) => {
            return (
              <div
                key={idx}
                style={{ willChange: "scale, opacity" }}
                className="aboutCards"
              >
                <AboutCardData data={data} idx={idx} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
