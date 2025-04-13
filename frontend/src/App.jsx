import React, { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import "react-quill/dist/quill.core.css";
import CustomeCursor from "./components/CustomeCursor";
import WelcomeLoader from "./components/WelcomeLoader";
import { useUserAuth } from "./Context/UserAuthProvider";

// Lazy load all page components
const Home = lazy(() => import("./pages/home/Home"));
const About = lazy(() => import("./pages/about/About"));
const PortfolioPage = lazy(() => import("./pages/Portfolio/PortfolioPage"));
const TestimonialPage = lazy(() =>
  import("./pages/Testimonial/TestimonialPage")
);
const ContactPage = lazy(() => import("./pages/contact/ContactPage"));

const App = () => {
  return (
    <>
      <CustomeCursor />
      <Suspense fallback={<WelcomeLoader />}>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/about"} element={<About />} />
          <Route path={"/portfolio"} element={<PortfolioPage />} />
          <Route path={"/testimonial"} element={<TestimonialPage />} />
          <Route path={"/contact"} element={<ContactPage />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
