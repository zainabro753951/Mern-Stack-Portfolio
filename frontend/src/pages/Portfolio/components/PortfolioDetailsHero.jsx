import React from "react";
import GetTop from "../../../Context/GetTop";
import { Link } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import OptimizedImage from "../../../Common/OptimiseImage";

const PortfolioDetailsHero = ({ projectName, poster }) => {
  const { targetSection } = GetTop();
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  return (
    <div
      ref={targetSection}
      className="w-full bg-portfolioHero bg-cover bg-center bg-no-repeat"
    >
      <div className="md:max-w-[80vw] md:h-[120vh] relative xs:h-[50vh] mx-auto flex flex-col items-center xs:justify-center md:justify-normal">
        <div className="md:gap-[1.3vw] xs:gap-[2.3vw] w-full md:pt-[13vw] flex items-center flex-col ">
          <h2
            id="blueGardient"
            style={{ willChange: "scale, transform, opacity" }}
            className="md:text-[4vw] xs:text-[5vw] md:leading-[4.5vw] xs:leading-[6.5vw] font-bold font-lexend_deca"
          >
            {projectName}
          </h2>
          <div className="flex items-center gap-2 font-lexend_deca">
            <Link
              to={"/"}
              className="text-themePurple md:text-[1.3vw] xs:text-[2.3vw] "
            >
              Home
            </Link>
            <span className="md:text-[2vw] xs:text-[3vw] -rotate-90 text-gray-400">
              <RiArrowDropDownLine />
            </span>
            <p className="md:text-[1.3vw] xs:text-[2.3vw]  text-gray-400">
              Project Details
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetailsHero;
