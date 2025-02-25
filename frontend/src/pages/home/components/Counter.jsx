import React from "react";

const Counter = ({ data }) => {
  return (
    <div className="flex flex-col gap-[0.5vw] text-center xs:py-16 lg:py-0 h-full justify-center projectGardient transition-all duration-500 hover:shadow-2xl shadow-xl p-8 rounded-3xl text-black">
      <h2 className="lg:text-[2.8vw] md:text-[3.8vw] xs:text-[5.3vw] font-bold">
        {data.count}+
      </h2>
      <p className="lg:text-[1.4vw] md:text-[2.4vw] xs:text-[3.7vw]">
        {data.exp}
      </p>
    </div>
  );
};

export default Counter;
