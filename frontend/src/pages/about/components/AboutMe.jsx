import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const AboutMe = () => {
  const aboutPic = useRef(null);
  const aboutText = useRef(null);

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
            <div className="overflow-hidden">
              <h2
                ref={aboutText}
                style={{ willChange: "transform, opacity" }}
                className="lg:text-[3.2vw] md:text-[4.2vw] xs:text-[5.7vw] font-semibold lg:leading-[3.6vw] md:leading-[4.6vw] xs:leading-[6.2vw] font-lexend_deca tracking-wide"
              >
                I build software that solve user problems
              </h2>
            </div>
            <p
              style={{ willChange: "scale, opacity" }}
              className="lg:text-[1.3vw] blured md:text-[2.3vw] xs:text-[3.6vw] lg:leading-[1.9vw] md:leading-[2.9vw] xs:leading-[4.2vw] text-gray-500 font-jost"
            >
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim.
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
                Deer Trail, CO 80105, United States
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
                MBA in Computer Science Engineering
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
                Traveling, Cricket, Football, Design, Reading Book, Cooking,
                Biking, Excercise
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
