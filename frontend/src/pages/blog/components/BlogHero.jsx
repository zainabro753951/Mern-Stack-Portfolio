import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import BlogTime from "./BlogTime";
const BlogHero = () => {
  useEffect(() => {
    let getTime = () => {};
    getTime();
  }, []);
  return (
    <div className="w-full bg-portfolioHero bg-cover bg-center bg-no-repeat">
      <div className="max-w-[1200px] h-screen mx-auto flex flex-col items-center gap-7 justify-center">
        <h2
          id="blueGardient"
          className="text-8xl font-semibold font-lexend_deca"
        >
          Comming Soon...
        </h2>
        <h3>
          <BlogTime />
        </h3>
        <div className="flex items-center gap-2 font-lexend_deca">
          <Link to={"/"} className="text-themePurple text-lg">
            Home
          </Link>
          <span className="text-3xl -rotate-90 text-gray-400">
            <RiArrowDropDownLine />
          </span>
          <p className="text-lg text-gray-400">Blog</p>
        </div>
      </div>
    </div>
  );
};

export default BlogHero;
