import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";
import { IoMdArrowDropright } from "react-icons/io";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const PortfolioProjects = () => {
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

  return (
    <div className="relative bg-slate-100 ">
      <div className="md:max-w-[80vw] mx-auto py-24">
        <div className="w-full h-full grid md:grid-cols-3 xs:grid-cols-1">
          <div className="relative h-fit w-full projectHovers overflow-hidden">
            <div className="md:w-full">
              <img
                className=" projectImgs w-full object-cover transition-all duration-500"
                src="/imgs/projects/p3.jpg"
                alt=""
              />
            </div>
            <div className="absolute transition-all flex items-end duration-300 left-0 bottom-0 p-6 text-white w-full">
              <div className="flex flex-col gap-1">
                <h2 className="lg:text-[1.7vw] md:text-[2.7vw] xs:text-[4.2vw] font-semibold">
                  First Project
                </h2>
                <div className="flex items-center gap-2">
                  <h3
                    id="viewWork"
                    className="lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.8vw] relative"
                  >
                    View Work
                  </h3>
                  <IoMdArrowDropright />
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-full h-full projectHovers overflow-hidden">
            <div className="w-full object-cover">
              <img
                className=" projectImgs w-full transition-all duration-500"
                src="/imgs/projects/p2.jpg"
                alt=""
              />
            </div>
            <div className="absolute transition-all flex items-end duration-300 left-0 bottom-0 p-6 text-white w-full">
              <div className="flex flex-col gap-1">
                <h2 className="lg:text-[1.7vw] md:text-[2.7vw] xs:text-[4.2vw] font-semibold">
                  First Project
                </h2>
                <div className="flex items-center gap-2">
                  <h3
                    id="viewWork"
                    className="lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.8vw] relative"
                  >
                    View Work
                  </h3>
                  <IoMdArrowDropright />
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-full h-fit projectHovers overflow-hidden">
            <div className="w-full object-cover">
              <img
                className=" projectImgs w-full transition-all duration-500"
                src="/imgs/projects/p8.jpg"
                alt=""
              />
            </div>
            <div className="absolute transition-all flex items-end duration-300 left-0 bottom-0 p-6 text-white w-full">
              <div className="flex flex-col gap-1">
                <h2 className="lg:text-[1.7vw] md:text-[2.7vw] xs:text-[4.2vw] font-semibold">
                  First Project
                </h2>
                <div className="flex items-center gap-2">
                  <h3
                    id="viewWork"
                    className="lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.8vw] relative"
                  >
                    View Work
                  </h3>
                  <IoMdArrowDropright />
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-full h-fit projectHovers -translate-y-[52%] overflow-hidden">
            <div className="w-full object-cover">
              <img
                className=" projectImgs w-full transition-all duration-500"
                src="/imgs/projects/p7.jpg"
                alt=""
              />
            </div>
            <div className="absolute transition-all flex items-end duration-300 left-0 bottom-0 p-6 text-white w-full">
              <div className="flex flex-col gap-1">
                <h2 className="lg:text-[1.7vw] md:text-[2.7vw] xs:text-[4.2vw] font-semibold">
                  First Project
                </h2>
                <div className="flex items-center gap-2">
                  <h3
                    id="viewWork"
                    className="lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.8vw] relative"
                  >
                    View Work
                  </h3>
                  <IoMdArrowDropright />
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-full h-fit projectHovers overflow-hidden">
            <div className="w-full object-cover">
              <img
                className=" projectImgs w-full transition-all duration-500"
                src="/imgs/projects/p9.jpg"
                alt=""
              />
            </div>
            <div className="absolute transition-all flex items-end duration-300 left-0 bottom-0 p-6 text-white w-full">
              <div className="flex flex-col gap-1">
                <h2 className="lg:text-[1.7vw] md:text-[2.7vw] xs:text-[4.2vw] font-semibold">
                  First Project
                </h2>
                <div className="flex items-center gap-2">
                  <h3
                    id="viewWork"
                    className="lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.8vw] relative"
                  >
                    View Work
                  </h3>
                  <IoMdArrowDropright />
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-full h-fit projectHovers -translate-y-[75%] overflow-hidden">
            <div className="w-full object-cover">
              <img
                className=" projectImgs w-full transition-all duration-500"
                src="/imgs/projects/p4.jpg"
                alt=""
              />
            </div>
            <div className="absolute transition-all flex items-end duration-300 left-0 bottom-0 p-6 text-white w-full">
              <div className="flex flex-col gap-1">
                <h2 className="lg:text-[1.7vw] md:text-[2.7vw] xs:text-[4.2vw] font-semibold">
                  First Project
                </h2>
                <div className="flex items-center gap-2">
                  <h3
                    id="viewWork"
                    className="lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.8vw] relative"
                  >
                    View Work
                  </h3>
                  <IoMdArrowDropright />
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-full h-fit projectHovers -translate-y-[47%] overflow-hidden">
            <div className="w-full object-cover">
              <img
                className=" projectImgs w-full transition-all duration-500"
                src="/imgs/projects/p10.jpg"
                alt=""
              />
            </div>
            <div className="absolute transition-all flex items-end duration-300 left-0 bottom-0 p-6 text-white w-full">
              <div className="flex flex-col gap-1">
                <h2 className="lg:text-[1.7vw] md:text-[2.7vw] xs:text-[4.2vw] font-semibold">
                  First Project
                </h2>
                <div className="flex items-center gap-2">
                  <h3
                    id="viewWork"
                    className="lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.8vw] relative"
                  >
                    View Work
                  </h3>
                  <IoMdArrowDropright />
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-full h-fit projectHovers overflow-hidden">
            <div className="w-full object-cover">
              <img
                className=" projectImgs w-full transition-all duration-500"
                src="/imgs/projects/pp9.jpg"
                alt=""
              />
            </div>
            <div className="absolute transition-all flex items-end duration-300 left-0 bottom-0 p-6 text-white w-full">
              <div className="flex flex-col gap-1">
                <h2 className="lg:text-[1.7vw] md:text-[2.7vw] xs:text-[4.2vw] font-semibold">
                  First Project
                </h2>
                <div className="flex items-center gap-2">
                  <h3
                    id="viewWork"
                    className="lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.8vw] relative"
                  >
                    View Work
                  </h3>
                  <IoMdArrowDropright />
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-full h-fit projectHovers -translate-y-[58%] overflow-hidden">
            <div className="w-full object-cover">
              <img
                className=" projectImgs w-full transition-all duration-500"
                src="/imgs/projects/p11.jpg"
                alt=""
              />
            </div>
            <div className="absolute transition-all flex items-end duration-300 left-0 bottom-0 p-6 text-white w-full">
              <div className="flex flex-col gap-1">
                <h2 className="lg:text-[1.7vw] md:text-[2.7vw] xs:text-[4.2vw] font-semibold">
                  First Project
                </h2>
                <div className="flex items-center gap-2">
                  <h3
                    id="viewWork"
                    className="lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.8vw] relative"
                  >
                    View Work
                  </h3>
                  <IoMdArrowDropright />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioProjects;
