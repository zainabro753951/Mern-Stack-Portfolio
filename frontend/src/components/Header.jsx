import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import HireMeBtn from "./HireMeBtn";
import gsap from "gsap";
import { LuSun } from "react-icons/lu";
import { IoMoonOutline } from "react-icons/io5";
import ToggleTheme from "../Context/ToggleTheme";

const Header = () => {
  const [scrollDirection, setScrollDirection] = useState("up");
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [scrollDown, setScrollDown] = useState(false);
  const { isDarkMode, setIsDarkMode } = ToggleTheme();
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

  // Gsap Animations here
  useEffect(() => {
    const context = gsap.context(() => {
      gsap.from(".links", {
        y: -25,
        opacity: 0,
        duration: 0.8,
        ease: "power2.inOut",
        stagger: 0.1,
      });
    });

    return () => {
      context.revert();
    };
  }, []);

  // Toggle Theme
  const toggleTheme = (setIsDarkMode) => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "light" : "dark");
  };
  return (
    <nav
      className={`fixed z-50 w-full xs:hidden md:block text-gray-500 transition-all duration-700 md:px-[2vw] xs:px-[3vw] md:py-[0.5vw] xs:py-[1.5vw] font-lexend_deca left-1/2 -translate-x-1/2  ${
        scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"
      } ${!scrollDown ? "bg-transparent" : "bg-black text-white"}`}
    >
      <div className="flex items-center justify-between max-w-[80vw] mx-auto">
        <div>
          <img
            className="md:w-[6vw] xs:w-[7vw]"
            src="/imgs/logo.png"
            alt="Logo"
          />
        </div>
        <ul className="flex items-center md:gap-[3.2vw] xs:gap-[4.2vw] xs:text-[2.1vw] md:text-[1.1vw]">
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
        <div className="flex items-center xs:gap-[2.8vw] md:gap-[1.8vw]">
          <div
            onClick={() => toggleTheme(setIsDarkMode)}
            className="cursor-pointer lg:text-[1.5vw] md:text-[1.9vw]"
          >
            <LuSun />
          </div>
          <Link to={"/contact"}>
            {" "}
            <HireMeBtn text={"Hire Me"} />{" "}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
