import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";

const ShareLinks = () => {
  return (
    <div className=" flex bg-white h-fit flex-col md:rounded-[0.5vw] xs:rounded-[1vw] border border-gray-200">
      <div>
        <p className="text-themeBlue border-b border-gray-300 md:p-[1.3vw] xs:p-[2.8vw] lg:text-[1.3vw] md:text-[2.3vw] xs:text-[3.8vw] font-lexend_deca">
          Share
        </p>
        <div className="flex flex-col lg:text-[1.5vw] md:text-[2.5vw] xs:text-[4vw] items-center gap-[2vw] md:py-[1.3vw] xs:py-[2.8vw]">
          <FaFacebookF className="text-[#1b74e4] transition-all duration-300 hover:scale-150 cursor-pointer" />
          <FaTwitter className="text-[#1d9bf0] transition-all duration-300 hover:scale-150 cursor-pointer" />
          <FaLinkedinIn className="text-[#0a66c2] transition-all duration-300 hover:scale-150 cursor-pointer" />
          <FaWhatsapp className="text-[#00bfa5] transition-all duration-300 hover:scale-150 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default ShareLinks;
