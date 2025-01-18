import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";

const HireMeBtn = ({ text }) => {
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
      className="flex flex-col items-center justify-center bg-themePurple px-6 rounded-lg"
    >
      <div
        ref={textRef}
        className="flex leading-none flex-col items-center gap-6 relative translate-y-[1.25rem] font-bold text-lg text-white"
      >
        <span>{text}</span>
        <span>{text}</span>
      </div>
    </button>
  );
};

export default HireMeBtn;
