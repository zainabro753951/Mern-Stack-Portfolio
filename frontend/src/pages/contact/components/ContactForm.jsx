import React from "react";
import HireMeBtn from "../../../components/HireMeBtn";
const ContactForm = () => {
  return (
    <div className="bg-[#F9FBFF]">
      <div className="md:max-w-[80vw] mx-auto lg:py-[8vw] xs:py-[15vw]">
        <div className="w-[70%] mx-auto">
          <h3 className="lg:text-[1.8vw] md:text-[2.8vw] xs:text-[4.3vw] font-semibold font-lexend_deca mb-2">
            Let's Talk
          </h3>
          <p className="lg:text-[1.3vw] md:text-[2.3vw] xs:text-[3.6vw]">
            Got a project in mind? Fill in the form or send us.
          </p>
          <form
            method="post"
            className="flex flex-col lg:text-[1.3vw] md:text-[2.3vw] xs:text-[3.6vw] gap-8 w-full py-5"
          >
            <input
              type="text"
              placeholder="First Name"
              className="lg:py-[1.2vw] md:py-[2.2vw] xs:py-[3.8vw] w-full rounded-lg lg:text-[1.3vw] md:text-[2.3vw] xs:text-[3.6vw] font-jost placeholder:text-gray-500 border-gray-100 border px-5 outline-none focus:border-themeBlue"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="lg:py-[1.2vw] md:py-[2.2vw] xs:py-[3.8vw] w-full rounded-lg lg:text-[1.3vw] md:text-[2.3vw] xs:text-[3.6vw] font-jost placeholder:text-gray-500 border-gray-100 border px-5 outline-none focus:border-themeBlue"
            />
            <input
              type="email"
              placeholder="Email"
              className="lg:py-[1.2vw] md:py-[2.2vw] xs:py-[3.8vw] w-full rounded-lg lg:text-[1.3vw] md:text-[2.3vw] xs:text-[3.6vw] font-jost placeholder:text-gray-500 border-gray-100 border px-5 outline-none focus:border-themeBlue"
            />
            <select className="lg:py-[1.2vw] md:py-[2.2vw] xs:py-[3.8vw] w-full rounded-lg lg:text-[1.3vw] md:text-[2.3vw] xs:text-[3.6vw] font-jost placeholder:text-gray-500 border-gray-100 border px-5 outline-none focus:border-themeBlue">
              <option className="py-2 inline-block" value="">
                Select your budget
              </option>
              <option className="py-2 inline-block" value="$0-$100">
                $0-$100
              </option>
              <option className="py-2 inline-block" value="$100-$500">
                $100-$500
              </option>
              <option className="py-2 inline-block" value="$500-$1000">
                $500-$1000
              </option>
              <option className="py-2 inline-block" value="$1000-$1500">
                $1000-$1500
              </option>
            </select>
            <textarea
              className="lg:py-[1.2vw] md:py-[2.2vw] xs:py-[3.8vw] w-full rounded-lg lg:text-[1.3vw] md:text-[2.3vw] xs:text-[3.6vw] font-jost placeholder:text-gray-500 border-gray-100 border px-5 outline-none focus:border-themeBlue"
              name=""
              id=""
              rows="7"
              placeholder="Message"
            ></textarea>
            <button>
              <HireMeBtn text={"Send Message"} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
