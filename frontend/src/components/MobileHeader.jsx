import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import HireMeBtn from "./HireMeBtn";
import { useGSAP } from "@gsap/react";
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

  useGSAP;
  return (
    <>
      <nav
        className={` fixed z-50 w-full xs:block lg:hidden transition-all duration-700 md:px-[2vw] xs:px-[5vw] py-1 font-jost left-1/2 opacity-100 -translate-x-1/2  ${
          scrollDirection === "down" ? "  opacity-0" : "opacity-100"
        } ${!scrollDown ? "bg-transparent" : "bg-white"}`}
      >
        <div className="flex items-center justify-between max-w-[1200px] mx-auto">
          <div>
            <img
              className="sm:w-[5.5vw] xs:w-[7vw]"
              src="imgs/logo.png"
              alt="Logo"
            />
          </div>
          <div className="flex items-center gap-[6vw]">
            <Link>
              {" "}
              <HireMeBtn text={"Hire Me"} />{" "}
            </Link>
            <div>
              <div
                onClick={() => (!isOpen ? setIsOpen(true) : setIsOpen(false))}
                className="flex flex-col md:gap-[0.7vw] sm:gap-[0.9vw] xs:gap-[1.1vw] cursor-pointer"
              >
                <div
                  className={`md:w-[3.5vw] sm:w-[4.5vw] xs:w-[6.5vw] md:h-[0.3vw] sm:h-[0.5vw] xs:h-[0.9vw] bg-black rounded-full ${
                    isOpen ? "lineOneRotate" : ""
                  } transition-all duration-300`}
                ></div>
                <div
                  className={`md:w-[3.5vw] sm:w-[4.5vw] xs:w-[6.5vw] md:h-[0.3vw] sm:h-[0.5vw] xs:h-[0.9vw] bg-black rounded-full ${
                    isOpen ? "translate-x-10 opacity-0" : ""
                  } transition-all duration-300`}
                ></div>
                <div
                  className={`md:w-[3.5vw] sm:w-[4.5vw] xs:w-[6.5vw] md:h-[0.3vw] sm:h-[0.5vw] xs:h-[0.9vw] bg-black rounded-full ${
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
          className={` w-[97%] fixed bg-[#181818] transition-all duration-300 z-40 text-gray-400 tracking-wide left-1/2 rounded-lg  border-themePurple -translate-x-1/2 top-0 ${
            isOpen ? "h-[350px] border-t-2" : "h-0 border-t-0"
          } sm:translate-y-[5.5vw] xs:translate-y-[8vw] overflow-hidden`}
        >
          <div className="w-full h-full p-10">
            <ul className="flex flex-col gap-5 h-full">
              {[
                "Home",
                "About",
                "Portfolio",
                "Testimonial",
                "Blog",
                "Contact",
              ].map((item, idx) => {
                return (
                  <li className="links" key={idx}>
                    <NavLink
                      to={idx === 0 ? "/" : `/${item.toLowerCase()}`}
                      className={({ isActive }) =>
                        isActive ? "text-themePurple " : ""
                      }
                    >
                      {item}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileHeader;
