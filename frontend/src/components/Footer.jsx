import React from "react";
import { Link } from "react-router-dom";
import HireMeBtn from "./HireMeBtn";

const Footer = ({ footerText, text }) => {
  return (
    <div className="w-full bg-footer bg-cover bg-no-repeat">
      <div className="max-w-[1200px] mx-auto pt-10">
        <img
          id="rotateAbout"
          className="mx-auto"
          src="/imgs/footer_shape.svg"
          alt=""
        />
        <div className="flex flex-wrap gap-10 items-center justify-around py-5">
          <h2
            id="blueGardient"
            className="text-8xl font-semibold font-lexend_deca"
          >
            {footerText}
          </h2>
          <Link>
            <HireMeBtn text={text} />
          </Link>
        </div>
        <div className="py-7 relative smallFooterBorder mt-10">
          <p className="text-lg text-gray-400 text-center">
            &copy; 2024 Laralink. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
