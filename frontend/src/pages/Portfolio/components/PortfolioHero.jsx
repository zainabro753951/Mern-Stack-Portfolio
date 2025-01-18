import React from "react";
import { Link } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
const PortfolioHero = () => {
  return (
    <div className="w-full bg-portfolioHero bg-cover bg-center bg-no-repeat">
      <div className="max-w-[1200px] h-[70vh] mx-auto flex flex-col items-center gap-7 justify-center">
        <h2
          id="blueGardient"
          className="text-8xl font-semibold font-lexend_deca"
        >
          Portolio
        </h2>
        <div className="flex items-center gap-2 font-lexend_deca">
          <Link to={"/"} className="text-themePurple text-lg">
            Home
          </Link>
          <span className="text-3xl -rotate-90 text-gray-400">
            <RiArrowDropDownLine />
          </span>
          <p className="text-lg text-gray-400">Portfolio</p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioHero;
