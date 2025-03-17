import React from "react";
import { Link, NavLink } from "react-router-dom";
import { RxDropdownMenu } from "react-icons/rx";
const CategroyFilter = () => {
  const categroyList = [
    {
      path: "all",
      name: "All",
    },
    {
      path: "web-design",
      name: "Web Design",
    },
    {
      path: "ui-ux",
      name: "UI/UX",
    },
    {
      path: "wordpress",
      name: "WordPress",
    },
    {
      path: "branding-design",
      name: "Branding Design",
    },
    {
      path: "responsive-design",
      name: "Responsive Design",
    },
    {
      path: "mobile-interface",
      name: "Mobile Interface",
    },
    {
      path: "web-developer",
      name: "Web Developer",
    },
  ];
  return (
    <div className="bg-white w-[45%] h-fit md:rounded-[0.7vw] xs:rounded-[1.5vw] border border-gray-200 py-[1.2vw] ">
      <div className="flex items-center justify-between w-full lg:px-[1.4vw] md:px-[2.8vw] xs:px-[3.4vw]">
        <h2 className="lg:text-[2vw] md:text-[3vw] xs:text-[3.5vw]  font-medium font-lexend_deca">
          Categories
        </h2>
        <RxDropdownMenu className="xs:text-[5vw] sm:text-[4vw] md:hidden" />
      </div>
      <div className="w-full flex flex-col md:max-h-[45vw] xs:max-h-[0vw] overflow-hidden md:mt-5 gap-0.5">
        {categroyList.map((link, idx) => {
          return (
            <NavLink
              to={`/blog/${link.path}`}
              className={({ isActive }) => {
                const baseClass = `py-[1vw] lg:px-[1.4vw] transition-all duration-300 hover:bg-themePurple/10 hover:text-themePurple ${
                  isActive
                    ? "border-themePurple hover:bg-themePurple/20"
                    : "border-transparent"
                } border-r-2 hover:border-themePurple md:px-[2.8vw] xs:px-[3.4vw]`;
                return isActive
                  ? `${baseClass} bg-themePurple/10 text-themePurple `
                  : baseClass;
              }}
              endnd
            >
              {link.name}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default CategroyFilter;
