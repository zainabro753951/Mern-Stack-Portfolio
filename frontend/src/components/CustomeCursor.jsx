import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { debounce } from "lodash";
import { motion, useMotionValue, useSpring } from "motion/react";

const CustomeCursor = () => {
  let cursor = useRef(null);
  let littelCursor = useRef(null);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const smoothX = useSpring(cursorX, {
    stiffness: 100,
    damping: 20,
  });
  const smoothY = useSpring(cursorY, {
    stiffness: 100,
    damping: 20,
  });

  // Littel Curosr Smootheness
  const smoothLittelX = useSpring(cursorX, {
    stiffness: 400,
    damping: 25,
  });

  const smoothLittelY = useSpring(cursorX, {
    stiffness: 400,
    damping: 25,
  });

  useEffect(() => {
    const moveCursor = (e) => {
      const rect = cursor.current.getBoundingClientRect();
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      cursorX.set(e.clientX - centerX);
      cursorY.set(e.clientY - centerY);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  useEffect(() => {
    const moveLittelCursor = (e) => {
      const rect = littelCursor.current.getBoundingClientRect();
      const centerX = rect.width * 2.8;
      const centerY = rect.height * 2.8;
      smoothLittelX.set(e.clientX - centerX);
      smoothLittelY.set(e.clientY - centerY);
    };

    window.addEventListener("mousemove", moveLittelCursor);

    return () => {
      window.removeEventListener("mousemove", moveLittelCursor);
    };
  }, []);

  return (
    <div className="w-[50px] xs:hidden fixed z-50 h-[50px] lg:flex items-center justify-center">
      <motion.div
        ref={cursor}
        style={{
          x: smoothX,
          y: smoothY,
        }}
        className="w-full absolute z-50 h-full bg-themePurple/20 rounded-full flex pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      ></motion.div>
      <motion.div
        ref={littelCursor}
        style={{
          x: smoothLittelX,
          y: smoothLittelY,
        }}
        className="w-[9px] h-[9px] z-50 rounded-full bg-themePurple pointer-events-none"
      ></motion.div>
    </div>
  );
};

export default CustomeCursor;
