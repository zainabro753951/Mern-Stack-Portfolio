import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import TestimonialCard from "./TestimonialCard";
import { useTestimonial } from "../Context/GetTestimonial";

gsap.registerPlugin(useGSAP, ScrollTrigger);
const Testimonial = () => {
  const { testimonialData } = useTestimonial();

  const testiText = useRef(null);
  gsap.config({ nullTargetWarn: false, force3D: true });
  useGSAP(() => {
    gsap.from(testiText.current, {
      scrollTrigger: {
        trigger: testiText.current,
        start: "center 80%",
        end: "bottom 10%",
        toggleActions: "play none none reverse",
      },
      y: -90,
      duration: 1,
      opacity: 0,
      rotate: 45,
      transformOrigin: "center",
      ease: "power4",
      force3D: true,
    });

    gsap.from(".testimonialCard", {
      scrollTrigger: {
        trigger: ".testimonialCard",
        start: "top 90%",
        end: "bottom 10%",
        toggleActions: "play none none reverse",
      },
      scale: 0,
      duration: 1.5,
      transformOrigin: "center",
      ease: "power4",
      force3D: true,
    });
  }, []);

  return (
    <div className="bg-[#F9FBFF]">
      <div className="md:max-w-[80vw] mx-auto pt-[14vw] lg:pt-[15vw] md:py-[9vw] xs:py-[15vw] px-5 font-jost">
        <div className="flex justify-between flex-wrap lg:gap-0 md:gap-[2vw] xs:gap-[4vw] items-end">
          <div>
            <div className="flex items-center gap-4 text-themeBlue">
              <h1 className="lg:text-[1.3vw] md:text-[2.3vw] xs:text-[3.6vw]">
                Testimonial
              </h1>
              <div id="rotateAbout">
                <svg
                  className="lg:w-[2.2vw] md:w-[3.2vw] xs:w-[4.7vw]"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.32185 0.162195C5.92711 0.458249 6.20673 1.29707 6.83174 1.70825C7.35805 2.05365 9.61133 2.16878 11.2561 1.95496C15.7627 1.34641 18.2298 2.57997 17.9831 5.2938C17.6377 9.27408 17.5719 12.0866 17.8186 13.4353C18.0982 14.9978 18.0653 14.8826 17.539 14.4879C17.0292 14.1096 15.8614 13.3366 15.2035 12.9254C14.6607 12.5965 13.7232 12.1195 13.5423 12.728C13.2462 13.7313 12.358 15.2774 11.5686 16.33C9.77579 18.7149 6.32185 19.2577 3.36131 18.7478C2.11131 18.534 2.07841 18.1063 2.12775 17.1688C2.29223 13.8136 2.52246 4.86616 2.9172 2.97471C3.11457 2.02076 3.34485 1.85628 4.08498 1.64246C5.38433 1.28062 4.4962 0.655619 2.96659 0.836541C1.89751 0.968121 1.28895 1.36286 0.910659 2.76089C0.334999 4.9484 0.400789 8.92867 0.0060502 17.0702C-0.0926344 18.9781 1.02579 19.636 2.63764 19.8004C3.59159 19.8991 5.03895 19.932 7.47317 19.9649C10.4995 19.9978 12.0126 20.0471 13.0324 19.8991C14.1837 19.7346 14.6936 19.3235 16.0588 18.4188C20.368 15.5241 20.2035 15.7873 20.2199 11.9714C20.2528 3.22142 19.0357 0.984568 14.0686 0.754304C12.6212 0.688514 11.2232 0.524037 10.6969 0.37601C9.3153 -0.00228091 6.71659 -0.133858 6.32185 0.162195ZM9.24946 4.83327C8.0488 4.93195 7.63768 5.82011 8.65742 6.09972C9.49624 6.32998 13.7067 6.37932 15.1048 6.2313C15.96 6.13261 15.6146 5.52406 14.9238 5.228C13.9041 4.78392 11.8153 4.61945 9.24946 4.83327ZM7.17715 8.18854C4.34819 8.32012 5.08831 9.09315 6.33831 9.33986C8.87122 9.83328 15.5982 9.89908 15.5982 9.24118C15.5982 8.33657 12.3745 7.94183 7.17715 8.18854ZM7.19353 13.6984C8.3613 13.6655 10.6969 13.4682 11.1245 13.3366C11.8647 13.1063 10.8449 12.3168 9.56203 12.1359C7.83504 11.8892 7.11129 11.8234 6.70011 11.8563C4.52905 11.9714 5.483 13.7478 7.19353 13.6984ZM17.8021 15.5405C17.6048 15.6886 15.7133 17.5965 13.4436 18.5504C12.5883 18.9123 12.1442 18.8629 12.7034 18.1392C13.1475 17.3333 14.6772 13.9287 15.0555 13.9287C15.2693 13.9451 17.8021 15.5405 17.8021 15.5405Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="overflow-hidden">
              <h2
                ref={testiText}
                style={{ willChange: "transform, opacity" }}
                className="lg:text-[3.2vw] md:text-[4.2vw] xs:text-[5.7vw] pt-4 font-semibold lg:leading-[3.6vw] md:leading-[4.6vw] xs:leading-[6.1vw] font-lexend_deca tracking-wide"
              >
                What <span className="text-themePurple">my client</span> have{" "}
                <br /> to say <span className="text-themeBlue">about me</span>
              </h2>
            </div>
          </div>
          <div>
            <Link
              className="md:text-[2.4vw] lg:text-[1.4vw] xs:text-[3.9vw] font-semibold text-themePurple relative"
              id="viewProject"
            >
              View All Testimonial
            </Link>
          </div>
        </div>
        <div className="w-full">
          <div
            style={{ willChange: "opacity, scale" }}
            className="grid lg:grid-cols-2 lg:gap-[2.5vw] md:gap-[3.9vw] xs:gap-[5.4vw] w-full place-items-center items-center mt-16"
          >
            {testimonialData?.slice(1, 3).map((data, idx) => (
              <div key={idx} className="testimonialCard">
                <TestimonialCard data={data} />
              </div>
            )) || null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
