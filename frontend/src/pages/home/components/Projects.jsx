import React from "react";

const Projects = () => {
  let projectData = [
    {
      count: 48,
      exp: "Years of experience",
    },
    {
      count: 120,
      exp: "Clients Satisfied",
    },
    {
      count: 185,
      exp: "Projects Done Successfully",
    },
  ];
  return (
    <div className="w-full bg-projects bg-cover bg-no-repeat">
      <div className="max-w-[1200px] mx-auto xs:h-full lg:h-[40vh] xs:px-20 lg:px-0">
        <div className="w-full h-full grid lg:grid-cols-3 lg:gap-10 items-end translate-y-20">
          {projectData.map((data) => {
            return (
              <div className="flex flex-col gap-5 text-center xs:py-16 lg:py-0 h-[70%] justify-center projectGardient transition-all duration-500 hover:shadow-2xl shadow-xl p-8 rounded-3xl text-black">
                <h2 className="text-5xl font-bold">{data.count}+</h2>
                <p className="text-2xl">{data.exp}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
