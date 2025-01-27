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
    let response = await axios.post("/api/admin/add_about", formData, {
      withCredentials: true,
    });
    console.log(response.data);
  };
  return (
    <form
      onSubmit={handleAbout}
      encType="multipart/form-data"
      className="w-full h-full py-10 grid grid-cols-2 gap-4 px-8"
    >
      <div className="w-full flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="about-headline" className="text-xl font-lexend_deca">
            About Headline
          </label>
          <input
            className="py-3 px-5 rounded-lg border border-gray-400 outline-none focus:border-themeBlue"
            type="text"
            value={aboutHeadline}
            required
            onChange={(e) => setAboutHeadline(e.target.value)}
            placeholder="Enter your about headline"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="about-headline" className="text-xl font-lexend_deca ">
            Phone Number
          </label>
          <input
            className="py-3 px-5 rounded-lg border border-gray-400 outline-none focus:border-themeBlue"
            type="number"
            value={phoneNumber}
            required
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Enter your phone number"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="about-headline" className="text-xl font-lexend_deca ">
            About
          </label>
          <textarea
            className="py-3 px-5 rounded-lg border border-gray-400 outline-none focus:border-themeBlue"
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
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            id="adminPic"
            type="file"
            required
            onChange={(e) => setprofileImg(e.target.files[0])}
            accept=".jpg,.jpeg,.png"
          />
        </div>
        <div>
          <button>
            <HireMeBtn text={"Submit"} />
          </button>
        </div>
      </div>
      <div className="w-full flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="about-headline" className="text-xl font-lexend_deca ">
            Location
          </label>
          <input
            className="py-3 px-5 rounded-lg border border-gray-400 outline-none focus:border-themeBlue"
            type="text"
            value={location}
            required
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter your current location"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="about-headline" className="text-xl font-lexend_deca ">
            Education
          </label>
          <input
            className="py-3 px-5 rounded-lg border border-gray-400 outline-none focus:border-themeBlue"
            type="text"
            value={education}
            required
            onChange={(e) => setEducation(e.target.value)}
            placeholder="Enter your education"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="about-headline" className="text-xl font-lexend_deca ">
            Hobbies
          </label>
          <div className="w-full flex">
            <input
              className="w-full px-5 rounded-l-lg border border-gray-400 outline-none focus:border-themeBlue"
              type="text"
              placeholder="Enter your current location"
              value={hobbies}
              required
              onChange={(e) => setHobbies(e.target.value)}
            />
            <span
              onClick={addHobbies}
              className="bg-themeBlue rounded-r-lg p-3 cursor-pointer text-white text-lg font-lexend_deca"
            >
              Add
            </span>
          </div>
          <div>
            {emptyHobby ? (
              <p className="flex items-center gap-1 text-red-500">
                <span className="text-xl">
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
          <label htmlFor="about-headline" className="text-xl font-lexend_deca ">
            Email
          </label>
          <input
            className="py-3 px-5 rounded-lg border border-gray-400 outline-none focus:border-themeBlue"
            type="text"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
          />
        </div>
      </div>
    </form>
  );
};

export default AddAboutForm;
