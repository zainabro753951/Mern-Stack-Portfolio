import React from "react";

const AboutMe = () => {
  return (
    <div className="bg-[#F9FBFF]">
      <div className="max-w-[1200px] mx-auto py-24 min-h-screen">
        <div className="w-full h-full grid grid-cols-2 place-items-center gap-32">
          <div className="w-full h-full">
            <div className="relative">
              <img
                className=" w-full h-full object-cover rounded-2xl"
                src="/imgs/About/aboutMe.jpg"
                alt=""
              />
              <img
                id="AboutAnimation"
                className="absolute right-20 top-20 z-10"
                src="/imgs/About/about_shape_3.svg"
                alt=""
              />
            </div>
          </div>
          <div className="flex flex-col gap-9">
            <h2 className="text-5xl font-semibold font-lexend_deca tracking-wide leading-[59px]">
              I build software that solve user problems
            </h2>
            <p className="text-lg text-gray-500 font-jost">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim.
            </p>
            <h3 className="text-3xl font-lexend_deca font-semibold">
              In summary
            </h3>
            <div>
              <p className="text-lg font-jost text-gray-500">
                Current Location
              </p>
              <h3 className="text-xl font-semibold font-lexend_deca">
                Deer Trail, CO 80105, United States
              </h3>
            </div>
            <div>
              <p className="text-lg font-jost text-gray-500">Education</p>
              <h3 className="text-xl font-semibold font-lexend_deca">
                MBA in Computer Science Engineering
              </h3>
            </div>
            <div>
              <p className="text-lg font-jost text-gray-500">Interests</p>
              <h3 className="text-xl font-semibold font-lexend_deca">
                Traveling, Cricket, Football, Design, Reading Book, Cooking,
                Biking, Excercise
              </h3>
            </div>
            <div>
              <p className="text-lg font-jost text-gray-500">Email</p>
              <h3 className="text-xl font-semibold font-lexend_deca">
                name@gmail.com
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
