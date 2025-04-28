import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";
import { useProjects } from "../../../Context/GetProject";
import { motion } from "motion/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const PortfolioProjects = () => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [isProjectHover, setIsProjectHover] = useState(false);
  const { projects, setProjects, isLoading, isError, error } = useProjects();
  // const projectContainer = useRef(null);

  // useGSAP(() => {
  //   gsap.to(projectContainer.current, {
  //     scrollTrigger: {
  //       trigger: projectContainer.current,
  //       start: "top 70%",
  //       end: "top 40%",
  //       scrub: true,
  //       markers: true,
  //     },
  //     y: -200,
  //   });
  // });
  console.log(projects);

  return (
    <div className="relative bg-slate-100">
      <div className="md:max-w-[80vw] mx-auto md:py-[10vw] xs:py-[5vw]">
        <div className="grid md:grid-cols-3 xs:grid-cols-1 md:gap-[1.6vw] xs:gap-[2.6vw]">
          {isLoading
            ? [1, 2, 3, 4, 5, 6].map((_, idx) => {
                return (
                  <div
                    key={idx}
                    className="border w-full overflow-hidden md:h-[25vw] xs:h-[27vw] border-purple-600 md:rounded-[1.3vw] xs:rounded-[2.3vw] animate-pulse"
                  >
                    <div className="relative overflow-hidden md:rounded-[1.3vw] xs:rounded-[2.3vw] w-full h-full bg-gray-200 dark:bg-gray-700">
                      {/* Skeleton for the image area */}
                      <div className="w-full h-full bg-gray-300 dark:bg-gray-600"></div>

                      {/* Skeleton for the bottom overlay */}
                      <div className="w-full absolute bg-gray-400/70 dark:bg-gray-500/70 md:p-[1.5vw] xs:p-[2.5vw] bottom-0 left-0 z-10">
                        {/* Skeleton for project name */}
                        <div className="md:h-[1.5vw] xs:h-[2.5vw] bg-gray-200 dark:bg-gray-400 rounded-full md:mb-[1vw] xs:mb-[1.5vw] w-3/4"></div>

                        {/* Skeleton for view work button */}
                        <div className="md:h-[1.3vw] xs:h-[2.3vw] bg-gray-200 dark:bg-gray-400 rounded-full w-1/2"></div>
                      </div>
                    </div>
                  </div>
                );
              })
            : projects.map((project, idx) => {
                return (
                  <div
                    key={idx}
                    onMouseEnter={() => setIsProjectHover(true)}
                    onMouseLeave={() => setIsProjectHover(false)}
                    className="border w-full overflow-hidden md:h-[25vw] xs:h-[27vw] border-purple-600 md:rounded-[1.3vw] xs:rounded-[2.3vw]"
                  >
                    <motion.div
                      initial={{
                        scale: 0.9,
                      }}
                      animate={{
                        scale: isProjectHover ? 1 : 0.9,
                      }}
                      transition={{ duration: 0.4, ease: "backInOut" }}
                      className="relative overflow-hidden  md:rounded-[1.3vw] xs:rounded-[2.3vw] w-full h-full"
                    >
                      <img
                        className="w-full h-full object-cover object-right"
                        src={`${backendUrl}/${project.poster}`}
                        alt=""
                      />
                      <motion.div
                        initial={{
                          y: 125,
                        }}
                        animate={{
                          y: isProjectHover ? 0 : 125,
                        }}
                        transition={{
                          duration: 0.4,
                          ease: "backInOut",
                        }}
                        className="w-full absolute bg-purple-800/70 text-white md:p-[1.5vw] xs:p-[2.5vw] bottom-0 left-0 z-10"
                      >
                        <p className="md:text-[1.3vw] xs:text-[2.3vw] font-lexend_deca font-medium scale-y-[1.1]">
                          {project.projectName}
                        </p>
                        <Link
                          id="projectButton"
                          className="md:text-[1.3vw] relative xs:text-[2.3vw] font-jost"
                        >
                          View Work
                        </Link>
                      </motion.div>
                    </motion.div>
                  </div>
                );
              })}
        </div>
      </div>
    </div>
  );
};

export default PortfolioProjects;
