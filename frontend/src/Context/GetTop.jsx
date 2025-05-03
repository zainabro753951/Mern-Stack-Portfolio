import React, { useEffect, useRef } from "react";

const GetTop = () => {
  const targetSection = useRef(null);

  useEffect(() => {
    const handleScrollToSection = () => {
      if (targetSection.current) {
        targetSection.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };
    handleScrollToSection();
  }, [targetSection]);

  return { targetSection };
};

export default GetTop;
