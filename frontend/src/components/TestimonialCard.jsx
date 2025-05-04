import React from "react";
import OptimizedImage from "../Common/OptimiseImage";

const TestimonialCard = ({ data }) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  return (
    <div
      id="testiBoxes"
      className="flex justify-center  md:gap-[1.5vw] xs:gap-[3vw] transition-all items-center duration-500 md:p-[1.9vw] sm:p-[2.9vw] xs:p-[3vw]  md:rounded-[2vw] xs:rounded-[2vw] bg-white md:w-[34vw] border border-gray-100"
    >
      <div className="md:w-[50%] xs:w-[30%] md:h-[16vw] sm:w-full sm:h-full">
        <OptimizedImage
          className="md:rounded-l-[2vw] xs:rounded-full md:w-full md:h-full  sm:rounded-none object-cover sm:h-full sm:w-full xs:w-[20vw] xs:h-[20vw] lg:-translate-x-20"
          src={`${backendUrl.slice(0, -4)}/${data.profileImg}`}
        />
      </div>
      <div className="flex flex-col md:w-[50%] xs:w-[70%] md:gap-[1.5vw] xs:gap-[2.5vw]">
        <div>
          <OptimizedImage
            className="md:w-[2.8vw] sm:w-[3.8vw] xs:w-[4.8vw]"
            src="/imgs/testimonial/Quote.svg"
          />
        </div>
        <div>
          <p className="md:text-[1.3vw] sm:text-[2.3vw] xs:text-[3.3vw] md:leading-[1.9vw] sm:leading-[2.9vw] xs:leading-[4.1vw] text-gray-500">
            {data.message}
          </p>
        </div>
        <div className="flex flex-col">
          <p className="xs:text-[3.4vw] sm:text-[2.4vw] md:text-[1.4vw] font-medium">
            {data.name}
          </p>
          <p className="md:text-[1.3vw] sm:text-[2.3vw] xs:text-[3.3vw] md:leading-[1.9vw] sm:leading-[2.9vw] xs:leading-[4.1vw] text-gray-500">
            {data.designation}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
