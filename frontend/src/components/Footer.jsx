import React from "react";
import { Link } from "react-router-dom";
import HireMeBtn from "./HireMeBtn";

const Footer = ({ footerText, text }) => {
  return (
    <div className="w-full bg-footer bg-cover bg-no-repeat">
      <div className="md:max-w-[80vw] mx-auto pt-10">
        <img
          id="rotateAbout"
          className="mx-auto"
          src="/imgs/footer_shape.svg"
          alt=""
        />
        <div className="flex flex-wrap gap-10 items-center justify-around py-5">
          <h2
            id="blueGardient"
            className="lg:text-[6.3vw] md:text-[7.3vw] xs:text-[8.8vw] font-semibold font-lexend_deca"
          >
            {footerText}
          </h2>
          <Link>
            <HireMeBtn text={text} />
          </Link>
        </div>
        <div className="py-7 relative smallFooterBorder mt-10">
          <p className="lg:text-[1.3vw] md:text-[2.3vw] xs:text-[3.6vw] text-gray-400 text-center">
            &copy; 2024 Laralink. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
