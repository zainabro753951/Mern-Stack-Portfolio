import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import HireMeBtn from "./HireMeBtn";
const MobileHeader = () => {
  const [scrollDirection, setScrollDirection] = useState("up");
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [scrollDown, setScrollDown] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
      setLastScrollTop(scrollTop);
      if (scrollTop > 100) {
        setScrollDown(true);
      } else {
        setScrollDown(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);
  console.log(isOpen);

  useEffect;
  return (
    <>
      <nav
        className={` fixed z-50 w-full xs:block lg:hidden transition-all duration-700 px-10 py-1 font-jost left-1/2 opacity-100 -translate-x-1/2  ${
          scrollDirection === "down" ? "  opacity-0" : "opacity-100"
        } ${!scrollDown ? "bg-transparent" : "bg-white"}`}
      >
        <div className="flex items-center justify-between max-w-[1200px] mx-auto">
          <div>
            <img className="w-[90px]" src="imgs/logo.png" alt="Logo" />
          </div>
          <div className="flex items-center gap-16">
            <Link>
              {" "}
              <HireMeBtn text={"Hire Me"} />{" "}
            </Link>
            <div>
              <div
                onClick={() => (!isOpen ? setIsOpen(true) : setIsOpen(false))}
                className="flex flex-col gap-1.5 cursor-pointer"
              >
                <div
                  className={`w-8 h-[3px] bg-black rounded-full ${
                    isOpen ? "lineOneRotate" : ""
                  } transition-all duration-300`}
                ></div>
                <div
                  className={`w-8 h-[3px] bg-black rounded-full ${
                    isOpen ? "translate-x-10 opacity-0" : ""
                  } transition-all duration-300`}
                ></div>
                <div
                  className={`w-8 h-[3px] bg-black rounded-full ${
                    isOpen ? "lineTwoRotate" : ""
                  } transition-all duration-300`}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div>
        <div
          className={`${
            scrollDirection === "down" ? "  opacity-0" : "opacity-100"
          } w-[97%] fixed bg-[#181818] transition-all duration-300 z-40 text-gray-400 tracking-wide left-1/2 rounded-lg  border-themePurple -translate-x-1/2 top-0 ${
            isOpen ? "h-[350px] border-t-2" : "h-0 border-t-0"
          } translate-y-[87px] overflow-hidden`}
        >
          <div className="w-full h-full p-10">
            <ul className="flex flex-col gap-5 h-full">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-themePurple text-[18px]" : "text-[18px]"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/About"
                  className={({ isActive }) =>
                    isActive ? "text-themePurple text-[18px]" : "text-[18px]"
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Portfolio"
                  className={({ isActive }) =>
                    isActive ? "text-themePurple text-[18px]" : "text-[18px]"
                  }
                >
                  Portfolio
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Pages"
                  className={({ isActive }) =>
                    isActive ? "text-themePurple text-[18px]" : "text-[18px]"
                  }
                >
                  Pages
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Blog"
                  className={({ isActive }) =>
                    isActive ? "text-themePurple text-[18px]" : "text-[18px]"
                  }
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Contact"
                  className={({ isActive }) =>
                    isActive ? "text-themePurple text-[18px]" : "text-[18px]"
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileHeader;
