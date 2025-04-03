import React, { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import "react-quill/dist/quill.core.css";
import Header from "./components/Header";
import CustomeCursor from "./components/CustomeCursor";
import MobileHeader from "./components/MobileHeader";
import WelcomeLoader from "./components/WelcomeLoader";
import ProtectUserRoute from "./Secure/ProtectUserRoute";
import { useUserAuth } from "./Context/UserAuthProvider";

// Lazy load all page components
const Home = lazy(() => import("./pages/home/Home"));
const About = lazy(() => import("./pages/about/About"));
const PortfolioPage = lazy(() => import("./pages/Portfolio/PortfolioPage"));
const TestimonialPage = lazy(() =>
  import("./pages/Testimonial/TestimonialPage")
);
const ContactPage = lazy(() => import("./pages/contact/ContactPage"));
const BlogPage = lazy(() => import("./pages/blog/BlogPage"));
const AdminDashboard = lazy(() => import("./admin/AdminDashboard"));
const Login = lazy(() => import("./components/Login"));
const Signup = lazy(() => import("./components/Signup"));
const VerifyEmail = lazy(() => import("./components/VerifyEmail"));
const Blog = lazy(() => import("./pages/blog/blog/Blog"));
const ChatBot = lazy(() => import("./pages/AI ChatBot/ChatBot"));

const App = () => {
  const { isLoading, isUserAuthenticated } = useUserAuth();
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  return (
    <>
      <CustomeCursor />
      <Suspense fallback={<WelcomeLoader />}>
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
          <Route
            path="/register/verify-email/:token"
            element={<VerifyEmail />}
          />
        </Routes>
      </Suspense>
      {isLoading && <WelcomeLoader />}
    </>
  );
};

export default App;
