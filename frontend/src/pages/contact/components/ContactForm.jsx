import React from "react";
import HireMeBtn from "../../../components/HireMeBtn";
const ContactForm = () => {
  return (
    <div className="bg-[#F9FBFF]">
      <div className="max-w-[1200px] mx-auto py-24">
        <div className="w-[70%] mx-auto">
          <h3 className="text-3xl font-semibold font-lexend_deca mb-2">
            Let's Talk
          </h3>
          <p>Got a project in mind? Fill in the form or send us.</p>
          <form method="post" className="flex flex-col gap-8 w-full py-5">
            <input
              type="text"
              placeholder="First Name"
              className="py-3 rounded-lg font-jost placeholder:text-gray-500 border-gray-100 border px-5 outline-none focus:border-themeBlue"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="py-3 rounded-lg font-jost placeholder:text-gray-500 border-gray-100 border px-5 outline-none focus:border-themeBlue"
            />
            <input
              type="email"
              placeholder="Email"
              className="py-3 rounded-lg font-jost placeholder:text-gray-500 border-gray-100 border px-5 outline-none focus:border-themeBlue"
            />
            <select className="py-3 rounded-lg font-jost placeholder:text-gray-500 border-gray-100 border px-5 outline-none focus:border-themeBlue">
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
              className="py-3 rounded-lg font-jost placeholder:text-gray-500 border-gray-100 border px-5 outline-none focus:border-themeBlue"
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
