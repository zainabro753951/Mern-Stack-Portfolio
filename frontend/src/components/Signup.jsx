import React, { useEffect, useState } from "react";
import UserSlider from "./UserSlider";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { BiHide, BiShow } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useMutation } from "react-query";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { BeatLoader } from "react-spinners";
import { IoIosWarning } from "react-icons/io";

const Signup = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [isShow, setIsShow] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Create Mutation of posting data
  const mutation = useMutation(async (user) => {
    const response = await axios.post(
      "http://localhost:3000/user/signup",
      user,
      {
        withCredentials: true,
      }
    );
    return response;
  });

  // Handle Signup Form Submission
  const onSubmit = (data) => {
    if (data.password === data.confirmPassword) {
      mutation.mutate(data);
    } else {
      toast.warn("Password does not match", {
        position: "top-right",
        autoClose: 5000,
        theme: "dark",
        style: { width: "130%" },
      });
    }
  };

  useEffect(() => {
    if (mutation.isError) {
      toast.error(mutation.error.response.data.message, {
        position: "top-right",
        autoClose: 5000,
        theme: "dark",
        style: { width: "130%" },
      });
    }
  }, [mutation.isError]);

  useEffect(() => {
    if (mutation.isSuccess) {
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      toast.info(mutation.data.data.message, {
        position: "top-right",
        autoClose: 5000,
        closeOnClick: true,
        theme: "dark",
        style: { width: "130%" },
      });
    }
  }, [mutation.isSuccess]);

  return (
    <div className="w-full min-h-screen lg:grid grid-cols-2">
      <UserSlider />
      <div className="w-full h-full flex z-10 xs:absolute lg:relative top-0 left-0 items-center lg:bg-hero lg:bg-cover pointer-events-none bg-center justify-center">
        <ToastContainer />
        <div
          className="lg:w-[35vw] md:w-[55vw] xs:w-[75vw] h-fit relative overflow-hidden  md:p-[1.5vw] pointer-events-auto xs:p-[2.8vw] lg:rounded-[1.2vw] md:rounded-[1.5vw] xs:rounded-[2vw] bg-white"
          style={{ boxShadow: "0 0 10px #FEEBEA" }}
        >
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
              className=" mx-auto p-[0.7vw] portfolioGardient rounded-full"
            >
              <img
                className="lg:w-[5vw] md:w-[6vw] xs:w-[8.5vw]"
                src="/imgs/login/secure-login-form-page-with-password-computer-padlock-3d-vector-icon-cartoon-minimal-style_365941-1119-removebg-preview.png"
                alt=""
              />
            </div>
            <div className="text-center mt-[1.2vw]">
              <h3 className="lg:text-[2vw] md:text-[3vw] xs:text-[4.5vw] font-semibold font-lexend_deca">
                Create a new account
              </h3>
              <p className="lg:text-[1.1vw] md:text-[2.1vw] sm:text-[2.7vw] xs:text-[3vw] font-jost">
                Please enter your details to create new account.
              </p>
            </div>
            <div className="py-[1.5vw] grid lg:grid-cols-2 md:grid-cols-1 w-full gap-[1.2vw]">
              <div className="border-[1.5px] lg:text-[1.7vw] md:text-[2.7vw] xs:text-[4.3vw] text-blue-600 border-gray-300 lg:py-[0.7vw] xs:py-[1.5vw] rounded-[0.6vw] flex items-center justify-center w-full ">
                <FaFacebookF />
              </div>
              <div className="border-[1.5px] lg:text-[1.7vw] md:text-[2.7vw] xs:text-[4.3vw] border-gray-300 lg:py-[0.7vw] xs:py-[1.5vw]  rounded-[0.6vw] flex items-center justify-center w-full ">
                <FcGoogle />
              </div>
            </div>
            <div className="w-full flex items-center gap-[1.2vw]">
              <div className="w-full h-0.5 bg-gray-300 rounded-full"></div>
              <div className="font-jost lg:text-[1.1vw] md:text-[2.1vw] sm:text-[2.7vw] xs:text-[3vw] ">
                Or
              </div>
              <div className="w-full h-0.5 bg-gray-300 rounded-full"></div>
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              method="post"
              className="flex flex-col md:gap-[1.2vw] xs:gap-[4vw] w-full py-3"
            >
              <div className="grid lg:grid-cols-2 xs:grid-cols-1 w-full md:gap-[1.2vw] xs:gap-[4vw]">
                <div>
                  <input
                    type="text"
                    placeholder="Enter your first name"
                    {...register("firstName", { required: true })}
                    className="lg:py-[0.8vw] md:py-[1.5vw] xs:py-[2vw] w-full rounded-lg lg:text-[1.1vw] md:text-[2.1vw] sm:text-[2.7vw] xs:text-[3vw]  font-jost placeholder:text-gray-500 border-gray-200 border px-5 outline-none focus:border-themeBlue"
                  />
                  {errors.firstName && (
                    <span className="lg:text-[1vw] md:text-[2vw] xs:text-[2.5vw] flex items-center gap-2 text-red-600">
                      <IoIosWarning className="text-[1.3vw] text-[#f7c600]" />{" "}
                      This field is required
                    </span>
                  )}
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Enter your last name"
                    {...register("lastName", { required: true })}
                    className="lg:py-[0.8vw] md:py-[1.5vw] xs:py-[2vw] w-full rounded-lg lg:text-[1.1vw] md:text-[2.1vw] sm:text-[2.7vw] xs:text-[3vw]  font-jost placeholder:text-gray-500 border-gray-200 border px-5 outline-none focus:border-themeBlue"
                  />
                  {errors.lastName && (
                    <span className="lg:text-[1vw] md:text-[2vw] xs:text-[2.5vw] flex items-center gap-2 text-red-600">
                      <IoIosWarning className="text-[1.3vw] text-[#f7c600]" />{" "}
                      This field is required
                    </span>
                  )}
                </div>
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Enter your email..."
                  {...register("email", { required: true })}
                  className="lg:py-[0.8vw] md:py-[1.5vw] xs:py-[2vw] w-full rounded-lg lg:text-[1.1vw] md:text-[2.1vw] sm:text-[2.7vw] xs:text-[3vw]  font-jost placeholder:text-gray-500 border-gray-200 border px-5 outline-none focus:border-themeBlue"
                />
                {errors.email && (
                  <span className="lg:text-[1vw] md:text-[2vw] xs:text-[2.5vw] flex items-center gap-2 text-red-600">
                    <IoIosWarning className="text-[1.3vw] text-[#f7c600]" />{" "}
                    This field is required
                  </span>
                )}
              </div>
              <div>
                <div className="flex items-center rounded-lg border-gray-200 border w-full">
                  <input
                    type={isShow ? "text" : "password"}
                    placeholder="Enter your password"
                    {...register("password", { required: true })}
                    className="lg:py-[0.8vw] md:py-[1.5vw] xs:py-[2vw] border-none rounded-l-lg w-full lg:text-[1.1vw] md:text-[2.1vw] sm:text-[2.7vw] xs:text-[3vw]  font-jost placeholder:text-gray-500 outline-none focus:border-themeBlue"
                  />
                  <span
                    onClick={() => setIsShow(!isShow)}
                    className="px-3 cursor-pointer select-none"
                  >
                    {isShow ? <BiShow /> : <BiHide />}
                  </span>
                </div>
                {errors.password && (
                  <span className="lg:text-[1vw] md:text-[2vw] xs:text-[2.5vw] flex items-center gap-2 text-red-600">
                    <IoIosWarning className="text-[1.3vw] text-[#f7c600]" />{" "}
                    This field is required
                  </span>
                )}
              </div>
              <div>
                <input
                  type={isShow ? "text" : "password"}
                  placeholder="Retype your password"
                  {...register("confirmPassword", { required: true })}
                  className="lg:py-[0.8vw] md:py-[1.5vw] border-gray-200 border xs:py-[2vw] rounded-l-lg w-full lg:text-[1.1vw] md:text-[2.1vw] sm:text-[2.7vw] xs:text-[3vw]  font-jost placeholder:text-gray-500 outline-none focus:border-themeBlue"
                />
                {errors.confirmPassword && (
                  <span className="lg:text-[1vw] md:text-[2vw] xs:text-[2.5vw] flex items-center gap-2 text-red-600">
                    <IoIosWarning className="text-[1.3vw] text-[#f7c600]" />{" "}
                    This field is required
                  </span>
                )}
              </div>
              <label
                htmlFor="submit"
                className="lg:py-[0.8vw] md:py-[1.5vw] xs:py-[2vw] w-full rounded-[0.7vw] lg:text-[1.2vw] md:text-[2.2vw] sm:text-[2.8vw] xs:text-[3.4vw] bg-black text-white flex items-center justify-center"
              >
                {mutation.isLoading ? (
                  <BeatLoader
                    color="#F4C430"
                    size={10}
                    className="lg:py-[0.5vw] md:py-[1.3vw] xs:py-[2vw]"
                  />
                ) : (
                  <input type="submit" id="submit" value="Sign in" />
                )}
              </label>
            </form>
            <p className="font-jost lg:text-[1.1vw] md:text-[2.1vw] sm:text-[2.7vw] xs:text-[3vw] ">
              Already have an account?{" "}
              <Link className="text-blue-500" to={"/login"}>
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
