import React from "react";
import Hero from "./components/Hero";
import About from "./components/AboutUs";
import Portfolio from "./components/Portfolio";
import Projects from "./components/Projects";
import Testimonial from "../../components/Testimonial";
import HappyClients from "./components/HappyClients";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MobileHeader from "../../components/MobileHeader";
import CustomeCursor from "../../components/CustomeCursor";
import { useAdminAuth } from "../../Context/AdminAuthProvider";
import ChatbotButton from "../../components/ChatbotButton";
import { GetAboutData } from "../../Context/GetAboutData";

const Home = () => {
  const { isAdminAuthenticated } = useAdminAuth();
  console.log(isAdminAuthenticated);

  const { aboutData } = GetAboutData();

  return (
    <>
      <Header />
      <MobileHeader />
      <CustomeCursor />
      <ChatbotButton />
      <Hero content={aboutData} />
      <About />
      <Portfolio />
      <Projects />
      <Testimonial />
      <HappyClients />
      <Footer footerText={"Have a Project?"} text={"Let's Talk"} />
    </>
  );
};

export default Home;
