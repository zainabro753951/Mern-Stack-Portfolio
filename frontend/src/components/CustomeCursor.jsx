import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { debounce } from "lodash";

const CustomeCursor = () => {
  let cursor = useRef(null);
  let littelCursor = useRef(null);
  useEffect(() => {
    const moveCursor = debounce((e) => {
      gsap.to(cursor.current, {
        x: e.clientX - 25,
        y: e.clientY - 25,
        ease: "power4",
        duration: 1.7,
      });
    }, 10); // Debouncing with 10ms delay

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);
  useEffect(() => {
    const littleCursorMove = debounce((e) => {
      gsap.to(littelCursor.current, {
        x: e.clientX - 25,
        y: e.clientY - 25,
        ease: "power4",
        duration: 3.2,
      });
    }, 10); // Debouncing with 10ms delay

    window.addEventListener("mousemove", littleCursorMove);

    return () => {
      window.removeEventListener("mousemove", littleCursorMove);
    };
  }, []);

  return (
    <div className="w-[50px] xs:hidden fixed z-50 h-[50px] lg:flex items-center justify-center">
      <div
        ref={cursor}
        className="w-full absolute z-50 h-full bg-themePurple/20 rounded-full flex pointer-events-none"
      ></div>
      <div
        ref={littelCursor}
        className="w-[9px] h-[9px] z-50 rounded-full bg-themePurple pointer-events-none"
      ></div>
    </div>
  );
};

export default CustomeCursor;
