import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import HireMeBtn from "./HireMeBtn";
const Header = () => {
  const [scrollDirection, setScrollDirection] = useState("up");
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [scrollDown, setScrollDown] = useState(false);
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

  // header background sensor

  useEffect;
  return (
    <nav
      className={`fixed z-50 w-full xs:hidden lg:block text-gray-500 transition-all duration-700 px-10 py-1 font-lexend_deca left-1/2 -translate-x-1/2  ${
        scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"
      } ${!scrollDown ? "bg-transparent" : "bg-black text-white"}`}
    >
      <div className="flex items-center justify-between max-w-[1200px] mx-auto">
        <div>
          <img className="w-[90px]" src="imgs/logo.png" alt="Logo" />
        </div>
        <ul className="flex items-center gap-10">
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
              to="/Testimonials"
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
        <div>
          <Link to={"/Contact"}>
            {" "}
            <HireMeBtn text={"Hire Me"} />{" "}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
