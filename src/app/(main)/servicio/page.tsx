import PresentationSection from "@/Components/Commons/PresentationSection";
import PricesSection from "@/Components/Features/HomePage/PricesSection";
import SectionService from "@/Components/Features/ServicePage/SectionService";
import React from "react";

export default function Serviciospage() {
  return (
    <>
      <PresentationSection title="Servicio" nameRout="Inicio" rout="/home" />
      <SectionService />
      {/* <PricesSection /> */}
    </>
  );
}
