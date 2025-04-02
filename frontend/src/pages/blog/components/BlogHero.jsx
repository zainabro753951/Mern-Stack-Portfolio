import React from "react";
import { Link, useLocation } from "react-router-dom";
import ArroIcon from "../../../components/ArroIcon";

const BlogHero = ({ content, isLoading }) => {
  console.log(content);

  const publishDate = new Date(
    content ? content.date : "5/8/2025"
  ).toLocaleDateString();
  return isLoading ? (
    <div className="bg-[#f9fbff]">
      <div className="md:max-w-[80%] px-3 mx-auto lg:py-[5vw] md:py-[8vw] xs:py-[10vw]">
        <div
          role="status"
          className="w-full p-4 border  grid xs:grid-cols-1 lg:grid-cols-2 lg:mt-[8vw] xs:mt-[12vw] lg:gap-[5vw] md:gap-[6vw] xs:gap-[7vw] place-items-center border-gray-200 rounded-sm shadow-sm animate-pulse md:p-6 dark:border-gray-700"
        >
          <div className="flex w-full items-center justify-center h-48 mb-4 bg-gray-300 rounded-sm dark:bg-gray-700">
            <svg
              className="w-10 h-10 text-gray-200 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 20"
            >
              <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
              <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
            </svg>
          </div>
          <div>
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            <div className="flex items-center mt-4">
              <svg
                className="w-10 h-10 me-3 text-gray-200 dark:text-gray-700"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
              </svg>
              <div>
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
                <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
              </div>
            </div>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="bg-[#f9fbff]">
      <div className="md:max-w-[80%] px-3 mx-auto lg:py-[5vw] md:py-[8vw] xs:py-[10vw]">
        <div className="w-full grid xs:grid-cols-1 lg:grid-cols-2 lg:mt-[8vw] xs:mt-[12vw] lg:gap-[5vw] md:gap-[6vw] xs:gap-[7vw] place-items-center">
          <Link className="w-full overflow-hidden md:rounded-[1.5vw] xs:rounded-[2.5vw]">
            <img
              className="w-full lg:h-[25vw] md:h-[35vw] transition-all duration-500 hover:scale-110 object-cover "
              src={
                content ? `http://localhost:3000/${content.featuredImage}` : ""
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
