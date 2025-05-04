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

  const counterRefs = useRef([]);
  const containerRef = useRef();

  // Create an array of refs
  useGSAP(
    () => {
      // Wait for all images to load
      const images = containerRef.current.querySelectorAll("img");
      let loadedCount = 0;

      const checkImagesLoaded = () => {
        loadedCount++;
        if (loadedCount === images.length) {
          initAnimations();
        }
      };

      images.forEach((img) => {
        if (img.complete) {
          checkImagesLoaded();
        } else {
          img.addEventListener("load", checkImagesLoaded);
          img.addEventListener("error", checkImagesLoaded); // Handle broken images too
        }
      });

      // If no images, initialize immediately
      if (images.length === 0) {
        initAnimations();
      }

      function initAnimations() {
        gsap.from(counterRefs.current, {
          scrollTrigger: {
            trigger: counterRefs.current[0] || containerRef.current,
            markers: import.meta.env.VITE_NODE_ENV === "development",
            start: "top 90%", // Adjusted for better timing
            end: "center 20%",
            scrub: true,
            toggleActions: "play none none reverse",
            invalidateOnRefresh: true, // Important for recalculating
          },
          y: 200,
          duration: 0.5,
          stagger: 0.09,
        });

        // Refresh ScrollTrigger after setup
        setTimeout(() => ScrollTrigger.refresh(), 300);
      }

      // Cleanup
      return () => {
        images.forEach((img) => {
          img.removeEventListener("load", checkImagesLoaded);
          img.removeEventListener("error", checkImagesLoaded);
        });
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    },
    { scope: containerRef }
  ); // Using GSAP context with scope

  return (
    <div
      style={{ backgroundAttachment: "fixed" }}
      ref={containerRef}
      className="w-full bg-projects bg-cover bg-no-repeat"
    >
      <div className="md:max-w-[80vw] mx-auto xs:px-[10vw] lg:py-0 xs:py-[5vw] lg:px-0">
        <div className="w-full h-full grid lg:grid-cols-3 xs:grid-cols-1 md:gap-[5vw] lg:gap-[3vw]  items-center">
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
