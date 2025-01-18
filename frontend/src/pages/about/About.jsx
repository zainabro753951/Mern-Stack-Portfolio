import React from "react";
import AboutHero from "./components/AboutHero";
import AboutMe from "./components/AboutMe";
import AboutEducation from "./components/AboutEducation";
import Testimonial from "../../components/Testimonial";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MobileHeader from "../../components/MobileHeader";
import CustomeCursor from "../../components/CustomeCursor";

const About = () => {
  return (
    <>
      <Header />
      <MobileHeader />
      <CustomeCursor />
      <AboutHero />
      <AboutMe />
      <AboutEducation />
      <Testimonial />
      <Footer footerText={"Have a Project?"} text={"Let's Talk"} />
    </>
  );
};

export default About;
