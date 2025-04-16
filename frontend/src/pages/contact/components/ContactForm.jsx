import React from "react";
import HireMeBtn from "../../../components/HireMeBtn";
const ContactForm = () => {
  return (
    <div className="bg-[#F9FBFF]">
      <div className="md:max-w-[80vw] mx-auto md:py-[8vw] px-5 xs:py-[15vw]">
        <div className="md:w-[70%] xs:w-full mx-auto">
          <h3 className="md:text-[1.8vw] xs:text-[2.8vw] font-semibold font-lexend_deca mb-2">
            Let's Talk
          </h3>
          <p className="md:text-[1.3vw] xs:text-[2.3vw]">
            Got a project in mind? Fill in the form or send us.
          </p>
          <form
            method="post"
            className="flex flex-col md:text-[1.3vw] xs:text-[2.3vw] md:gap-[1.5vw] xs:gap-[2.5vw] w-full md:py-[1.2vw] xs:py-[1.5vw]"
          >
            <input
              type="text"
              placeholder="First Name"
              className="md:py-[1.2vw] xs:py-[1.5vw] w-full xs:rounded-[1.5vw] md:rounded-[0.7vw] md:text-[1.3vw] xs:text-[2.3vw] font-jost placeholder:text-gray-500 border-gray-100 border px-5 outline-none focus:border-themeBlue"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="md:py-[1.2vw] xs:py-[1.5vw] w-full xs:rounded-[1.5vw] md:rounded-[0.7vw] md:text-[1.3vw] xs:text-[2.3vw] font-jost placeholder:text-gray-500 border-gray-100 border px-5 outline-none focus:border-themeBlue"
            />
            <input
              type="email"
              placeholder="Email"
              className="md:py-[1.2vw] xs:py-[1.5vw] w-full xs:rounded-[1.5vw] md:rounded-[0.7vw] md:text-[1.3vw] xs:text-[2.3vw] font-jost placeholder:text-gray-500 border-gray-100 border px-5 outline-none focus:border-themeBlue"
            />
            <select className="md:py-[1.2vw] xs:py-[1.5vw] w-full xs:rounded-[1.5vw] md:rounded-[0.7vw] md:text-[1.3vw] xs:text-[2.3vw] font-jost placeholder:text-gray-500 border-gray-100 border px-5 outline-none focus:border-themeBlue">
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
              className="md:py-[1.2vw] xs:py-[1.5vw] w-full xs:rounded-[1.5vw] md:rounded-[0.7vw] md:text-[1.3vw] xs:text-[2.3vw] font-jost placeholder:text-gray-500 border-gray-100 border px-5 outline-none focus:border-themeBlue"
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
