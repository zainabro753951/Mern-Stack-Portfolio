import React, { useState } from "react";
import ShareLinks from "./ShareLinks";
import { useEffect } from "react";
import BlogContent from "./BlogContent";
import Button from "../../../../components/Button";

const Hero = ({ content }) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const [publishDate, setPublishDate] = useState(null);
  useEffect(() => {
    if (content) {
      const date = new Date(content.date).toLocaleDateString();
      setPublishDate(date);
    }
  }, [content]);
  return (
    <div className="bg-[#f9fbff]">
      <div className="md:max-w-[80%]  px-3 mx-auto lg:py-[5vw] md:py-[8vw] xs:py-[10vw]">
        <div className="w-full text-center lg:mt-[8vw] xs:mt-[12vw] lg:gap-[5vw] md:gap-[6vw] xs:gap-[7vw] ">
          <h2 className="lg:text-[2.6vw] md:text-[3.6vw] xs:text-[4.7vw] lg:leading-[3.2vw] md:leading-[4.2vw] xs:leading-[4.8vw] font-semibold font-lexend_deca md:mt-4 xs:mt-2">
            {content ? content.title : ""}
          </h2>
          <div className="flex items-center justify-center mx-auto gap-[3.5vw]">
            <p className="lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] font-jost text-gray-500 lg:mt-[1.6vw] md:mt-[2.6vw] xs:mt-[3.6vw]">
              {publishDate}
            </p>
            <p
              id="talkBtn"
              className="lg:text-[1.2vw] py-2 relative px-2 cursor-pointer text-themeBlue md:text-[2.2vw] xs:text-[3.4vw] font-jost  lg:mt-[1.6vw] md:mt-[2.6vw] xs:mt-[3.6vw]"
            >
              {content ? content.author : ""}
            </p>
            <p className="lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] font-jost text-gray-500 lg:mt-[1.6vw] md:mt-[2.6vw] xs:mt-[3.6vw]">
              {content ? content.category : ""}
            </p>
          </div>
        </div>
        <div className="w-full h-[30vw] md:my-[6vw] xs:my-[6vw] rounded-[0.5vw] overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={content ? `${backendUrl}/${content.featuredImage}` : ""}
            alt=""
          />
        </div>
        <BlogContent content={content ? content : ""} />
      </div>
    </div>
  );
};

export default Hero;
