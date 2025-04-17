import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";
import { IoMdArrowDropright } from "react-icons/io";
import { useProjects } from "../../../Context/GetProject";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const PortfolioProjects = () => {
  const backendUrl = import.meta.env.BACKEND_URL;
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
        <div className="grid md:grid-cols-3 xs:grid-cols-1">
          {projects.map((project) => {
            return (
              <div className="md:p-[1.5vw] xs:p-[2.5vw] border border-purple-600 md:rounded-[1.3vw] xs:rounded-[2.3vw]">
                <div>
                  <img src={`${backendUrl}/${project.posterImage}`} alt="" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PortfolioProjects;
