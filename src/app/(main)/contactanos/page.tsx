import PresentationSection from "@/Components/Commons/PresentationSection";
import ContactUsSection from "@/Components/Features/ContactUs/ContactUsSection";
import React from "react";

export default function ContactanosPage() {
  return (
    <>
      <PresentationSection title="Contáctanos" rout="/home" nameRout="Inicio" />
      <ContactUsSection />
    </>
  );
}
