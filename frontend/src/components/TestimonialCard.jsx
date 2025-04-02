import React from "react";

const TestimonialCard = ({ data }) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  console.log(data);

  return (
    <div
      id="testiBoxes"
      className="flex sm:flex-nowrap justify-center xs:flex-wrap lg:gap-[1.5vw] md:gap-[3vw] xs:gap-[3.5vw] transition-all items-center duration-500 lg:p-[1.9vw] md:p-[2vw] xs:p-[3.5vw] rounded-[2vw] bg-white lg:w-[34vw] border border-gray-100"
    >
      <div className="w-full lg:h-[16vw] sm:w-full sm:h-full">
        <img
          className="sm:rounded-l-[2vw] lg:w-full lg:h-full xs:rounded-full sm:rounded-none object-cover sm:h-full sm:w-full xs:w-[50vw] xs:h-[50vw] lg:-translate-x-20"
          src={`${backendUrl}/${data.profileImg}`}
          alt=""
        />
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <img
            className="lg:w-[2.8vw] md:w-[3.8vw] xs:w-[5.3vw]"
            src="/imgs/testimonial/Quote.svg"
            alt=""
          />
        </div>
        <div>
          <p className="lg:text-[1.3vw] md:text-[2.3vw] xs:text-[3.6vw] lg:leading-[1.9vw] md:leading-[2.9vw] xs:leading-[5.5vw] text-gray-500">
            {data.message}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="md:text-[2.4vw] lg:text-[1.4vw] xs:text-[3.9vw] font-medium">
            {data.name}
          </p>
          <p className="lg:text-[1.3vw] md:text-[2.3vw] xs:text-[3.6vw] lg:leading-[1.9vw] md:leading-[2.9vw] xs:leading-[5.5vw] text-gray-500">
            {data.designation}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
