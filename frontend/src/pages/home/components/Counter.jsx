import React from "react";

const Counter = ({ data }) => {
  return (
    <div className="flex flex-col gap-[0.5vw] text-center h-full justify-center projectGardient transition-all duration-500 hover:shadow-2xl shadow-xl p-8 rounded-3xl text-black md:py-[3vw] xs:py-[4vw]">
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
