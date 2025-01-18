import React from "react";
import ContactHero from "./components/contactHero";
import ContactInfo from "./components/ContactInfo";
import ContactForm from "./components/ContactForm";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MobileHeader from "../../components/MobileHeader";
import CustomeCursor from "../../components/CustomeCursor";

const ContactPage = () => {
  return (
    <>
      <Header />
      <MobileHeader />
      <CustomeCursor />
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <Footer footerText={"Check Portfolio"} text={"Portfolio"} />
    </>
  );
};

export default ContactPage;
