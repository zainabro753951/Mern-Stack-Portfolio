import React, { useState } from "react";
import { Link } from "react-router-dom";
import HireMeBtn from "../../components/HireMeBtn";
import ProfilePopup from "./ProfilePopup";
import { GetAdminData } from "../../Context/GetAdminData.jsx";
import axios from "axios";

const AdminHeader = () => {
  const { adminData, setAdminData } = GetAdminData();

  const [isOpen, setIsOpen] = useState(false);
  let handleOpen = () => {
    setIsOpen(true);
  };
  let handleClose = () => {
    setIsOpen(false);
  };
  let handleLogout = async () => {
    let response = await axios.post("/api/admin/logout", {
      withCredentials: true,
    });
  };
  return (
    <>
      <div className="w-full flex py-7 px-8 justify-between">
        <h1 className="text-2xl text-center  font-semibold font-lexend_deca text-black">
          Admin <span className="text-themePurple">Dashboard</span>
        </h1>
        <div className="flex items-center gap-4">
          <div className="relative">
            <div
              onClick={handleOpen}
              className="w-10 h-10 rounded-full overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5 shadow-gray-300 cursor-pointer"
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
