import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import HireMeBtn from "../../components/HireMeBtn";
import { IoMdNotificationsOutline } from "react-icons/io";
import ProfilePopup from "./ProfilePopup";
import { GetAdminData } from "../../Context/GetAdminData.jsx";
import axios from "axios";
import { MdOutlineArrowDropUp } from "react-icons/md";
import { IoMenuSharp } from "react-icons/io5";
import { SidebarToggleContext } from "../../Context/SideBarToggle.jsx";
const AdminHeader = () => {
  const { adminData, setAdminData } = GetAdminData();
  const { setIsSideBarOpen } = useContext(SidebarToggleContext);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  let handleOpen = () => {
    setIsOpen(true);
  };
  let handleClose = () => {
    setIsOpen(false);
  };
  let handleLogout = async () => {
    let response = await axios.post("http://localhost:3000/admin/logout", {
      withCredentials: true,
    });
  };

  const toggleNotification = () => {
    setIsNotificationOpen(!isNotificationOpen);
  };
  return (
    <>
      <div className="w-full flex py-7 px-8 justify-between">
        <div className="lg:text-[1.3vw] md:text-[2.3vw] text-center flex items-center gap-2 font-semibold font-lexend_deca text-black">
          <span
            onClick={() => setIsSideBarOpen(true)}
            className="md:hidden xs:block sm:text-[3.4vw] xs:text-[5.5vw] cursor-pointer"
          >
            <IoMenuSharp />
          </span>
          <span className="sm:block xs:hidden">
            Admin <span className="text-themePurple">Dashboard</span>
          </span>
        </div>
        <div className="flex items-center relative gap-4">
          <div
            onClick={toggleNotification}
            className="lg:text-[1.8vw] md:text-[2.8vw] cursor-pointer xs:text-[3.5vw]"
          >
            <IoMdNotificationsOutline />
          </div>
          <div
            className={`absolute flex flex-col z-40 ${
              isNotificationOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            } xl:-bottom-[5.3vw] lg:-bottom-[8.3vw] transition-all duration-300 md:-bottom-[9.3vw] sm:-bottom-[12vw] xs:-bottom-[90px] -left-[11.6vw] items-center justify-center`}
          >
            <img
              className="rotate-180 md:translate-y-2 w-[2.5vw]"
              src="/imgs/notification.png"
              alt=""
            />
            <div className="bg-gray-200 w-[25vw] rounded-md relative z-40 py-10"></div>
          </div>
          <div className="relative">
            <div
              onClick={handleOpen}
              className="lg:w-[3vw] md:w-[4vw] xs:w-[5vw] lg:h-[3vw] md:h-[4vw] xs:h-[5vw] rounded-full overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5 shadow-gray-300 cursor-pointer"
            >
              <img
                className="w-full h-full object-cover"
                src={
                  adminData
                    ? `http://localhost:3000/${adminData.profileImg}`
                    : ""
                }
                alt=""
              />
            </div>
          </div>

          <Link onClick={handleLogout}>
            <HireMeBtn text={"Logout"} />
          </Link>
        </div>
      </div>
      <ProfilePopup isOpen={isOpen} onClose={handleClose} />
    </>
  );
};

export default AdminHeader;
