import React from "react";
import Home from "./pages/home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import "react-quill/dist/quill.core.css";
import CustomeCursor from "./components/CustomeCursor";
import MobileHeader from "./components/MobileHeader";
import About from "./pages/about/About";
import PortfolioPage from "./pages/Portfolio/PortfolioPage";
import TestimonialPage from "./pages/Testimonial/TestimonialPage";
import ContactPage from "./pages/contact/ContactPage";
import BlogPage from "./pages/blog/BlogPage";
import AdminDashboard from "./admin/AdminDashboard";
import WelcomeLoader from "./components/WelcomeLoader";
import Login from "./components/Login";
import Signup from "./components/Signup";
import VerifyEmail from "./components/VerifyEmail";
import ProtectUserRoute from "./Secure/ProtectUserRoute";
import { useUserAuth } from "./Context/UserAuthProvider";
import Blog from "./pages/blog/blog/Blog";
import ChatBot from "./pages/AI ChatBot/ChatBot";

const App = () => {
  const { isLoading, isUserAuthenticated } = useUserAuth();
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/portfolio"} element={<PortfolioPage />} />
        <Route path={"/testimonial"} element={<TestimonialPage />} />
        <Route path="/blog">
          <Route index element={<Navigate to="/blog/all" replace />} />
          <Route
            path=":categoryName"
            element={
              <ProtectUserRoute
                isLoading={isLoading}
                isUserAuthenticated={isUserAuthenticated}
              >
                <BlogPage />
              </ProtectUserRoute>
            }
          />
        </Route>
        <Route
          path="/blog/:blogSlug/:blogId"
          element={
            <ProtectUserRoute
              isLoading={isLoading}
              isUserAuthenticated={isUserAuthenticated}
            >
              <Blog />
            </ProtectUserRoute>
          }
        />
        <Route
          path="/chat-bot"
          element={
            <ProtectUserRoute
              isLoading={isLoading}
              isUserAuthenticated={isUserAuthenticated}
            >
              <ChatBot />
            </ProtectUserRoute>
          }
        />
        <Route path={"/contact"} element={<ContactPage />} />
        <Route path={"/admin/*"} element={<AdminDashboard />} />
        <Route
          path="/login"
          element={!isUserAuthenticated ? <Login /> : <Navigate to="/" />}
        />
        <Route path="/register" element={<Signup />} />
        <Route path="/register/verify-email/:token" element={<VerifyEmail />} />
        {/* <Route path="/" element={<WelcomeLoader />} /> */}
      </Routes>
    </>
  );
};

export default App;
