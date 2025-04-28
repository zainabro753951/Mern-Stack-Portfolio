import React from "react";

const UserAvator = () => {
  return (
    <div className="w-full xs:p-[1.5vw] md:p-[0.9vw] md:rounded-[0.4vw] xs:rounded-[1vw] bg-themePurple/20 flex items-center gap-2">
      <div className="lg:w-[3vw] md:w-[5vw] xs:w-[8vw] lg:h-[3vw] md:h-[5vw] xs:h-[8vw] rounded-full overflow-hidden">
        <img src="/imgs/projects/p3.jpg" alt="" />
      </div>
      <div>
        <h4 className="lg:text-[1.2vw] md:text-[2.2vw] xs:hidden lg:block xs:text-[3.4vw]  font-lexend_deca font-medium">
          Zain Abro
        </h4>
        <p className="lg:text-[1vw] xs:hidden lg:block md:text-[2vw] xs:text-[3vw] font-jost text-gray-500">
          Web Developer
        </p>
      </div>
    </div>
  );
};

export default UserAvator;
