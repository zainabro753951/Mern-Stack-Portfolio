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

  // Create an array of refs
  const counterRefs = useRef([]);

  useGSAP(() => {
    const animation = gsap.from(counterRefs.current, {
      y: 200,
      duration: 0.5,
      stagger: 0.09,
      scrollTrigger: {
        trigger: counterRefs.current[0],
        markers: true,
        start: "top 110%",
        end: "center 0%",
        scrub: true,
        toggleActions: "play none none reverse",
      },
    });

    // Refresh ScrollTrigger after images load
    window.addEventListener("load", () => ScrollTrigger.refresh());

    // Cleanup
    return () => {
      window.removeEventListener("load", () => ScrollTrigger.refresh());
      animation.kill();
    };
  }, []);

  return (
    <div
      style={{ backgroundAttachment: "fixed" }}
      className="w-full bg-projects bg-cover bg-no-repeat"
    >
      <div className="md:max-w-[80vw] mx-auto xs:px-20 lg:py-0 xs:py-[5vw] lg:px-0">
        <div className="w-full h-full grid lg:grid-cols-3 lg:gap-[3vw] items-center">
          {projectData.map((data, idx) => {
            return (
              <div
                key={idx}
                style={{ willChange: "scale, opacity" }}
                className="md:py-[5vw] xs:py-[7vw]"
                ref={(el) => (counterRefs.current[idx] = el)}
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
