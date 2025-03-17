import React from "react";
import { Link, useLocation } from "react-router-dom";
import ArroIcon from "../../../components/ArroIcon";

const BlogHero = ({ content }) => {
  const publishDate = new Date(
    content ? content.date : "5/8/2025"
  ).toLocaleDateString();
  return (
    <div className="bg-[#f9fbff]">
      <div className="md:max-w-[80%] px-3 mx-auto lg:py-[5vw] md:py-[8vw] xs:py-[10vw]">
        <div className="w-full grid xs:grid-cols-1 lg:grid-cols-2 lg:mt-[8vw] xs:mt-[12vw] lg:gap-[5vw] md:gap-[6vw] xs:gap-[7vw] place-items-center">
          <Link className="w-full overflow-hidden md:rounded-[1.5vw] xs:rounded-[2.5vw]">
            <img
              className="w-full lg:h-[25vw] md:h-[35vw] transition-all duration-500 hover:scale-110 object-cover "
              src={
                content
                  ? `http://localhost:3000/${content.featuredImage}`
                  : "/imgs/projects/p3.jpg"
              }
              alt={content ? content.title : ""}
            />
          </Link>
          <div className="lg:py-[2vw] md:py-[3vw] xs:py-[3.5vw] flex flex-col">
            <div className="lg:py-[0.7vw] md:py-[1.7vw] xs:py-[2.2vw] lg:px-[2vw] md:px-[3vw] xs:px-[3.5vw] lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] mr-auto lg:rounded-[0.7vw] md:rounded-[1.2vw] xs:rounded-[1.5vw] bg-themePurple/10 text-themePurple">
              <p>{content ? content.category : "Hello how are you"}</p>
            </div>
            <Link className="lg:text-[2.1vw] transition-all duration-300 hover:text-themeBlue md:text-[3.1vw] xs:text-[3.7vw] lg:leading-[2.6vw] md:leading-[3.6vw] xs:leading-[4.2vw] font-semibold font-lexend_deca md:mt-4 xs:mt-2">
              {content ? content.title.slice(0, -35) + "..." : ""}
            </Link>
            <p className="lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] font-jost text-gray-500 mt-4">
              {content ? content.description : ""}
            </p>
            <div className="mt-4 w-full flex items-center justify-between">
              <div className="flex items-center gap-[3.5vw]">
                <p className="lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] font-jost text-gray-500 lg:mt-[1.6vw] md:mt-[2.6vw] xs:mt-[3.6vw]">
                  {publishDate}
                </p>
                <p
                  id="talkBtn"
                  className="lg:text-[1.2vw] py-2 relative px-2 cursor-pointer text-themeBlue md:text-[2.2vw] xs:text-[3.4vw] font-jost  lg:mt-[1.6vw] md:mt-[2.6vw] xs:mt-[3.6vw]"
                >
                  {content ? content.author : ""}
                </p>
              </div>
              <Link
                id="icon"
                className="lg:p-[0.8vw] md:p-[1.6vw] transition-all hover:bg-themePurple sm:p-[2.1vw] xs:p-[2.6vw] duration-300 rounded-full border border-gray-400"
              >
                <ArroIcon
                  className={"lg:w-[0.7vw] md:w-[1.7vw] xs:w-[3.5vw]"}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHero;
