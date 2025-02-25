import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";
import Counter from "./Counter";

gsap.registerPlugin(useGSAP, ScrollTrigger);
const Projects = () => {
  let projectData = [
    {
      count: 48,
      exp: "Years of experience",
    },
    {
      count: 120,
      exp: "Clients Satisfied",
    },
    {
      count: 185,
      exp: "Projects Done Successfully",
    },
  ];

  // Gsap animations here
  gsap.config({ nullTargetWarn: false, force3D: true });

  const animation = useGSAP(() => {
    gsap.from(".counter", {
      scrollTrigger: {
        trigger: ".counter",
        start: "center 80%",
        end: "bottom 10%",
        toggleActions: "play none none reverse",
      },
      scale: 0,
      duration: 0.5,
      transformOrigin: "center",
      stagger: 0.1,
      force3D: true,
    });
  }, []);
  return (
    <div
      style={{ backgroundAttachment: "fixed" }}
      className="w-full bg-projects bg-cover bg-no-repeat"
    >
      <div className="md:max-w-[80vw] mx-auto xs:h-full lg:h-[40vh] xs:px-20 lg:py-0 xs:py-[5vw] lg:px-0">
        <div className="w-full h-full grid lg:grid-cols-3 lg:gap-[3vw] lg:items-end xs:items-center lg:translate-y-20">
          {projectData.map((data, idx) => {
            return (
              <div
                key={idx}
                style={{ willChange: "scale, opacity" }}
                className="counter h-[70%]"
              >
                <Counter data={data} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
