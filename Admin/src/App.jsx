import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Suspense } from "react";
import WelcomeLoader from "./Components/WelcomeLoader";
import { adminRoutes } from "./admin/Routes/AdminRoutes";
import ProtectAdminRoute from "./Secure/ProtectAdminRoute";
import Login from "./admin/components/Login";
import AdminSignup from "./admin/components/AdminSignup";
import { useAdminAuth } from "./Context/AdminAuthProvider";

const App = () => {
  const { isAdminAuthenticated, isPending } = useAdminAuth();

  return (
    <>
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
                    isPending={isPending}
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
              isAdminAuthenticated ? <Navigate to={"/"} replace /> : <Login />
            }
          />
          <Route path="/admin-signup/:key" element={<AdminSignup />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
