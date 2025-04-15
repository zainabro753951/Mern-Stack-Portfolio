import React from "react";
import Hero from "./components/Hero";
import About from "./components/AboutUs";
import Portfolio from "./components/Portfolio";
import Projects from "./components/Projects";
import Testimonial from "../../components/Testimonial";
import HappyClients from "./components/HappyClients";
import Header from "../../components/Header";
import MobileHeader from "../../components/MobileHeader";
import Footer from "../../components/Footer";
import CustomeCursor from "../../components/CustomeCursor";
import { useAboutData } from "../../Context/GetAboutData";
import PageProgressBar from "../../components/PageProgressBar";

const Home = () => {
  const { aboutData, isLoading } = useAboutData();

  return (
    <>
      <PageProgressBar />
      <Header />
      <MobileHeader />
      <Hero content={aboutData} isLoading={isLoading} />
      <About content={aboutData} isLoading={isLoading} />
      <Projects />
      <Portfolio />
      <Testimonial />
      <HappyClients />
      <Footer footerText={"Have a Project?"} text={"Let's Talk"} />
    </>
  );
};

export default Home;
