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
        className={` fixed z-50 w-full xs:block md:hidden transition-all duration-700 xs:px-[1.2vw] py-1 font-jost left-1/2 opacity-100 -translate-x-1/2  ${
          scrollDirection === "down" ? "  opacity-0" : "opacity-100"
        } ${!scrollDown ? "bg-transparent" : "bg-white"}`}
      >
        <div className="flex items-center justify-between  mx-auto">
          <div>
            <img className="xs:w-[7vw]" src="imgs/logo.png" alt="Logo" />
          </div>
          <div className="flex items-center gap-[6vw]">
            <Link>
              {" "}
              <HireMeBtn text={"Hire Me"} />{" "}
            </Link>
            <div>
              <div
                onClick={() => (!isOpen ? setIsOpen(true) : setIsOpen(false))}
                className="flex flex-col gap-[0.9vw] py-[2vw] cursor-pointer"
              >
                <div
                  className={`xs:w-[5vw] xs:h-[0.6vw] bg-black rounded-full ${
                    isOpen ? "lineOneRotate" : ""
                  } transition-all duration-300`}
                ></div>
                <div
                  className={`xs:w-[5vw] xs:h-[0.6vw] bg-black rounded-full ${
                    isOpen ? "translate-x-10 opacity-0" : ""
                  } transition-all duration-300`}
                ></div>
                <div
                  className={`xs:w-[5vw] xs:h-[0.6vw] bg-black rounded-full ${
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
              {["Home", "About", "Portfolio", "Testimonial", "Contact"].map(
                (item, idx) => {
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
                }
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileHeader;
