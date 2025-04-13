import React from "react";
import ContactHero from "./components/ContactHero";
import ContactInfo from "./components/ContactInfo";
import ContactForm from "./components/ContactForm";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MobileHeader from "../../components/MobileHeader";

const ContactPage = () => {
  return (
    <>
      <Header />
      <MobileHeader />
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <Footer footerText={"Check Portfolio"} text={"Portfolio"} />
    </>
  );
};

export default ContactPage;
