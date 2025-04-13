import gsap from "gsap";
import React, { useContext, useEffect, useRef, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { SidebarToggleContext } from "../../Context/SideBarToggle";
import { FaCross } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

const Dropdown = ({ title, icon, state, setState, link1, link2 }) => {
  const dropdownRef = useRef(null);

  useEffect(() => {
    gsap.to(dropdownRef.current, {
      maxHeight: state ? "200px" : "0",
      duration: 1,
      ease: "power4",
    });
  }, [state]);

  return (
    <li>
      <div
        onClick={() => setState((prev) => !prev)}
        className="lg:py-[1.3vw] md:py-[1.8vw] xs:py-[2.6vw] md:px-5 xs:px-3 lg:text-[1.1vw] md:text-[2.1vw] sm:text-[2.7vw] xs:text-[3vw] transition-all duration-300 hover:bg-themePurple font-jost border-y flex justify-between items-center border-gray-500 text-white"
      >
        <div className="flex items-center gap-2 ">
          <div className="lg:w-[2.5vw] md:w-[3.5vw] xs:w-[4.5vw] lg:h-[2.5vw] md:h-[3.5vw] xs:h-[4.5vw] rounded-full">
            <img className="w-full h-full" src={icon} alt="" />
          </div>
          <span>{title}</span>
        </div>
        <span
          className={`transition-all duration-300 ${
            state ? "rotate-90" : "rotate-0"
          }`}
        >
          <IoIosArrowForward />
        </span>
      </div>
      <div ref={dropdownRef} className="w-full overflow-hidden max-h-0">
        <div className="w-full flex flex-col lg:text-[1vw] md:text-[2vw] xs:text-[2.5vw] text-white">
          <Link
            to={link1}
            className="font-lexend_deca lg:pl-[1.6vw] md:pl-[2vw] xs:pl-[2.4vw] lg:py-[1.3vw] md:py-[1.8vw] xs:py-[2.6vw] border-b border-gray-500 transition-all duration-300 hover:bg-blueGardientEnd"
          >
            Add {title}
          </Link>
          <Link
            to={link2}
            className="font-lexend_deca lg:pl-[1.6vw] md:pl-[2vw] xs:pl-[2.4vw] lg:py-[1.3vw] md:py-[1.8vw] xs:py-[2.6vw] transition-all duration-300 hover:bg-blueGardientEnd"
          >
            View {title}
          </Link>
        </div>
      </div>
    </li>
  );
};

const DashboardLeft = () => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isEduOpen, setIsEduOpen] = useState(false);
  const [isBlogOpen, setIsBlogOpen] = useState(false);
  const [isTestiOpen, setIsTestiOpen] = useState(false);
  const [isProjectOpen, setIsProjectOpen] = useState(false);
  const { isSideBarOpen, setIsSideBarOpen } = useContext(SidebarToggleContext);
  return (
    <div
      id="dashbaordleft"
      className={`lg:w-[25vw] xs:z-50 md:z-0 md:w-[35vw] xs:w-[50vw] xs:fixed md:relative ${
        isSideBarOpen ? "xs:-translate-x-[0%]" : "xs:-translate-x-[110%]"
      } md:translate-x-0 h-screen bg-portfolioHero bg-center overflow-auto bg-cover transition-all duration-300 md:rounded-[3vw]`}
    >
      <div className="w-full text-white p-6 md:text-[4vw] xs:text-[5vw] md:hidden xs:flex items-center justify-end">
        <span
          className="cursor-pointer"
          onClick={() => setIsSideBarOpen(false)}
        >
          <RxCross2 />
        </span>
      </div>
      <div className="md:py-6">
        <Link
          to={"/"}
          className="lg:text-[2.4vw] block md:text-[3vw] xs:text-[3.8vw] text-center md:py-[0.8vw] font-semibold font-lexend_deca text-white"
        >
          Admin <span className="text-themePurple">Dashboard</span>
        </Link>
      </div>
      <div className="w-full h-full pt-10">
        <ul className="flex flex-col">
          <Dropdown
            title="About"
            icon={"/imgs/dashboardleft/about.png"}
            state={isAboutOpen}
            setState={setIsAboutOpen}
            link1="/add-about"
            link2="/view-about"
          />
          <Dropdown
            title="Education"
            icon={"/imgs/dashboardleft/edu.png"}
            state={isEduOpen}
            setState={setIsEduOpen}
            link1="/add-education"
            link2="/view-education"
          />
          <Dropdown
            title="Blog"
            icon={"/imgs/dashboardleft/blog.png"}
            state={isBlogOpen}
            setState={setIsBlogOpen}
            link1="/add-blog"
            link2="/view-blog"
          />
          <Dropdown
            title="Testimonial"
            icon={"/imgs/dashboardleft/testimonial.png"}
            state={isTestiOpen}
            setState={setIsTestiOpen}
            link1="/add-testimonial"
            link2="/view-testimonial"
          />
          <Dropdown
            title="Project"
            icon={"/imgs/dashboardleft/project.png"}
            state={isProjectOpen}
            setState={setIsProjectOpen}
            link1="/add-project"
            link2="/view-project"
          />
        </ul>
      </div>
    </div>
  );
};

export default DashboardLeft;
