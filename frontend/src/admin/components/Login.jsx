import React, { useState } from "react";
import { FaUserLock } from "react-icons/fa";
import HireMeBtn from "../../components/HireMeBtn";
import { BiShow, BiHide } from "react-icons/bi";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthProvider";
const Login = () => {
  const { authAdmin, setAuthAdmin, Loading } = useAuth();
  const [isShow, setIsShow] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  let navigate = useNavigate();
  let handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation for empty fields
    if (!username || !password) {
      setError("Username and Password are required!");
      return;
    }

    try {
      // Sending POST request to the backend
      let response = await axios.post(
        "/api/admin/login",
        {
          username,
          password,
        },
        {
          withCredentials: true,
        }
      );

      // Check if login is successful
      if (response.data && response.data.admin) {
        // Store admin data in localStorage
        localStorage.setItem("admin", JSON.stringify(response.data.admin));

        // Navigate to the admin dashboard
        setAuthAdmin(response.data.admin);
      } else {
        setError("Invalid credentials. Please try again.");
      }
    } catch (err) {
      // Handle any errors from the server
      setError("An error occurred. Please try again later.");
      console.error(err);
    }
  };
  return (
    <div className="w-full h-screen bg-cover bg-center flex items-center justify-center bg-portfolioHero">
      <div
        className="w-[30%] h-[60%] p-8 bg-white/10 backdrop-blur-sm rounded-[50px]"
        style={{ boxShadow: "0 0 10px #918AFE" }}
      >
        <h1 className="text-4xl text-center py-5 font-semibold font-lexend_deca text-white">
          Admin <span className="text-themePurple">Login</span>
        </h1>
        <form
          onSubmit={handleSubmit}
          className="w-full h-full flex flex-col gap-3"
        >
          <div>
            <label className="block mb-2 text-md font-lexend_deca font-medium text-gray-200">
              Username
            </label>
            <div className="flex">
              <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-transparent border border-e-0 border-gray-300 rounded-s-md ">
                <svg
                  className="w-4 h-4 text-gray-500"
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
                className="rounded-none rounded-e-lg bg-transparent border border-gray-300 text-gray-200 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5 outline-none"
                placeholder="Bonnie Green"
              />
            </div>
          </div>
          <div>
            <label className="block mb-2 text-md font-lexend_deca font-medium text-gray-200">
              Password
            </label>
            <div className="flex">
              <span className="inline-flex items-center px-3 text-sm text-gray-500 bg-transparent border border-e-0 border-gray-300 rounded-s-md ">
                <FaUserLock />
              </span>
              <div className="border items-center border-gray-300 focus:ring-blue-500 focus:border-blue-500 flex justify-between w-full rounded-e-lg">
                <input
                  type={isShow ? "text" : "password"}
                  id="admin-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="rounded-none bg-transparent  text-gray-200  block flex-1 min-w-0 w-full text-sm p-2.5 outline-none"
                  placeholder="*** ***"
                />
                <span
                  onClick={() => (!isShow ? setIsShow(true) : setIsShow(false))}
                  className="text-white text-xl cursor-pointer"
                >
                  {!isShow ? <BiHide /> : <BiShow />}
                </span>
              </div>
            </div>
          </div>
          <div>
            <button>
              <HireMeBtn text={"Login"} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
