import React from "react";
import { VscTrash } from "react-icons/vsc";
const SideBarButton = ({ icon, text, function: method }) => {
  return (
    <>
      <div
        onClick={method}
        className="w-full flex cursor-pointer items-center gap-2 md:pl-[1.5vw] xs:pl-[2.5vw] md:py-[0.4vw] xs:py-[1vw]"
      >
        {icon}
        <p className="lg:text-[1.2vw] xs:hidden lg:block md:text-[2.2vw] xs:text-[3.4vw] text-gray-700">
          {text}
        </p>
      </div>
    </>
  );
};

export default SideBarButton;
