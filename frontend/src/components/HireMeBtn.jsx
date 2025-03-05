import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { HashLoader } from "react-spinners";
const HireMeBtn = ({ text, isLoading }) => {
  const [mouseHovered, setMouseHovered] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    if (mouseHovered) {
      gsap.to(textRef.current, {
        y: "-1.25rem",
        duration: 2,
        ease: "elastic.out",
      });
    } else {
      gsap.to(textRef.current, {
        y: "1.25rem",
        duration: 2,
        ease: "elastic.out",
      });
    }
  }, [mouseHovered]);

  return (
    <button
      onMouseEnter={() => setMouseHovered(true)}
      onMouseLeave={() => setMouseHovered(false)}
      className={`flex items-center justify-center h-0 ${
        isLoading
          ? "bg-transparent border-themePurple border"
          : "bg-themePurple"
      } lg:px-[2vw] md:px-[3vw] sm:px-[3.7vw] xs:px-[4vw] lg:py-[1.7vw] md:py-[1.9vw] sm:py-[2.3vw] xs:py-[3.3vw] rounded-[0.5vw]`}
    >
      {isLoading ? (
        <HashLoader
          color="#FF6D5A"
          size={30}
          title="Please waiting after response come"
        />
      ) : (
        <div
          ref={textRef}
          className="xl:flex xs:hidden leading-none w-fit flex-col items-center gap-[1.6vw] relative translate-y-[1.25rem] font-bold text-[1.2vw] text-white"
        >
          <span>{text}</span>
          <span>{text}</span>
        </div>
      )}
      <div className="xl:hidden font-bold md:text-[1.5vw] sm:text-[2.3vw] xs:text-[3.3vw] text-white">
        {text}
      </div>
    </button>
  );
};

export default HireMeBtn;
