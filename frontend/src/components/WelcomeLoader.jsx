import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

gsap.registerPlugin(useGSAP);
const WelcomeLoader = () => {
  const circle1 = useRef(null);
  const circle2 = useRef(null);
  const circle3 = useRef(null);

  gsap.config({ force3D: true });

  useGSAP(() => {
    gsap.from(circle1.current, {
      scale: 0.5,
      opacity: 0,
      ease: "power",
      transformOrigin: "center",
      force3D: true,
      yoyo: true,
      y: 80,
      repeat: -1,
      duration: 2,
    });
    gsap.from(circle2.current, {
      scale: 0.5,
      opacity: 0,
      ease: "power",
      transformOrigin: "center",
      force3D: true,
      yoyo: true,
      repeat: -1,
      duration: 2,
      delay: 1.5,
    });
    gsap.from(circle3.current, {
      scale: 0.6,
      opacity: 0,
      ease: "power",
      transformOrigin: "center",
      force3D: true,
      yoyo: true,
      repeat: -1,
      y: -80,
      duration: 2,
      delay: 3,
    });
  }, []);
  return (
    <div className="w-full h-screen bg-hero relative bg-cover bg-center">
      <div className=" w-full h-full flex flex-col justify-center items-center">
        <div className="flex translate-y-[15%]">
          <div
            style={{
              willChange: "scale, opacity",
              transformOrigin: "center",
              boxShadow:
                "0 0 10px #ff6d5ad2, 0 0 20px #ff6d5ad2, 0 0 30px #ff6d5ad2 ,0 0 60px #ff6d5ad2, 0 0 90px #ff6d5ad2, 0 0 150px #ff6d5ad2",
            }}
            ref={circle1}
            className="lg:w-[20vw] lg:h-[20vw] md:w-[35vw] md:h-[35vw] translate-x-[15%] xs:w-[55vw] xs:h-[55vw] rounded-full blur-xl  text-[#ff6d5ad2] bg-[#ff6d5a]"
          ></div>
          <div
            style={{
              willChange: "scale",
              transformOrigin: "center",
              boxShadow:
                "0 0 10px #342eadaa, 0 0 20px #342eadaa, 0 0 30px #342eadaa ,0 0 60px #342eadaa, 0 0 90px #342eadaa, 0 0 150px #342eadaa",
            }}
            ref={circle2}
            className="lg:w-[20vw] lg:h-[20vw] md:w-[35vw] md:h-[35vw] -translate-x-[15%] xs:w-[55vw] xs:h-[55vw] rounded-full  blur-xl text-[#342eadaa] bg-[#342EAD]"
          ></div>
        </div>
        <div
          style={{
            willChange: "scale",
            transformOrigin: "center",
            boxShadow:
              "0 0 10px #aa54868f, 0 0 20px #aa54868f, 0 0 30px #aa54868f ,0 0 60px #aa54868f, 0 0 90px #aa54868f, 0 0 150px #aa54868f",
          }}
          ref={circle3}
          className="lg:w-[20vw] lg:h-[20vw] md:w-[35vw] md:h-[35vw] -translate-y-[15%] xs:w-[55vw] xs:h-[55vw] rounded-full blur-xl text-[#aa54868f] bg-[#AA5486]"
        ></div>
      </div>
      <div className="absolute text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-6xl animate-pulse text-white font-lexend_deca font-bold">
          Welcome
        </h1>
      </div>
    </div>
  );
};

export default WelcomeLoader;
