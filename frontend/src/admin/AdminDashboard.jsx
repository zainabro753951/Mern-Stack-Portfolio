import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import HomeDashboard from "./Pages/HomeDashboard/HomeDashboard";
import Login from "./components/Login";
import AddAbout from "./Pages/addAbout/AddAbout";
import ViewAbout from "./Pages/ViewAbout/ViewAbout";
import AddEducationPgae from "./Pages/addEducation/AddEducationPgae";
import ViewEducationPage from "./Pages/viewEducation/viewEducationPage";
import EditEducation from "./Pages/editEducation/EditEducation";
import AdminSignup from "./components/adminSignup";
import ProtectAdminRoute from "../Secure/ProtectAdminRoute";
import AddBlog from "./Pages/AddBlog/AddBlog";
import ViewBlogs from "./Pages/ViewBlogs/ViewBlogs";
import AddTestimonial from "./Pages/AddTestimonial/AddTestimonial";
import ViewTestmonial from "./Pages/ViewTestmonial/ViewTestmonial";
import AddProject from "./Pages/AddProject/AddProject";
import { adminRoutes } from "./Routes/AdminRoutes.jsx";
import { useAdminAuth } from "../Context/AdminAuthProvider.jsx";

const AdminDashboard = () => {
  const { isAdminAuthenticated, isAuthChecked } = useAdminAuth();

  return (
    <>
      <Routes>
        {adminRoutes.map((route, idx) => (
          <Route
            key={idx}
            path={route.path}
            element={
              <ProtectAdminRoute
                isAdminAuthenticated={isAdminAuthenticated}
                isAuthChecked={isAuthChecked}
              >
                {route.element}
              </ProtectAdminRoute>
            }
          />
        ))}
        <Route
          path="/login"
          element={
            isAdminAuthenticated ? (
              <Navigate to={"/admin"} replace />
            ) : (
              <Login />
            )
          }
        />
        <Route path="/admin-signup/:key" element={<AdminSignup />} />
      </Routes>
    </>
  );
};

export default AdminDashboard;
