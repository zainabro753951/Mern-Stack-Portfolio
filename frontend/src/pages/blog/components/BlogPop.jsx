import React from "react";
import { data, Link } from "react-router-dom";
import ArroIcon from "../../../components/ArroIcon";

const BlogPop = ({ blogPosts, filteredBlogPosts, isLoading }) => {
  const getFormatedTime = (originalDate) => {
    const date = new Date(originalDate);
    // Get day, month (in short format), and year
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "short" }); // Short month name
    const year = date.getFullYear();

    // Combine them into desired format
    return [{ day, month, year }];
  };

  return (
    <>
      {isLoading ? (
        <div className="w-full lg:py-[2vw] xs:py-[3vw] border-b border-gray-200 flex gap-[2vw] animate-pulse">
          {/* Date Skeleton */}
          <div className="p-[1vw]">
            <div className="flex flex-col items-center">
              <div className="lg:w-[3vw] md:w-[3.5vw] xs:w-[4.5vw] h-[3vw] bg-gray-300 rounded"></div>
              <div className="flex items-center gap-1 mt-2">
                <div className="lg:w-[2vw] md:w-[2.5vw] xs:w-[3vw] h-[1.2vw] bg-gray-300 rounded"></div>
                <div className="lg:w-[2vw] md:w-[2.5vw] xs:w-[3vw] h-[1.2vw] bg-gray-300 rounded"></div>
              </div>
            </div>
          </div>

          {/* Image Skeleton */}
          <div className="w-[30%] rounded-[1.2vw] overflow-hidden bg-gray-300"></div>

          {/* Content Skeleton */}
          <div className="w-full flex flex-col gap-[2vw]">
            <div className="md:w-[80%] xs:w-[90%] h-[2.1vw] bg-gray-300 rounded"></div>
            <div className="flex justify-between w-full items-center">
              <div className="lg:w-[10vw] md:w-[15vw] xs:w-[20vw] h-[1.2vw] bg-gray-300 rounded"></div>
              <div className="lg:w-[2vw] md:w-[3vw] xs:w-[4vw] h-[2vw] bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </div>
      ) : (
        filteredBlogPosts?.map((post, idx) => {
          return (
            <div
              key={idx}
              className="w-full lg:py-[2vw] xs:py-[3vw] border-b border-gray-200 flex gap-[2vw]"
            >
              <div className="p-[1vw]">
                {getFormatedTime(post.date).map((date, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center text-gray-400 font-lexend_deca"
                  >
                    <time className="lg:text-[3vw] md:text-[3.5vw] xs:text-[4.5vw] font-semibold">
                      {date.day}
                    </time>
                    <div className="flex items-center gap-1 lg:text-[1.2vw] md:text-[1.7vw] xs:text-[2.5vw]">
                      <time>{date.month}</time>
                      <time>{date.year}</time>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                to={`/blog/${post.slug}/${post._id}`}
                className="w-[30%] rounded-[1.2vw] overflow-hidden blogpopImgHover"
              >
                <img
                  className="w-full h-full object-cover transition-all duration-300"
                  src={`http://localhost:3000/${post.featuredImage}`}
                  alt=""
                />
              </Link>
              <div className="w-full flex flex-col gap-[2vw]">
                <Link
                  to={`/blog/${post.slug}/${post._id}`}
                  className="md:text-[1.6vw] xs:text-[2.6vw] font-semibold font-lexend_deca md:leading-[2.1vw] xs:leading-[3.1vw] transition-all duration-300 hover:text-themeBlue"
                >
                  {post.title.slice(0, -34) + "..."}
                </Link>
                <div className="flex justify-between w-full items-center">
                  <p className="lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] font-jost text-gray-500 mt-4">
                    {post.author}
                  </p>
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
          );
        }) ||
        blogPosts?.map((post, idx) => (
          <div
            key={idx}
            className="w-full lg:py-[2vw] xs:py-[3vw] border-b border-gray-200 flex gap-[2vw]"
          >
            <div className="p-[1vw]">
              {getFormatedTime(post.date).map((date, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center text-gray-400 font-lexend_deca"
                >
                  <time className="lg:text-[3vw] md:text-[3.5vw] xs:text-[4.5vw] font-semibold">
                    {date.day}
                  </time>
                  <div className="flex items-center gap-1 lg:text-[1.2vw] md:text-[1.7vw] xs:text-[2.5vw]">
                    <time>{date.month}</time>
                    <time>{date.year}</time>
                  </div>
                </div>
              ))}
            </div>
            <Link
              to={`/blog/${post.slug}/${post._id}`}
              className="w-[30%] rounded-[1.2vw] overflow-hidden blogpopImgHover"
            >
              <img
                className="w-full h-full object-cover transition-all duration-300"
                src={`http://localhost:3000/${post.featuredImage}`}
                alt=""
              />
            </Link>
            <div className="w-full flex flex-col gap-[2vw]">
              <Link
                to={`/blog/${post.slug}/${post._id}`}
                className="md:text-[1.6vw] xs:text-[2.6vw] font-semibold font-lexend_deca md:leading-[2.1vw] xs:leading-[3.1vw] transition-all duration-300 hover:text-themeBlue"
              >
                {post.title.slice(0, -34) + "..."}
              </Link>
              <div className="flex justify-between w-full items-center">
                <p className="lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] font-jost text-gray-500 mt-4">
                  {post.author}
                </p>
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
        ))
      )}
    </>
  );
};

export default BlogPop;
