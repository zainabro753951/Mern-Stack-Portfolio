import React from "react";
import { Link } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
const AboutHero = () => {
  return (
    <div className="bg-aboutHero bg-cover bg-no-repeat">
      <div className="max-w-[1200px] mx-auto h-[70vh]">
        <div className="w-full h-full flex flex-col gap-4 items-center justify-center">
          <h1 className="text-[90px] font-bold font-lexend_deca">
            <span className="gardient-text">About</span>
            &nbsp;
            <span className="gradient-stroke-text px-2" data-text="Me"></span>
          </h1>
          <div className="flex items-center gap-2 font-lexend_deca">
            <Link to={"/"} className="text-themePurple text-lg">
              Home
            </Link>
            <span className="text-3xl -rotate-90 text-black">
              <RiArrowDropDownLine />
            </span>
            <p className="text-lg text-gray-500">About</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
