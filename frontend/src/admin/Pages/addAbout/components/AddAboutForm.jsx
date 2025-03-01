import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import axios from "axios";
import { IoWarning } from "react-icons/io5";
import HireMeBtn from "../../../../components/HireMeBtn";
const AddAboutForm = () => {
  const [aboutHeadline, setAboutHeadline] = useState("");
  const [location, setLocation] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [education, setEducation] = useState("");
  const [about, setAbout] = useState("");
  const [email, setEmail] = useState("");
  const [profileImg, setprofileImg] = useState("");
  const [hobbies, setHobbies] = useState("");
  const [emptyHobby, setEmptyHobby] = useState("");
  const [moreHobbies, setMoreHobbies] = useState([]);
  const [linkedIn, setLinkedIn] = useState("");
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");
  const [behance, setBehance] = useState("");
  let addHobbies = () => {
    if (hobbies.length > 0) {
      setMoreHobbies([...moreHobbies, hobbies]);
      setHobbies("");
    } else {
      setEmptyHobby("Hobby field cannot be empty");
    }
  };

  let handleDelete = (index) => {
    let deletedHobbies = moreHobbies.filter((_, i) => i !== index);
    setMoreHobbies(deletedHobbies);
  };

  let handleAbout = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("aboutHeadline", aboutHeadline);
    formData.append("location", location);
    formData.append("phoneNumber", phoneNumber);
    formData.append("education", education);
    formData.append("about", about);
    formData.append("email", email);
    formData.append("profileImg", profileImg);
    formData.append("hobbies", moreHobbies);
    let response = await axios.post(
      "http://localhost:3000/admin/add_about",
      formData,
      {
        withCredentials: true,
      }
    );
    console.log(response.data);
  };
  return (
    <form
      onSubmit={handleAbout}
      encType="multipart/form-data"
      className="w-full h-fit py-10 lg:text-[1.1vw] md:text-[2.1vw] sm:text-[2.7vw] xs:text-[3vw]  px-8"
    >
      <div className="grid md:grid-cols-2 xs:grid-cols-1 gap-4 w-full h-full">
        <div className="w-full flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label
              htmlFor="about-headline"
              className="lg:text-[1.1vw] md:text-[2.1vw] sm:text-[2.7vw] xs:text-[3vw] font-lexend_deca"
            >
              About Headline
            </label>
            <input
              className="lg:py-[0.8vw] md:py-[1.5vw] xs:py-[2vw] px-5 lg:text-[1.1vw] md:text-[2.1vw] sm:text-[2.7vw] xs:text-[3vw] rounded-lg border border-gray-400 outline-none lg:placeholder:text-[1.1vw] md:placeholder:text-[2.1vw] sm:placeholder:text-[2.7vw] xs:placeholder:text-[3vw] focus:border-themeBlue"
              type="text"
              value={aboutHeadline}
              required
              onChange={(e) => setAboutHeadline(e.target.value)}
              placeholder="Enter your about headline"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="about-headline"
              className="lg:text-[1.1vw] md:text-[2.1vw] sm:text-[2.7vw] xs:text-[3vw] font-lexend_deca "
            >
              Phone Number
            </label>
            <input
              className="lg:py-[0.8vw] md:py-[1.5vw] xs:py-[2vw]  px-5 lg:text-[1.1vw] md:text-[2.1vw] sm:text-[2.7vw] xs:text-[3vw] rounded-lg border border-gray-400 outline-none lg:placeholder:text-[1.1vw] md:placeholder:text-[2.1vw] sm:placeholder:text-[2.7vw] xs:placeholder:text-[3vw] focus:border-themeBlue"
              type="number"
              value={phoneNumber}
              required
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Enter your phone number"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="about-headline"
              className="lg:text-[1.1vw] md:text-[2.1vw] sm:text-[2.7vw] xs:text-[3vw] font-lexend_deca "
            >
              About
            </label>
            <textarea
              className="lg:py-[0.8vw] md:py-[1.5vw] xs:py-[2vw]  px-5 lg:text-[1.1vw] md:text-[2.1vw] sm:text-[2.7vw] xs:text-[3vw] rounded-lg border border-gray-400 outline-none lg:placeholder:text-[1.1vw] md:placeholder:text-[2.1vw] sm:placeholder:text-[2.7vw] xs:placeholder:text-[3vw] focus:border-themeBlue"
              type="text"
              rows={5}
              value={about}
              required
              onChange={(e) => setAbout(e.target.value)}
              placeholder="Enter your about"
            ></textarea>
          </div>
          <div>
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              htmlFor="adminPic"
            >
              Upload file
            </label>
            <input
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none lg:placeholder:text-[1.1vw] md:placeholder:text-[2.1vw] sm:placeholder:text-[2.7vw] xs:placeholder:text-[3vw] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              id="adminPic"
              type="file"
              required
              onChange={(e) => setprofileImg(e.target.files[0])}
              accept=".jpg,.jpeg,.png"
            />
          </div>
        </div>
        <div className="w-full flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label
              htmlFor="about-headline"
              className="lg:text-[1.1vw] md:text-[2.1vw] sm:text-[2.7vw] xs:text-[3vw] font-lexend_deca "
            >
              Location
            </label>
            <input
              className="lg:py-[0.8vw] md:py-[1.5vw] xs:py-[2vw]  px-5 lg:text-[1.1vw] md:text-[2.1vw] sm:text-[2.7vw] xs:text-[3vw] rounded-lg border border-gray-400 outline-none lg:placeholder:text-[1.1vw] md:placeholder:text-[2.1vw] sm:placeholder:text-[2.7vw] xs:placeholder:text-[3vw] focus:border-themeBlue"
              type="text"
              value={location}
              required
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter your current location"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="about-headline"
              className="lg:text-[1.1vw] md:text-[2.1vw] sm:text-[2.7vw] xs:text-[3vw] font-lexend_deca "
            >
              Education
            </label>
            <input
              className="lg:py-[0.8vw] md:py-[1.5vw] xs:py-[2vw]  px-5 lg:text-[1.1vw] md:text-[2.1vw] sm:text-[2.7vw] xs:text-[3vw] rounded-lg border border-gray-400 outline-none lg:placeholder:text-[1.1vw] md:placeholder:text-[2.1vw] sm:placeholder:text-[2.7vw] xs:placeholder:text-[3vw] focus:border-themeBlue"
              type="text"
              value={education}
              required
              onChange={(e) => setEducation(e.target.value)}
              placeholder="Enter your education"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="about-headline"
              className="lg:text-[1.1vw] md:text-[2.1vw] sm:text-[2.7vw] xs:text-[3vw] font-lexend_deca "
            >
              Hobbies
            </label>
            <div className="w-full flex">
              <input
                className="w-full px-5 lg:text-[1.1vw] md:text-[2.1vw] sm:text-[2.7vw] xs:text-[3vw] rounded-l-lg border border-gray-400 outline-none lg:placeholder:text-[1.1vw] md:placeholder:text-[2.1vw] sm:placeholder:text-[2.7vw] xs:placeholder:text-[3vw] focus:border-themeBlue"
                type="text"
                placeholder="Enter your current location"
                value={hobbies}
                required
                onChange={(e) => setHobbies(e.target.value)}
              />
              <span
                onClick={addHobbies}
                className="bg-themeBlue rounded-r-lg p-3 cursor-pointer text-white lg:text-[1.1vw] md:text-[2.1vw] sm:text-[2.7vw] xs:text-[3vw] font-lexend_deca"
              >
                Add
              </span>
            </div>
            <div>
              {emptyHobby ? (
                <p className="flex lg:text-[1.1vw] md:text-[2.1vw] sm:text-[2.7vw] xs:text-[3vw] items-center gap-1 text-red-500">
                  <span>
                    <IoWarning />
                  </span>
                  {emptyHobby}
                </p>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="w-full flex flex-wrap gap-2 items-center">
            {moreHobbies.length > 0
              ? moreHobbies.map((hobby, idx) => {
                  return (
                    <div
                      key={idx}
                      className="p-2 border border-gray-400 flex gap-3 items-center rounded-lg"
                    >
                      {hobby}
                      <span
                        onClick={() => handleDelete(idx)}
                        className="cursor-pointer text-themeBlue"
                      >
                        <RxCross2 />
                      </span>
                    </div>
                  );
                })
              : null}
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="about-headline"
              className="lg:text-[1.1vw] md:text-[2.1vw] sm:text-[2.7vw] xs:text-[3vw] font-lexend_deca "
            >
              Email
            </label>
            <input
              className="lg:py-[0.8vw] md:py-[1.5vw] xs:py-[2vw]  px-5 lg:text-[1.1vw] md:text-[2.1vw] sm:text-[2.7vw] xs:text-[3vw] rounded-lg border border-gray-400 outline-none lg:placeholder:text-[1.1vw] md:placeholder:text-[2.1vw] sm:placeholder:text-[2.7vw] xs:placeholder:text-[3vw] focus:border-themeBlue"
              type="text"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
            />
          </div>
        </div>
      </div>
      <div className="w-full lg:py-[1.5vw] md:py-[2.3vw] xs:py-[3vw]">
        <h3 className="lg:text-[1.8vw] md:text-[2.8vw] lg:pb-[1.4vw] md:pb-[2.1vw] xs:pb-[2.6vw] xs:text-[4.5vw] font-semibold font-lexend_deca">
          Social Media Links
        </h3>
        <div className="grid md:grid-cols-2 xs:grid-cols-1 gap-4 w-full h-full">
          <div className="flex flex-col gap-1">
            <label
              htmlFor="about-headline"
              className="lg:text-[1.1vw] md:text-[2.1vw] sm:text-[2.7vw] xs:text-[3vw] font-lexend_deca "
            >
              LinkedIn Profile Link
            </label>
            <input
              type="url"
              placeholder="Enter your linkedin profile link"
              value={linkedIn}
              onChange={(e) => setLinkedIn(e.target.value)}
              className="lg:py-[0.8vw] md:py-[1.5vw] xs:py-[2vw] w-full rounded-lg   font-jost placeholder:text-gray-500 border-gray-200 border px-5 lg:text-[1.1vw] md:text-[2.1vw] sm:text-[2.7vw] xs:text-[3vw] outline-none lg:placeholder:text-[1.1vw] md:placeholder:text-[2.1vw] sm:placeholder:text-[2.7vw] xs:placeholder:text-[3vw] focus:border-themeBlue"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="about-headline"
              className="lg:text-[1.1vw] md:text-[2.1vw] sm:text-[2.7vw] xs:text-[3vw] font-lexend_deca "
            >
              Facebook Profile Link
            </label>
            <input
              type="url"
              value={facebook}
              onChange={(e) => setFacebook(e.target.value)}
              placeholder="Enter your facebook profile link"
              className="lg:py-[0.8vw] md:py-[1.5vw] xs:py-[2vw] w-full rounded-lg   font-jost placeholder:text-gray-500 border-gray-200 border px-5 lg:text-[1.1vw] md:text-[2.1vw] sm:text-[2.7vw] xs:text-[3vw] outline-none lg:placeholder:text-[1.1vw] md:placeholder:text-[2.1vw] sm:placeholder:text-[2.7vw] xs:placeholder:text-[3vw] focus:border-themeBlue"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="about-headline"
              className="lg:text-[1.1vw] md:text-[2.1vw] sm:text-[2.7vw] xs:text-[3vw] font-lexend_deca "
            >
              Behance Profile Link
            </label>
            <input
              type="url"
              value={behance}
              onChange={(e) => setBehance(e.target.value)}
              placeholder="Enter your Behance profile link"
              className="lg:py-[0.8vw] md:py-[1.5vw] xs:py-[2vw] w-full rounded-lg   font-jost placeholder:text-gray-500 border-gray-200 border px-5 lg:text-[1.1vw] md:text-[2.1vw] sm:text-[2.7vw] xs:text-[3vw] outline-none lg:placeholder:text-[1.1vw] md:placeholder:text-[2.1vw] sm:placeholder:text-[2.7vw] xs:placeholder:text-[3vw] focus:border-themeBlue"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="about-headline"
              className="lg:text-[1.1vw] md:text-[2.1vw] sm:text-[2.7vw] xs:text-[3vw] font-lexend_deca "
            >
              Instagram Profile Link
            </label>
            <input
              type="url"
              value={instagram}
              onChange={(e) => setInstagram(e.target.value)}
              placeholder="Enter your Instagram profile link"
              className="lg:py-[0.8vw] md:py-[1.5vw] xs:py-[2vw] w-full rounded-lg   font-jost placeholder:text-gray-500 border-gray-200 border px-5 lg:text-[1.1vw] md:text-[2.1vw] sm:text-[2.7vw] xs:text-[3vw] outline-none lg:placeholder:text-[1.1vw] md:placeholder:text-[2.1vw] sm:placeholder:text-[2.7vw] xs:placeholder:text-[3vw] focus:border-themeBlue"
            />
          </div>
        </div>
      </div>
      <div>
        <button>
          <HireMeBtn text={"Submit"} />
        </button>
      </div>
    </form>
  );
};

export default AddAboutForm;
