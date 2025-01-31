import React from "react";
import DashboardLeft from "../../components/DashboardLeft";
import AdminHeader from "../../components/AdminHeader";
import AddAboutForm from "./components/AddAboutForm";

const AddAbout = () => {
  return (
    <div className="h-screen w-full overflow-hidden flex p-2 gap-2 bg-gray-200">
      <DashboardLeft />
      <div
        id="dashboardRight"
        className="w-[75%] h-full bg-[#F9FBFF] rounded-[50px] overflow-auto"
      >
        <AdminHeader />
        <div className="px-5">
          <h1 className="text-3xl font-semibold font-lexend_deca pb-3">
            Add About
          </h1>
          <p className="text-lg font-jost text-gray-500">
            On this page, you can add detailed information to introduce yourself
            or provide relevant details about the organization. Begin by
            entering a headline that best represents the purpose or main idea.
            Add your contact details, including the phone number, to make it
            easy for others to reach out. You can also provide a short
            description in the 'About' section to explain who you are, your
            mission, or your business. In the 'Location' field, specify the
            address or place associated with the project or individual. You can
            share your hobbies, personal interests, and passions, along with
            uploading an image to give it a personal touch. Lastly, include your
            educational background to give viewers an insight into your
            qualifications and expertise.
          </p>
        </div>
        <AddAboutForm />
      </div>
    </div>
  );
};

export default AddAbout;
