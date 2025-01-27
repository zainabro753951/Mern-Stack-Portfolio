import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const Dropdown = ({ title, state, setState, link1, link2 }) => {
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
        className="py-5 px-5 text-xl transition-all duration-300 hover:bg-themePurple font-jost border-y flex justify-between items-center border-gray-500 text-white"
      >
        <span>{title}</span>
        <span
          className={`transition-all duration-300 ${
            state ? "rotate-90" : "rotate-0"
          }`}
        >
          <IoIosArrowForward />
        </span>
      </div>
      <div ref={dropdownRef} className="w-full overflow-hidden max-h-0">
        <div className="w-full flex flex-col text-white">
          <Link
            to={link1}
            className="font-lexend_deca pl-10 py-4 border-b border-gray-500 transition-all duration-300 hover:bg-blueGardientEnd"
          >
            Add {title}
          </Link>
          <Link
            to={link2}
            className="font-lexend_deca pl-10 py-4 transition-all duration-300 hover:bg-blueGardientEnd"
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

  return (
    <div className="w-[25%] bg-portfolioHero bg-center bg-cover rounded-[50px]">
      <div className="py-6">
        <h1 className="text-4xl text-center py-3 font-semibold font-lexend_deca text-white">
          Admin <span className="text-themePurple">Dashboard</span>
        </h1>
      </div>
      <div className="w-full h-full pt-10">
        <ul className="flex flex-col">
          <Dropdown
            title="About"
            state={isAboutOpen}
            setState={setIsAboutOpen}
            link1="/admin/addAbout"
            link2="/admin/viewAbout"
          />
          <Dropdown
            title="Education"
            state={isEduOpen}
            setState={setIsEduOpen}
            link1="/admin/addEducation"
            link2="/admin/viewEducation"
          />
          <Dropdown
            title="Blog"
            state={isBlogOpen}
            setState={setIsBlogOpen}
            link1="/admin/addBlog"
            link2="/admin/viewBlog"
          />
          <Dropdown
            title="Testimonial"
            state={isTestiOpen}
            setState={setIsTestiOpen}
            link1="/admin/addTestimonial"
            link2="/admin/viewTestimonial"
          />
          <Dropdown
            title="Project"
            state={isProjectOpen}
            setState={setIsProjectOpen}
            link1="/admin/addProject"
            link2="/admin/viewProject"
          />
        </ul>
      </div>
    </div>
  );
};

export default DashboardLeft;
