import { RxCross2 } from "react-icons/rx";
import { GetAdminData } from "../../Context/GetAdminData.jsx";
import { IoCameraReverse, IoLocationSharp } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";
const ProfilePopup = ({ isOpen, onClose }) => {
  const { adminData, setAdminData } = GetAdminData();
  const [adminProfile, setAdminProfile] = useState(
    adminData ? adminData.profileImg : ""
  );
  const [username, setUsername] = useState(adminData ? adminData.username : "");
  const [aboutMe, setAboutMe] = useState(adminData ? adminData.aboutMe : "");
  const [email, setEmail] = useState(adminData ? adminData.email : "");
  const [phoneNumber, setPhoneNumber] = useState(
    adminData ? adminData.phoneNumber : ""
  );
  const [gender, setGender] = useState(adminData ? adminData.gender : "");
  const [adminPreview, setAdminPreview] = useState(
    adminData ? `http://localhost:3000/${adminData.profileImg}` : ""
  );
  let handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  useEffect(() => {
    if (adminData) {
      setUsername(adminData.username);
      setPhoneNumber(adminData.phoneNumber);
      setAboutMe(adminData.aboutMe);
      setAdminProfile(adminData.profileImg);
      setGender(adminData.gender);
      setEmail(adminData.email);
      setAdminPreview(`http://localhost:3000/${adminData.profileImg}`);
    }
  }, [adminData]);

  let handleUpdateAdmin = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("username", username);
    formData.append("adminId", adminData._id);
    formData.append("aboutMe", aboutMe);
    formData.append("phoneNumber", phoneNumber);
    formData.append("email", email);
    formData.append("gender", gender);
    formData.append("profileImg", adminProfile);
    formData.append(
      "oldProfileImg",
      adminData ? adminData.profileImg : undefined
    );
    try {
      let response = await axios.post(
        "http://localhost:3000/admin/update_admin",
        formData,
        {
          withCredentials: true,
        }
      );
      if (response.data) {
        onClose();
        setAdminData(response.data);
        localStorage.setItem("admin", JSON.stringify(response.data));
      } else {
      }
    } catch (e) {
      console.error("Error updating admin profile", e);
    }
  };
  return (
    <div
      className={`${
        isOpen ? " scale-100" : " scale-0"
      } bg-black/70 p-7 pointer-events-auto font-jost w-full h-full overflow-hidden z-20 fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all flex items-center justify-center duration-300`}
    >
      <div
        className={`transition-all bg-white rounded-3xl flex items-center relative duration-700 ${
          isOpen ? "scale-100 p-5" : "scale-0 p-0"
        }`}
      >
        <div
          onClick={onClose}
          className="lg:w-[3vw] md:w-[4vw] xs:w-[5.3vw] lg:h-[3vw] md:h-[4vw] xs:h-[5.3vw] lg:text-[1.4vw] md:text-[2.4vw] xs:text-[3.5vw] border rounded-full absolute top-5 flex items-center justify-center border-gray-700"
        >
          <RxCross2 />
        </div>
        <form
          encType="multipart/form-data"
          method="post"
          onSubmit={handleUpdateAdmin}
          className="grid md:grid-cols-3 xs:grid-cols-1 place-items-center items-center gap-9"
        >
          <div>
            <div className="lg:w-[17vw] md:w-[18vw] xs:w-[20vw] relative lg:h-[17vw] md:h-[18vw] xs:h-[20vw]">
              <img
                className="w-full h-full object-cover object-center bg-purple-600 rounded-full"
                src={adminPreview}
                alt="Me"
              />
              <label
                htmlFor="adminProfile"
                className="lg:w-[3vw] md:w-[4vw] xs:w-[5.5vw] lg:h-[3vw] lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.5vw] md:h-[4vw] xs:h-[5.5vw] flex absolute bottom-[5%] right-[6%] cursor-pointer items-center justify-center bg-themePurple shadow-md rounded-full text-white"
              >
                <input
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      setAdminProfile(file);
                      setAdminPreview(URL.createObjectURL(file)); // Update the image preview
                    }
                  }}
                  type="file"
                  id="adminProfile"
                />
                <IoCameraReverse />
              </label>
            </div>
          </div>
          <div className="col-span-2 w-full flex flex-col gap-3">
            <div className="grid sm:grid-cols-2 xs:grid-cols-1 items-center gap-3 w-full">
              <div className="flex w-full">
                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-transparent border border-e-0 border-gray-800 rounded-s-md ">
                  <svg
                    className="w-4 h-4 text-gray-800"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                  </svg>
                </span>
                <input
                  type="text"
                  id="website-admin"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="rounded-none text-md w-full rounded-e-lg bg-transparent border border-gray-800 text-gray-800 lg:py-[0.8vw] md:py-[1.5vw] xs:py-[2vw] outline-none"
                  placeholder="Bonnie Green"
                />
              </div>
              <div className="flex w-full">
                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-transparent border border-e-0 border-gray-800 rounded-s-md ">
                  <svg
                    className="w-4 h-4 text-gray-800"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                  </svg>
                </span>
                <input
                  type="text"
                  id="website-admin"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-none text-md w-full rounded-e-lg bg-transparent border border-gray-800 text-gray-800 lg:py-[0.8vw] md:py-[1.5vw] xs:py-[2vw] outline-none"
                  placeholder="Bonnie Green"
                />
              </div>
            </div>
            <div className="flex w-full">
              <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-transparent border border-e-0 border-gray-800 rounded-s-md ">
                <svg
                  className="w-4 h-4 text-gray-800"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                </svg>
              </span>
              <input
                type="number"
                id="website-admin"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="rounded-none text-md w-full rounded-e-lg bg-transparent border border-gray-800 text-gray-800 lg:py-[0.8vw] md:py-[1.5vw] xs:py-[2vw] outline-none"
                placeholder="+244 564 4651"
              />
            </div>
            <fieldset class="border border-gray-800 px-2 pb-2 rounded-lg">
              <legend class="text-xl font-semibold font-lexend_deca text-gray-700">
                Gender
              </legend>
              <div class="flex space-x-6 mt-4">
                <label class="flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    checked={gender === "Male"}
                    onChange={handleGenderChange}
                    class="mr-2"
                  />
                  Male
                </label>
                <label class="flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={gender === "Female"}
                    onChange={handleGenderChange}
                    class="mr-2"
                  />
                  Female
                </label>
                <label class="flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="Other"
                    checked={gender === "Other"}
                    onChange={handleGenderChange}
                    class="mr-2"
                  />
                  Other
                </label>
              </div>
            </fieldset>
            <div className="flex items-center gap-4 rounded-2xl p-2 w-full">
              <div className="flex w-full flex-col font-jost">
                <h4 className="font-semibold">About</h4>
                <textarea
                  className="w-full h-fit border border-gray-900 bg-transparent rounded-xl"
                  value={aboutMe}
                  rows={8}
                  placeholder="Enter your about"
                  onChange={(e) => setAboutMe(e.target.value)}
                />
              </div>
            </div>
            <button className="flex items-center gap-3 py-3 mx-auto px-8 rounded-lg bg-themeBlue text-white text-lg font-jost">
              <span>Save</span>
              <span className="text-xl">
                <FaRegEdit />
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default ProfilePopup;
