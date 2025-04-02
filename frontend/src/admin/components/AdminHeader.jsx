import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import HireMeBtn from "../../components/HireMeBtn";
import { IoMdNotificationsOutline } from "react-icons/io";
import ProfilePopup from "./ProfilePopup";
import { GetAdminData } from "../../Context/GetAdminData.jsx";
import axios from "axios";
import { IoMenuSharp } from "react-icons/io5";
import { SidebarToggleContext } from "../../Context/SideBarToggle.jsx";
import { useSocketContext } from "../../Context/SocketIO.jsx";
import { useMutation } from "react-query";
import { useAdminAuth } from "../../Context/AdminAuthProvider.jsx";
import { toast, ToastContainer } from "react-toastify";
import { useBlogCommentNotification } from "../../Context/GetAllBlogCommentNoti.jsx";
import AdminNotification from "./AdminNotification.jsx";

const AdminHeader = () => {
  const { socket } = useSocketContext();
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const { setIsAdminAuthenticated } = useAdminAuth();
  const { adminData, setAdminData } = GetAdminData();
  const { setIsSideBarOpen } = useContext(SidebarToggleContext);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isNotiOpen, setIsNotiOpen] = useState(false);
  const { newNotification, enableAudio } = useBlogCommentNotification();
  const NotiRef = useRef(null);

  let handleOpen = () => {
    setIsOpen(true);
  };

  let handleClose = () => {
    setIsOpen(false);
  };

  const mutation = useMutation(
    async () => {
      const response = await axios.post(`${backendUrl}/admin/logout`, null, {
        withCredentials: true,
      });
      return response;
    },
    {
      onSuccess: (data) => {
        setIsAdminAuthenticated(false);
        // Handle success response
      },
      onError: (error) => {
        console.log(error);
        // Handle error response
      },
    }
  );

  let handleLogout = () => {
    mutation.mutate();
  };

  const toggleNotification = () => {
    setIsNotificationOpen(!isNotificationOpen);
  };

  // Prevew All Notifciations
  useEffect(() => {
    if (newNotification) {
      toast.info(newNotification.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        theme: "dark",
      });
    }
  }, [newNotification]);

  // Handle click outside notification
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (NotiRef.current && !NotiRef.current.contains(event.target)) {
        setIsNotiOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <ToastContainer />
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
            onClick={() => {
              setIsNotiOpen(!isNotiOpen); // Toggle notification on click
            }}
            className="lg:text-[1.8vw] md:text-[2.8vw] cursor-pointer xs:text-[3.5vw]"
          >
            <IoMdNotificationsOutline />
          </div>
          <div className="relative">
            <div
              onClick={handleOpen}
              className="lg:w-[3vw] md:w-[4vw] xs:w-[5vw] lg:h-[3vw] md:h-[4vw] xs:h-[5vw] rounded-full overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5 shadow-gray-300 cursor-pointer"
            >
              <img
                className="w-full h-full object-cover"
                src={adminData ? `${backendUrl}/${adminData.profileImg}` : ""}
                alt=""
              />
            </div>
            <AdminNotification NotiRef={NotiRef} isNotiOpen={isNotiOpen} />
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
