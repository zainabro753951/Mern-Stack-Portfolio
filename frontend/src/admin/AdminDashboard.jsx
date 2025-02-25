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
import { useAdminAuth } from "../Context/AdminAuthProvider";
import ProtectAdminRoute from "../Secure/ProtectAdminRoute";

const AdminDashboard = () => {
  const { isAdminAuthenticated, isAuthChecked } = useAdminAuth();
  console.log(isAdminAuthenticated);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectAdminRoute
              isAdminAuthenticated={isAdminAuthenticated}
              isAuthChecked={isAuthChecked}
            >
              <HomeDashboard />
            </ProtectAdminRoute>
          }
        />
        <Route
          path="/addAbout"
          element={
            <ProtectAdminRoute
              isAdminAuthenticated={isAdminAuthenticated}
              isAuthChecked={isAuthChecked}
            >
              <AddAbout />
            </ProtectAdminRoute>
          }
        />
        <Route
          path="/viewAbout"
          element={
            <ProtectAdminRoute
              isAdminAuthenticated={isAdminAuthenticated}
              isAuthChecked={isAuthChecked}
            >
              <ViewAbout />
            </ProtectAdminRoute>
          }
        />
        <Route
          path="/addEducation"
          element={
            <ProtectAdminRoute
              isAdminAuthenticated={isAdminAuthenticated}
              isAuthChecked={isAuthChecked}
            >
              <AddEducationPgae />
            </ProtectAdminRoute>
          }
        />
        <Route
          path="/viewEducation"
          element={
            <ProtectAdminRoute
              isAdminAuthenticated={isAdminAuthenticated}
              isAuthChecked={isAuthChecked}
            >
              <ViewEducationPage />
            </ProtectAdminRoute>
          }
        />
        <Route
          path="/editEducation/:id"
          element={
            <ProtectAdminRoute
              isAdminAuthenticated={isAdminAuthenticated}
              isAuthChecked={isAuthChecked}
            >
              <EditEducation />
            </ProtectAdminRoute>
          }
        />
        <Route
          path="/editEducation/:id"
          element={
            <ProtectAdminRoute
              isAdminAuthenticated={isAdminAuthenticated}
              isAuthChecked={isAuthChecked}
            >
              <EditEducation />
            </ProtectAdminRoute>
          }
        />
        <Route
          path="/login"
          element={
            isAdminAuthenticated ? <Navigate to={"/admin"} /> : <Login />
          }
        />

        <Route path="/admin-signup/:key" element={<AdminSignup />} />
      </Routes>
    </>
  );
};

export default AdminDashboard;
