import React from "react";

const Counter = ({ data }) => {
  return (
    <div className="flex flex-col xs:gap-[1.5vw] md:gap-[0.5vw] text-center h-full justify-center projectGardient transition-all duration-500 hover:shadow-2xl shadow-xl md:p-[2vw] md:rounded-[1.5vw] xs:rounded-[2.5vw] text-black md:py-[3vw] xs:py-[4vw]">
      <h2 className="md:text-[2.8vw] xs:text-[3.8vw] font-bold">
        {data.count}+
      </h2>
      <p className="md:text-[1.4vw] xs:text-[2.4vw]">{data.exp}</p>
    </div>
  );
};

export default Counter;
