import React from "react";
import { Link } from "react-router-dom";

const TestimonialBody = () => {
  let testimonialData = [
    {
      img: "/imgs/testimonial/a4.jpg",
      disc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque",
      name: "Jonathon Doe",
      designation: "Business Owner",
    },
    {
      img: "/imgs/testimonial/a5.jpg",
      disc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque",
      name: "Ruki-Yead",
      designation: "WordPress Developer",
    },
    {
      img: "/imgs/testimonial/a6.jpg",
      disc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque",
      name: "Marcus Ruhl",
      designation: "WordPress Developer",
    },
    {
      img: "/imgs/testimonial/a7.jpg",
      disc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque",
      name: "Adam Chuzi",
      designation: "WordPress Developer",
    },
    {
      img: "/imgs/testimonial/a8.jpg",
      disc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque",
      name: "Ruki-Yead",
      designation: "WordPress Developer",
    },
    {
      img: "/imgs/testimonial/a9.jpg",
      disc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque",
      name: "Ruki-Yead",
      designation: "WordPress Developer",
    },
    {
      img: "/imgs/testimonial/a10.jpg",
      disc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque",
      name: "Ruki-Yead",
      designation: "WordPress Developer",
    },
    {
      img: "/imgs/testimonial/a11.jpg",
      disc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque",
      name: "Ruki-Yead",
      designation: "WordPress Developer",
    },
  ];
  return (
    <div className="bg-[#F9FBFF]">
      <div className="max-w-[1200px] min-h-screen mx-auto  py-24 px-5 font-jost">
        <div className="w-full">
          <div className="grid lg:grid-cols-2 lg:gap-20 xs:gap-8 w-full place-items-center items-center">
            {testimonialData.map((data) => {
              return (
                <div
                  id="testiBoxes"
                  className="flex gap-3 transition-all duration-500 p-8 rounded-3xl bg-white w-[33rem] border border-gray-100"
                >
                  <div className="h-full w-full">
                    <img
                      className="rounded-l-3xl h-full w-full -translate-x-20"
                      src={data.img}
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col gap-4">
                    <div>
                      <img src="/imgs/testimonial/Quote.svg" alt="" />
                    </div>
                    <div>
                      <p className="text-lg text-gray-500">{data.disc}</p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="text-3xl font-medium">{data.name}</p>
                      <p className="text-lg text-gray-500">
                        {data.designation}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialBody;
