import React, { useEffect, useState } from "react";
import UserSlider from "./UserSlider";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useMutation } from "react-query";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const VerifyEmail = () => {
  const navigate = useNavigate();
  const { token } = useParams();
  const [user, setUser] = useState(null);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const mutation = useMutation(
    async (token) => {
      try {
        const response = await axios.post(
          `${backendUrl}/user/verify-email/${token}`,
          null,
          {
            withCredentials: true,
          }
        );
        return response;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
    {
      onSuccess: (data) => {
        setUser(data.data.user);
        console.log(data);

        localStorage.setItem("logedInUser", JSON.stringify(data.data.user));
      },
      onError: (error) => {
        toast.error("Error verifying email!", {
          position: "top-right",
          autoClose: 5000,
          theme: "dark",
          style: { width: "130%" },
        });
      },
    }
  );

  useEffect(() => {
    if (token) {
      mutation.mutate(token);
    } else {
      toast.error("Invalid Token!", {
        position: "top-right",
        autoClose: 5000,
        theme: "dark",
        style: { width: "130%" },
      });
    }
  }, [token]);

  return (
    <div className="w-full h-screen lg:grid grid-cols-2">
      <UserSlider />
      <div className="w-full h-full flex z-10 xs:absolute lg:relative top-0 left-0 items-center lg:bg-hero lg:bg-cover pointer-events-none bg-center justify-center">
        <div
          className="lg:w-[35vw] md:w-[55vw] xs:w-[75vw] h-screen flex flex-col items-center justify-center relative overflow-hidden  md:p-[1.5vw] pointer-events-auto xs:p-[2.8vw] lg:rounded-[1.2vw] md:rounded-[1.5vw] xs:rounded-[2vw] bg-white"
          style={{ boxShadow: "0 0 10px #FEEBEA" }}
        >
          <ToastContainer />
          <div className="absolute lg:w-[20vw] lg:h-[20vw] md:w-[30vw] md:h-[30vw] xs:w-[40vw] xs:h-[40vw] flex items-center justify-center left-1/2 overflow-hidden -translate-x-1/2 rounded-full top-0 -translate-y-[40%] ">
            <div
              className="w-[50%] h-[50%] opacity- bg-blue-600/60 rounded-full blur-xl"
              style={{ boxShadow: "0 0 50px #1c64f2" }}
            ></div>
            <div className="w-full h-full absolute grid grid-cols-12 gap-[1px]">
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
            </div>
          </div>
          <div className="flex flex-col items-center relative z-10">
            <div
              style={{ boxShadow: "0 0 30px #FEEBEA" }}
              className="mx-auto md:w-[5vw] md:h-[5vw] xs:w-[10vw] xs:h-[10vw] flex items-center justify-center portfolioGardient rounded-full"
            >
              <img
                className="lg:w-[5vw] md:w-[6vw] xs:w-[8.5vw]"
                src="/imgs/email.png"
                alt=""
              />
            </div>
            <div className="text-center mt-[1.2vw]">
              <h3 className="lg:text-[2vw] md:text-[3vw] xs:text-[4.5vw] font-semibold font-lexend_deca">
                Email Verification Completed
              </h3>
              <p className="lg:text-[1.1vw] py-[2vw] md:text-[2.1vw] sm:text-[2.7vw] xs:text-[3vw] font-jost">
                Your email Verification process is completed successfully now
                you can visit my portfolio website and leave your interest.
              </p>
            </div>
            <p className="lg:text-[1.1vw]  md:text-[2.1vw] sm:text-[2.7vw] xs:text-[3vw] font-jost">
              {user ? user.email : "your email is already been verified!"}
            </p>
            <div>
              <Link
                to={"/"}
                className="md:py-[1.2vw] xs:py-[1.8vw] bg-themeGolden px-[3vw] lg:text-[1.3vw]  md:text-[2.3vw] sm:text-[3vw] xs:text-[3.3vw] my-[1vw] rounded-[0.5vw] md:border-2 xs:border border-themeGolden transition-all duration-300 hover:bg-transparent block"
              >
                Go To Portfolio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
