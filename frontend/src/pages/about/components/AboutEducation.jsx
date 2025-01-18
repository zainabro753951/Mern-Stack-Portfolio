import React from "react";
import { Link } from "react-router-dom";

const AboutEducation = () => {
  return (
    <div className="bg-aboutEducation bg-cover bg-no-repeat">
      <div className="max-w-[1200px] mx-auto py-20 h-screen">
        <div className="w-full flex justify-between items-end">
          <h2 className="text-5xl font-lexend_deca font-semibold leading-[57px]">
            I'm great in what I do <br /> and{" "}
            <span className="text-themePurple">I'm loving it</span>
          </h2>
          <Link
            className="text-2xl font-lexend_deca font-semibold text-themePurple relative"
            id="viewProject"
          >
            Hire Me
          </Link>
        </div>
        <div className="w-full pt-10 grid grid-cols-2">
          <div>
            <h2 className="text-4xl font-semibold font-lexend_deca py-5">
              Education
            </h2>
            <div className="flex flex-col gap-14 pt-4">
              <div className="flex items-center gap-5">
                <div>
                  <div className="p-4 rounded-full eduGardient border-r border-b border-gray-300">
                    <svg
                      width="37"
                      height="32"
                      viewBox="0 0 37 32"
                      fill="none"
                      className="fill-themeBlue"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M25.7148 26.5142C26.5064 26.1679 27.2705 25.762 28.0006 25.2999V30.8571C28.0006 31.1602 27.8802 31.4509 27.6659 31.6653C27.4515 31.8796 27.1608 32 26.8577 32C26.5546 32 26.2639 31.8796 26.0496 31.6653C25.8353 31.4509 25.7148 31.1602 25.7148 30.8571V26.5142ZM17.2719 9.74253C17.1334 10.0126 17.1052 10.3258 17.1932 10.6163C17.2811 10.9068 17.4783 11.1518 17.7433 11.2997L24.4291 14.8569L26.8577 13.5569L18.829 9.2711C18.559 9.13267 18.2457 9.10445 17.9553 9.19239C17.6648 9.28033 17.4198 9.47755 17.2719 9.74253ZM35.9721 9.2711L18.829 0.128104C18.6605 0.0438581 18.4746 0 18.2862 0C18.0977 0 17.9119 0.0438581 17.7433 0.128104L0.600192 9.2711C0.418457 9.37089 0.266872 9.51768 0.161288 9.69611C0.0557045 9.87454 0 10.0781 0 10.2854C0 10.4927 0.0557045 10.6962 0.161288 10.8747C0.266872 11.0531 0.418457 11.1999 0.600192 11.2997L4.00024 13.0997V20.2141C3.99809 20.7046 4.15889 21.182 4.45739 21.5713C5.58598 23.0856 9.9289 27.9999 18.2862 27.9999C20.8397 28.0212 23.3697 27.5104 25.7148 26.4999V15.5426L24.4291 14.8569L18.2862 18.1284L5.68598 11.414L3.57166 10.2854L18.2862 2.44242L33.0007 10.2854L30.8863 11.414L26.8577 13.5569L27.4006 13.8426C27.5938 13.9542 27.7521 14.1174 27.8577 14.314C27.9527 14.4791 28.0021 14.6665 28.0006 14.8569V25.2999C29.5792 24.3068 30.9717 23.0448 32.1149 21.5713C32.4134 21.182 32.5742 20.7046 32.5721 20.2141V13.0997L35.9721 11.2997C36.1539 11.1999 36.3055 11.0531 36.411 10.8747C36.5166 10.6962 36.5723 10.4927 36.5723 10.2854C36.5723 10.0781 36.5166 9.87454 36.411 9.69611C36.3055 9.51768 36.1539 9.37089 35.9721 9.2711Z"></path>
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg text-gray-500 font-jost">
                    Harverd University
                  </h4>
                  <h3 className="text-2xl font-semibold font-lexend_deca">
                    MBA in CSE (2015 - 2016)
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div>
                  <div className="p-4 rounded-full eduGardient border-r border-b border-gray-300">
                    <svg
                      width="37"
                      height="32"
                      viewBox="0 0 37 32"
                      fill="none"
                      className="fill-themeBlue"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M25.7148 26.5142C26.5064 26.1679 27.2705 25.762 28.0006 25.2999V30.8571C28.0006 31.1602 27.8802 31.4509 27.6659 31.6653C27.4515 31.8796 27.1608 32 26.8577 32C26.5546 32 26.2639 31.8796 26.0496 31.6653C25.8353 31.4509 25.7148 31.1602 25.7148 30.8571V26.5142ZM17.2719 9.74253C17.1334 10.0126 17.1052 10.3258 17.1932 10.6163C17.2811 10.9068 17.4783 11.1518 17.7433 11.2997L24.4291 14.8569L26.8577 13.5569L18.829 9.2711C18.559 9.13267 18.2457 9.10445 17.9553 9.19239C17.6648 9.28033 17.4198 9.47755 17.2719 9.74253ZM35.9721 9.2711L18.829 0.128104C18.6605 0.0438581 18.4746 0 18.2862 0C18.0977 0 17.9119 0.0438581 17.7433 0.128104L0.600192 9.2711C0.418457 9.37089 0.266872 9.51768 0.161288 9.69611C0.0557045 9.87454 0 10.0781 0 10.2854C0 10.4927 0.0557045 10.6962 0.161288 10.8747C0.266872 11.0531 0.418457 11.1999 0.600192 11.2997L4.00024 13.0997V20.2141C3.99809 20.7046 4.15889 21.182 4.45739 21.5713C5.58598 23.0856 9.9289 27.9999 18.2862 27.9999C20.8397 28.0212 23.3697 27.5104 25.7148 26.4999V15.5426L24.4291 14.8569L18.2862 18.1284L5.68598 11.414L3.57166 10.2854L18.2862 2.44242L33.0007 10.2854L30.8863 11.414L26.8577 13.5569L27.4006 13.8426C27.5938 13.9542 27.7521 14.1174 27.8577 14.314C27.9527 14.4791 28.0021 14.6665 28.0006 14.8569V25.2999C29.5792 24.3068 30.9717 23.0448 32.1149 21.5713C32.4134 21.182 32.5742 20.7046 32.5721 20.2141V13.0997L35.9721 11.2997C36.1539 11.1999 36.3055 11.0531 36.411 10.8747C36.5166 10.6962 36.5723 10.4927 36.5723 10.2854C36.5723 10.0781 36.5166 9.87454 36.411 9.69611C36.3055 9.51768 36.1539 9.37089 35.9721 9.2711Z"></path>
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg text-gray-500 font-jost">
                    Harverd University
                  </h4>
                  <h3 className="text-2xl font-semibold font-lexend_deca">
                    MBA in CSE (2015 - 2016)
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div>
                  <div className="p-4 rounded-full eduGardient border-r border-b border-gray-300">
                    <svg
                      width="37"
                      height="32"
                      viewBox="0 0 37 32"
                      fill="none"
                      className="fill-themeBlue"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M25.7148 26.5142C26.5064 26.1679 27.2705 25.762 28.0006 25.2999V30.8571C28.0006 31.1602 27.8802 31.4509 27.6659 31.6653C27.4515 31.8796 27.1608 32 26.8577 32C26.5546 32 26.2639 31.8796 26.0496 31.6653C25.8353 31.4509 25.7148 31.1602 25.7148 30.8571V26.5142ZM17.2719 9.74253C17.1334 10.0126 17.1052 10.3258 17.1932 10.6163C17.2811 10.9068 17.4783 11.1518 17.7433 11.2997L24.4291 14.8569L26.8577 13.5569L18.829 9.2711C18.559 9.13267 18.2457 9.10445 17.9553 9.19239C17.6648 9.28033 17.4198 9.47755 17.2719 9.74253ZM35.9721 9.2711L18.829 0.128104C18.6605 0.0438581 18.4746 0 18.2862 0C18.0977 0 17.9119 0.0438581 17.7433 0.128104L0.600192 9.2711C0.418457 9.37089 0.266872 9.51768 0.161288 9.69611C0.0557045 9.87454 0 10.0781 0 10.2854C0 10.4927 0.0557045 10.6962 0.161288 10.8747C0.266872 11.0531 0.418457 11.1999 0.600192 11.2997L4.00024 13.0997V20.2141C3.99809 20.7046 4.15889 21.182 4.45739 21.5713C5.58598 23.0856 9.9289 27.9999 18.2862 27.9999C20.8397 28.0212 23.3697 27.5104 25.7148 26.4999V15.5426L24.4291 14.8569L18.2862 18.1284L5.68598 11.414L3.57166 10.2854L18.2862 2.44242L33.0007 10.2854L30.8863 11.414L26.8577 13.5569L27.4006 13.8426C27.5938 13.9542 27.7521 14.1174 27.8577 14.314C27.9527 14.4791 28.0021 14.6665 28.0006 14.8569V25.2999C29.5792 24.3068 30.9717 23.0448 32.1149 21.5713C32.4134 21.182 32.5742 20.7046 32.5721 20.2141V13.0997L35.9721 11.2997C36.1539 11.1999 36.3055 11.0531 36.411 10.8747C36.5166 10.6962 36.5723 10.4927 36.5723 10.2854C36.5723 10.0781 36.5166 9.87454 36.411 9.69611C36.3055 9.51768 36.1539 9.37089 35.9721 9.2711Z"></path>
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg text-gray-500 font-jost">
                    Harverd University
                  </h4>
                  <h3 className="text-2xl font-semibold font-lexend_deca">
                    MBA in CSE (2015 - 2016)
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-semibold font-lexend_deca py-5">
              Skills
            </h2>
            <div className="flex flex-col gap-10 pt-4">
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold font-lexend_deca">
                    Communication
                  </h3>
                  <p className="text-lg font-jost text-gray-500">90%</p>
                </div>
                <div className="w-full h-3 rounded-full overflow-hidden bg-gray-300">
                  <div className="h-full w-[90%] bg-themeBlue rounded-full"></div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold font-lexend_deca">
                    Communication
                  </h3>
                  <p className="text-lg font-jost text-gray-500">90%</p>
                </div>
                <div className="w-full h-3 rounded-full overflow-hidden bg-gray-300">
                  <div className="h-full w-[90%] bg-themeBlue rounded-full"></div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold font-lexend_deca">
                    Communication
                  </h3>
                  <p className="text-lg font-jost text-gray-500">90%</p>
                </div>
                <div className="w-full h-3 rounded-full overflow-hidden bg-gray-300">
                  <div className="h-full w-[90%] bg-themeBlue rounded-full"></div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold font-lexend_deca">
                    Communication
                  </h3>
                  <p className="text-lg font-jost text-gray-500">90%</p>
                </div>
                <div className="w-full h-3 rounded-full overflow-hidden bg-gray-300">
                  <div className="h-full w-[90%] bg-themeBlue rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutEducation;
