import PresentationSection from "@/Components/Commons/PresentationSection";
import AboutUsHistorySection from "@/Components/Features/AboutUs/AboutUsHistorySection";
import AboutSection from "@/Components/Features/HomePage/AboutSection";
import OrangeSeciton from "@/Components/Features/HomePage/OrangeSecition";
import OrangeSectionOne from "@/Components/Features/HomePage/OrangeSecition/OrangeSectionOne";
import ProfesionalPeopleSection from "@/Components/Features/HomePage/ProfesionalPeopleSection";
import React from "react";

export default function SobreNosotrosPage() {
  return (
    <>
      <PresentationSection title="Sobre nosotros" rout="/home" nameRout="Inicio" />
      <AboutSection />
      <OrangeSeciton>
        <OrangeSectionOne />
      </OrangeSeciton>
      <AboutUsHistorySection />
      <ProfesionalPeopleSection />
    </>
  );
}
