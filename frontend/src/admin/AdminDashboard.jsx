import React, { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ProtectAdminRoute from "../Secure/ProtectAdminRoute";
import { adminRoutes } from "./Routes/AdminRoutes.jsx";
import { useAdminAuth } from "../Context/AdminAuthProvider.jsx";
import { useBlogCommentNotification } from "../Context/GetAllBlogCommentNoti.jsx";
import WelcomeLoader from "../components/WelcomeLoader.jsx";

// Lazy load components
const Login = lazy(() => import("./components/Login"));
const AdminSignup = lazy(() => import("./components/AdminSignup"));

const AdminDashboard = () => {
  const { isAdminAuthenticated, isAuthChecked } = useAdminAuth();
  const { blogCommentNotfi } = useBlogCommentNotification();

  return (
    <Suspense fallback={<WelcomeLoader />}>
      <Routes>
        {adminRoutes.map((route, idx) => {
          return (
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
          );
        })}
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
    </Suspense>
  );
};

export default AdminDashboard;
