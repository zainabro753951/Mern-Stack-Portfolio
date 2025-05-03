import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from "react";
import TestimonialCard from "../../../components/TestimonialCard";
import { useTestimonial } from "../../../Context/GetTestimonial";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const TestimonialBody = () => {
  const { testimonialData, isLoading } = useTestimonial();

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
    <>
      <div className="bg-[#F9FBFF]">
        <div className="md:max-w-[80vw] min-h-screen mx-auto  py-24 px-5 font-jost">
          <div className="w-full">
            <div className="grid lg:grid-cols-2 lg:gap-20 xs:gap-8 w-full place-items-center items-center">
              {isLoading
                ? [1, 2, 3, 4, 5, 6].map((_, idx) => {
                    return (
                      <div
                        key={idx}
                        id="testiBoxes"
                        className="flex sm:flex-nowrap justify-center xs:flex-wrap lg:gap-[1.5vw] md:gap-[3vw] xs:gap-[3.5vw] transition-all items-center duration-500 lg:p-[1.9vw] md:p-[2vw] xs:p-[3.5vw] rounded-[2vw] bg-white lg:w-[34vw] border border-gray-100"
                      >
                        {/* Image placeholder */}
                        <div className="w-full lg:h-[16vw] sm:w-full sm:h-full">
                          <div className="sm:rounded-l-[2vw] lg:w-full lg:h-full xs:rounded-full sm:rounded-none object-cover sm:h-full sm:w-full xs:w-[50vw] xs:h-[50vw] lg:-translate-x-20 bg-gray-200 animate-pulse"></div>
                        </div>

                        {/* Content placeholder */}
                        <div className="flex flex-col gap-4 w-full">
                          {/* Quote icon placeholder */}
                          <div>
                            <div className="lg:w-[2.8vw] md:w-[3.8vw] xs:w-[5.3vw] h-[1.5vw] bg-gray-200 animate-pulse rounded"></div>
                          </div>

                          {/* Message placeholder */}
                          <div className="space-y-2">
                            <div className="lg:h-[1.3vw] md:h-[2.3vw] xs:h-[3.6vw] w-full bg-gray-200 animate-pulse rounded"></div>
                            <div className="lg:h-[1.3vw] md:h-[2.3vw] xs:h-[3.6vw] w-4/5 bg-gray-200 animate-pulse rounded"></div>
                            <div className="lg:h-[1.3vw] md:h-[2.3vw] xs:h-[3.6vw] w-3/4 bg-gray-200 animate-pulse rounded"></div>
                          </div>

                          {/* Name and designation placeholder */}
                          <div className="flex flex-col gap-2">
                            <div className="md:h-[2.4vw] lg:h-[1.4vw] xs:h-[3.9vw] w-1/3 bg-gray-200 animate-pulse rounded"></div>
                            <div className="lg:h-[1.3vw] md:h-[2.3vw] xs:h-[3.6vw] w-1/2 bg-gray-200 animate-pulse rounded"></div>
                          </div>
                        </div>
                      </div>
                    );
                  })
                : testimonialData?.map((data, idx) => {
                    return (
                      <div
                        key={idx}
                        className="testiCard"
                        style={{ willChange: "scale, opacity" }}
                      >
                        <TestimonialCard data={data} key={idx} />
                      </div>
                    );
                  }) || null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialBody;
