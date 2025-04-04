import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";
import { IoMdArrowDropright } from "react-icons/io";
import { Link } from "react-router-dom";

gsap.registerPlugin(useGSAP, ScrollTrigger);
const Portfolio = () => {
  const portfolioText = useRef(null);
  gsap.config({ nullTargetWarn: false, force3D: true });
  useGSAP(() => {
    gsap.from(portfolioText.current, {
      scrollTrigger: {
        trigger: portfolioText.current,
        start: "80% 80%",
        end: "bottom 10%",
        toggleActions: "play none none reverse",
      },
      y: -90,
      duration: 1,
      opacity: 0,
      rotate: 45,
      transformOrigin: "center",
      ease: "power4",
      force3D: true,
    });

    gsap.from(".projectCards", {
      scrollTrigger: {
        trigger: ".projectCards",
        start: "top 130% ",
        end: "top 10%",
        toggleActions: "play none none reverse",
      },
      scale: 0,
      duration: 1,
      transformOrigin: "center",
      stagger: 0.1,
      force3D: true,
    });
  }, []);

  return (
    <div className="w-full bg-portfolio bg-cover bg-no-repeat">
      <div className="w-full md:max-w-[80vw]  mx-auto px-5 py-32 grid lg:grid-cols-2 lg:gap-[5vw] md:gap-[6vw] xs:gap-[8vw] font-jost">
        <div className="w-full h-full">
          <div className="flex items-center gap-4 text-themeBlue ">
            <h1 className="lg:text-[1.3vw] md:text-[2.3vw] xs:text-[3.6vw]">
              Portfolio
            </h1>
            <div id="rotateAbout">
              <svg
                className="lg:w-[2.2vw] md:w-[3.2vw] xs:w-[4.7vw]"
                viewBox="0 0 20 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.19081 0.0804121C2.96402 0.280944 3.78977 1.09487 4.80423 1.23643C5.65354 1.35439 7.28135 1.35439 10.7848 1.34259C15.0549 1.3308 16.8833 1.37797 17.1546 1.49593C17.827 1.80263 18.1219 2.98224 18.3107 6.17896C18.3814 7.31138 18.523 9.01 18.6291 9.95368C18.9594 12.9853 18.6527 13.2802 14.7719 13.4335C13.2738 13.4925 11.3274 13.6104 10.4545 13.693C6.37308 14.0823 3.83693 14.0115 2.42141 13.4453C1.24181 12.9734 1.30081 12.596 1.26542 11.8056C1.18285 10.2722 1.21823 7.14621 1.37157 4.30338C1.50133 1.92058 1.65467 1.44875 2.42141 1.09487C2.89325 0.882538 2.72812 0.634828 2.13831 0.65842C1.25361 0.705604 0.569457 1.0005 0.439701 2.38063C0.274556 4.07926 -0.775323 13.4099 1.11204 14.2002C2.35062 14.7193 4.50929 15.2265 5.3586 15.2265C5.9484 15.2265 5.92485 15.8871 5.33505 16.064C3.9785 16.4533 4.93396 17.397 6.72695 17.4677C10.3601 17.5857 15.6684 17.2908 15.7155 16.9487C15.7627 16.6066 14.996 15.8281 14.5949 15.8281C14.4652 15.8281 14.3826 15.6747 14.3826 15.4506C14.3826 15.1321 14.3826 14.6839 14.7482 14.6839C16.3171 14.6839 17.1546 14.6131 17.6265 14.5069C19.9267 14.0115 20.0211 12.4544 19.9975 11.5461C19.9149 7.8304 19.2189 4.27981 19.2189 3.44229C19.2071 1.99138 18.3578 0.564051 16.5413 0.304539C15.8335 0.092211 5.4058 -0.12012 4.19081 0.0804121ZM10.3484 7.29958C10.2068 7.14623 8.83846 5.62455 8.46099 5.23528C7.98915 4.75164 7.50549 4.90497 6.49103 5.83686C5.97201 6.32049 5.15809 7.04007 4.67446 7.45293C2.99942 8.86845 2.86966 9.50543 4.24979 9.50543C4.72163 9.50543 4.94579 9.34027 6.34951 7.90116C8.1661 6.03739 8.00095 6.04919 9.58161 7.58267C10.6433 8.60892 10.5135 8.62074 12.2357 7.27599C13.722 5.89586 14.5713 4.97576 15.6448 3.90232C16.7064 2.84068 15.0785 2.35704 14.2174 3.08839C13.203 3.92591 10.3601 7.28778 10.3484 7.29958ZM14.1702 6.74517C13.9579 7.28779 14.0641 10.9092 14.3 11.1333C14.878 11.7113 15.2319 10.4727 15.1965 8.01912C15.1729 6.66258 14.5123 5.84868 14.1702 6.74517ZM7.34037 8.21967C6.97469 9.18695 7.28136 11.8293 8.02451 11.6995C8.76766 11.5697 8.26045 8.65611 8.0953 8.23145C7.98914 7.92476 7.45833 7.91298 7.34037 8.21967ZM12.1413 8.49096C11.9408 8.73868 11.7403 10.5671 11.87 11.0625C12.0941 11.9472 13.026 11.5579 13.026 10.5789C13.026 8.93923 12.6014 7.93655 12.1413 8.49096ZM5.42939 9.75316C5.25245 9.9301 5.32322 11.2512 5.53554 11.5343C5.91302 12.0534 6.2433 11.7231 6.2433 10.8148C6.23151 9.87112 5.83046 9.34029 5.42939 9.75316ZM9.49901 9.75316C9.19232 10.0599 9.40464 11.322 9.78211 11.4989C10.3837 11.7703 10.5843 11.0271 10.2186 9.8475C10.1596 9.63517 9.67596 9.57621 9.49901 9.75316ZM12.5424 14.8844C13.0143 15.0142 12.8373 15.4388 12.8845 15.8281L7.43471 15.9224C7.43471 15.8871 7.52912 14.9552 7.52912 15.0142C7.90659 15.0024 11.3628 14.8608 11.8347 14.8254C12.0234 14.8018 12.3537 14.8372 12.5424 14.8844Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </div>
          <div className="overflow-hidden">
            <h2
              ref={portfolioText}
              className="lg:text-[3.2vw] md:text-[4.2vw] xs:text-[5.7vw] lg:leading-[3.6vw] md:leading-[4.6vw] xs:leading-[6.1vw] font-lexend_deca font-semibold pt-4 tracking-wide"
            >
              My latest <br /> awasome{" "}
              <span className="text-themePurple">projects</span>
            </h2>
          </div>
          <div
            id="ProjectHovers"
            style={{ willChange: "transform, opacity" }}
            className="flex flex-col rounded-[2vw] overflow-hidden mt-24 relative projectCards"
          >
            <div className="lg:p-[1.5vw] md:p-[2.5vw] xs:p-[4vw] flex items-center gap-10 portfolioGardient">
              <div className="flex items-center gap-4">
                <div
                  id="Pcircle"
                  className="lg:w-[2.4vw] md:w-[3.4vw] xs:w-[4.9vw] lg:h-[2.4vw] md:h-[3.4vw] xs:h-[4.9vw] rounded-full bg-white"
                ></div>
                <div
                  id="Pcircle"
                  className="lg:w-[2.4vw] md:w-[3.4vw] xs:w-[4.9vw] lg:h-[2.4vw] md:h-[3.4vw] xs:h-[4.9vw] rounded-full bg-white"
                ></div>
                <div
                  id="Pcircle"
                  className="lg:w-[2.4vw] md:w-[3.4vw] xs:w-[4.9vw] lg:h-[2.4vw] md:h-[3.4vw] xs:h-[4.9vw] rounded-full bg-white"
                ></div>
              </div>
              <div
                id="Pcircle"
                className="w-full lg:h-[2.4vw] md:h-[3.4vw] xs:h-[4.9vw] rounded-lg bg-white"
              ></div>
            </div>
            <div className="w-full h-full overflow-hidden">
              <img
                className="w-full h-full transition-all hover:scale-110 duration-500"
                src="/imgs/p5.jpg"
                alt=""
              />
            </div>
            <div
              id="proejctLinks"
              className="absolute transition-all duration-300 left-0 bottom-0 translate-y-full flex flex-col gap-1 p-6 bg-themeBlue/50 text-white w-full"
            >
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
          <div className="py-8  lg:block xs:hidden md:text-[2.4vw] lg:text-[1.4vw] xs:text-[3.9vw] text-center font-semibold text-themePurple">
            <Link id="viewProject" className="relative">
              {" "}
              View All Project{" "}
            </Link>
          </div>
        </div>
        <div className="w-full h-full flex flex-col">
          <div
            id="ProjectHovers"
            style={{ willChange: "transform, opacity" }}
            className="flex flex-col rounded-[2vw] overflow-hidden mt-24 relative projectCards"
          >
            <div className="lg:p-[1.5vw] md:p-[2.5vw] xs:p-[4vw] flex items-center gap-10 portfolioGardient">
              <div className="flex items-center gap-4">
                <div
                  id="Pcircle"
                  className="lg:w-[2.4vw] md:w-[3.4vw] xs:w-[4.9vw] lg:h-[2.4vw] md:h-[3.4vw] xs:h-[4.9vw] rounded-full bg-white"
                ></div>
                <div
                  id="Pcircle"
                  className="lg:w-[2.4vw] md:w-[3.4vw] xs:w-[4.9vw] lg:h-[2.4vw] md:h-[3.4vw] xs:h-[4.9vw] rounded-full bg-white"
                ></div>
                <div
                  id="Pcircle"
                  className="lg:w-[2.4vw] md:w-[3.4vw] xs:w-[4.9vw] lg:h-[2.4vw] md:h-[3.4vw] xs:h-[4.9vw] rounded-full bg-white"
                ></div>
              </div>
              <div
                id="Pcircle"
                className="w-full lg:h-[2.4vw] md:h-[3.4vw] xs:h-[4.9vw] rounded-lg bg-white"
              ></div>
            </div>
            <div className="w-full h-full overflow-hidden">
              <img
                className="w-full h-full transition-all hover:scale-110 duration-500"
                src="/imgs/p4.jpg"
                alt=""
              />
            </div>
            <div
              id="proejctLinks"
              className="absolute transition-all duration-300 left-0 bottom-0 translate-y-full flex flex-col gap-1 p-6 bg-themeBlue/50 text-white w-full"
            >
              <h2 className="lg:text-[1.7vw] md:text-[2.7vw] xs:text-[4.2vw] font-semibold">
                Second Project
              </h2>
              <div className="flex items-center gap-2">
                <h3 id="viewWork" className="text-xl relative">
                  View Work
                </h3>
                <IoMdArrowDropright />
              </div>
            </div>
          </div>
          <div
            id="ProjectHovers"
            style={{ willChange: "transform, opacity" }}
            className="flex flex-col rounded-[2vw] overflow-hidden mt-24 relative projectCards"
          >
            <div className="lg:p-[1.5vw] md:p-[2.5vw] xs:p-[4vw] flex items-center gap-10 portfolioGardient ">
              <div className="flex items-center gap-4">
                <div
                  id="Pcircle"
                  className="lg:w-[2.4vw] md:w-[3.4vw] xs:w-[4.9vw] lg:h-[2.4vw] md:h-[3.4vw] xs:h-[4.9vw] rounded-full bg-white"
                ></div>
                <div
                  id="Pcircle"
                  className="lg:w-[2.4vw] md:w-[3.4vw] xs:w-[4.9vw] lg:h-[2.4vw] md:h-[3.4vw] xs:h-[4.9vw] rounded-full bg-white"
                ></div>
                <div
                  id="Pcircle"
                  className="lg:w-[2.4vw] md:w-[3.4vw] xs:w-[4.9vw] lg:h-[2.4vw] md:h-[3.4vw] xs:h-[4.9vw] rounded-full bg-white"
                ></div>
              </div>
              <div
                id="Pcircle"
                className="w-full lg:h-[2.4vw] md:h-[3.4vw] xs:h-[4.9vw] rounded-lg bg-white"
              ></div>
            </div>
            <div className="w-full h-full overflow-hidden">
              <img
                className="w-full h-full transition-all hover:scale-110 duration-500"
                src="/imgs/p6.jpg"
                alt=""
              />
            </div>
            <div
              id="proejctLinks"
              className="absolute transition-all duration-300 left-0 bottom-0 translate-y-full flex flex-col gap-1 p-6 bg-themeBlue/50 text-white w-full"
            >
              <h2 className="lg:text-[1.7vw] md:text-[2.7vw] xs:text-[4.2vw] font-semibold">
                Third Project
              </h2>
              <div className="flex items-center gap-2">
                <h3 id="viewWork" className="text-xl relative">
                  View Work
                </h3>
                <IoMdArrowDropright />
              </div>
            </div>
          </div>
        </div>
        <div className="py-8 xs:block lg:hidden lg:text-[1.4vw] md:text-[2.4vw] xs:text-[3.9vw] text-center font-semibold text-themePurple">
          <Link id="viewProject" className="relative">
            {" "}
            View All Project{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
