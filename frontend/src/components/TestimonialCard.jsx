import React from "react";

const TestimonialCard = ({ data }) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  return (
    <div
      id="testiBoxes"
      className="flex sm:flex-nowrap justify-center xs:flex-wrap md:gap-[1.5vw] xs:gap-[3vw] transition-all items-center duration-500 md:p-[1.9vw] xs:p-[2vw]  md:rounded-[2vw] xs:rounded-[2vw] bg-white md:w-[34vw] border border-gray-100"
    >
      <div className="w-full md:h-[16vw] sm:w-full sm:h-full">
        <img
          className="md:rounded-l-[2vw] xs:rounded-l-[3vw] md:w-full md:h-full xs:rounded-full sm:rounded-none object-cover sm:h-full sm:w-full xs:w-[50vw] xs:h-[50vw] lg:-translate-x-20"
          src={`${backendUrl}/${data.profileImg}`}
          alt=""
        />
      </div>
      <div className="flex flex-col md:gap-[1.5vw] xs:gap-[2.5vw]">
        <div>
          <img
            className="md:w-[2.8vw] xs:w-[3.8vw]"
            src="/imgs/testimonial/Quote.svg"
            alt=""
          />
        </div>
        <div>
          <p className="md:text-[1.3vw] xs:text-[2.3vw] md:leading-[1.9vw] xs:leading-[2.9vw] text-gray-500">
            {data.message}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="xs:text-[2.4vw] md:text-[1.4vw] font-medium">
            {data.name}
          </p>
          <p className="md:text-[1.3vw] xs:text-[2.3vw] md:leading-[1.9vw] xs:leading-[2.9vw] text-gray-500">
            {data.designation}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
