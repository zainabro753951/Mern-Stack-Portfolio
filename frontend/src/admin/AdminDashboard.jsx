import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import AdminSignup from "./components/adminSignup";
import ProtectAdminRoute from "../Secure/ProtectAdminRoute";
import { adminRoutes } from "./Routes/AdminRoutes.jsx";
import { useAdminAuth } from "../Context/AdminAuthProvider.jsx";
import { useBlogCommentNotification } from "../Context/GetAllBlogCommentNoti.jsx";

const AdminDashboard = () => {
  const { isAdminAuthenticated, isAuthChecked } = useAdminAuth();
  const { blogCommentNotfi } = useBlogCommentNotification();

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
