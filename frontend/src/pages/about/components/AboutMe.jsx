import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";
import { GetAboutData } from "../../../Context/GetAboutData";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const AboutMe = () => {
  const { aboutData, isLoading } = GetAboutData();
  const aboutPic = useRef(null);
  const aboutText = useRef(null);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  gsap.config({ force3D: true });

  useGSAP(() => {
    gsap.from(aboutPic.current, {
      scrollTrigger: {
        trigger: aboutPic.current,
        start: "bottom 140%",
        end: "top 10%",
        toggleActions: "play none none reverse",
      },
      scale: 0,
      opacity: 0,
      transformOrigin: "center",
      duration: 1.5,
      force3D: true,
      ease: "back",
    });

    gsap.from(aboutText.current, {
      scrollTrigger: {
        trigger: aboutText.current,
        start: "center 80%",
        end: "bottom 10%",
        toggleActions: "play none none reverse",
      },
      y: -90,
      duration: 1,
      opacity: 0,
      rotate: 45,
      transformOrigin: "center",
      force3D: true,
      ease: "power4",
    });

    gsap.from(".blured", {
      scrollTrigger: {
        trigger: ".blured",
        start: "bottom 75%",
        end: "top 10%",
        toggleActions: "play none none reverse",
      },
      scale: 0.7,
      y: -45,
      opacity: 0,
      duration: 1.5,
      force3D: true,
      transformOrigin: "center",
      ease: "back",
      stagger: 0.1,
    });
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="bg-[#F9FBFF]">
          <div className="md:max-w-[80vw] mx-auto py-24 min-h-screen">
            <div className="w-full h-full grid xs:grid-cols-1 md:grid-cols-2 px-5 place-items-center xs:gap-4 lg:gap-32">
              {/* Image Column Skeleton */}
              <div className="w-full h-full">
                <div className="relative">
                  <div className="w-full h-[400px] bg-gray-200 rounded-2xl animate-pulse"></div>
                  <div className="absolute right-20 top-20 z-10 w-[80px] h-[80px] bg-gray-300 rounded-full animate-pulse"></div>
                </div>
              </div>

              {/* Content Column Skeleton */}
              <div className="flex flex-col gap-9 w-full">
                {/* Heading Skeleton */}
                <div className="overflow-hidden">
                  <div className="lg:w-[80%] md:w-[90%] h-[4vw] bg-gray-200 rounded-full animate-pulse"></div>
                </div>

                {/* Paragraph Skeleton */}
                <div className="space-y-3">
                  <div className="w-full h-[1.5vw] bg-gray-200 rounded-full animate-pulse"></div>
                  <div className="w-full h-[1.5vw] bg-gray-200 rounded-full animate-pulse"></div>
                  <div className="w-[80%] h-[1.5vw] bg-gray-200 rounded-full animate-pulse"></div>
                </div>

                {/* Summary Section Skeleton */}
                <div className="space-y-6">
                  {/* "In summary" title */}
                  <div className="w-[30%] h-[2.5vw] bg-gray-200 rounded-full animate-pulse"></div>

                  {/* Info items */}
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="space-y-2">
                      <div className="w-[40%] h-[1.5vw] bg-gray-200 rounded-full animate-pulse"></div>
                      <div className="w-[70%] h-[2vw] bg-gray-300 rounded-full animate-pulse"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-[#F9FBFF]">
          <div className="max-w-[1200px] mx-auto py-24 min-h-screen">
            <div className="w-full h-full grid xs:grid-cols-1 md:grid-cols-2 px-5 place-items-center gap-32">
              <div className="md:w-full md:h-full">
                <div
                  ref={aboutPic}
                  style={{ willChange: "scale, opacity" }}
                  className="relative"
                >
                  <img
                    className=" w-full h-full object-cover rounded-2xl"
                    src={`${backendUrl}/${aboutData.profileImg}`}
                    loading="lazy"
                    alt=""
                  />
                  <img
                    id="AboutAnimation"
                    className="absolute right-20 top-20 z-10"
                    src="/imgs/About/about_shape_3.svg"
                    loading="lazy"
                    alt=""
                  />
                </div>
              </div>
              <div className="flex flex-col gap-9">
                <div className="overflow-hidden">
                  <h2
                    ref={aboutText}
                    style={{ willChange: "transform, opacity" }}
                    className="lg:text-[2.7vw] md:text-[3.3vw] xs:text-[4.6vw] font-semibold lg:leading-[3.3vw] md:leading-[4.1vw] xs:leading-[5.1vw] font-lexend_deca tracking-wide"
                  >
                    {aboutData.aboutHeadline}
                  </h2>
                </div>
                <p
                  style={{ willChange: "scale, opacity" }}
                  className="lg:text-[1.3vw] blured md:text-[2.3vw] xs:text-[3.6vw] lg:leading-[1.9vw] md:leading-[2.9vw] xs:leading-[4.2vw] text-gray-500 font-jost"
                >
                  {aboutData.about}
                </p>
                <h3
                  style={{ willChange: "scale, opacity" }}
                  className="lg:text-[1.9vw] blured md:text-[2.9vw] xs:text-[4.4vw] font-lexend_deca font-semibold"
                >
                  In summary
                </h3>
                <div>
                  <p
                    style={{ willChange: "scale, opacity" }}
                    className="lg:text-[1.3vw] blured md:text-[2.3vw] xs:text-[3.6vw] lg:leading-[1.9vw] md:leading-[2.9vw] xs:leading-[4.2vw] font-jost text-gray-500"
                  >
                    Current Location
                  </p>
                  <h3
                    style={{ willChange: "scale, opacity" }}
                    className="lg:text-[1.5vw] blured md:text-[2.5vw] xs:text-[4vw] font-semibold font-lexend_deca"
                  >
                    {aboutData.location}
                  </h3>
                </div>
                <div>
                  <p
                    style={{ willChange: "scale, opacity" }}
                    className="lg:text-[1.3vw] blured md:text-[2.3vw] xs:text-[3.6vw] lg:leading-[1.9vw] md:leading-[2.9vw] xs:leading-[4.2vw] font-jost text-gray-500"
                  >
                    Education
                  </p>
                  <h3
                    style={{ willChange: "scale, opacity" }}
                    className="lg:text-[1.5vw] blured md:text-[2.5vw] xs:text-[4vw] font-semibold font-lexend_deca"
                  >
                    {aboutData.education}
                  </h3>
                </div>
                <div>
                  <p
                    style={{ willChange: "scale, opacity" }}
                    className="lg:text-[1.3vw] blured md:text-[2.3vw] xs:text-[3.6vw] lg:leading-[1.9vw] md:leading-[2.9vw] xs:leading-[4.2vw] font-jost text-gray-500"
                  >
                    Interests
                  </p>
                  <h3
                    style={{ willChange: "scale, opacity" }}
                    className="lg:text-[1.5vw] blured md:text-[2.5vw] xs:text-[4vw] font-semibold font-lexend_deca"
                  >
                    {aboutData.hobbies?.map((hobby) => {
                      return <span>{hobby}</span>;
                    })}
                  </h3>
                </div>
                <div>
                  <p
                    style={{ willChange: "scale, opacity" }}
                    className="lg:text-[1.3vw] blured md:text-[2.3vw] xs:text-[3.6vw] lg:leading-[1.9vw] md:leading-[2.9vw] xs:leading-[4.2vw] font-jost text-gray-500"
                  >
                    Email
                  </p>
                  <h3
                    style={{ willChange: "scale, opacity" }}
                    className="lg:text-[1.5vw] blured md:text-[2.5vw] xs:text-[4vw] font-semibold font-lexend_deca"
                  >
                    {aboutData?.email}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AboutMe;
