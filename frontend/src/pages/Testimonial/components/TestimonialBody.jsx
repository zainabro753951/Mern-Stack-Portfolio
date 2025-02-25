import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from "react";
import TestimonialCard from "../../../components/TestimonialCard";

gsap.registerPlugin(useGSAP, ScrollTrigger);

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

  gsap.config({ force3D: true });
  useGSAP(() => {
    gsap.from(".testiCard", {
      scrollTrigger: {
        trigger: ".testiCard",
        start: "30% 90%",
        end: "bottom 10%",
        toggleActions: "play none none reverse",
      },
      scale: 0,
      opacity: 0,
      duration: 1.5,
      stagger: 0.3,
      transformOrigin: "center",
      ease: "back",
      force3D: true,
    });
  }, []);
  return (
    <div className="bg-[#F9FBFF]">
      <div className="md:max-w-[80vw] min-h-screen mx-auto  py-24 px-5 font-jost">
        <div className="w-full">
          <div className="grid lg:grid-cols-2 lg:gap-20 xs:gap-8 w-full place-items-center items-center">
            {testimonialData.map((data, idx) => {
              return (
                <div
                  className="testiCard"
                  style={{ willChange: "scale, opacity" }}
                >
                  <TestimonialCard data={data} key={idx} />
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
