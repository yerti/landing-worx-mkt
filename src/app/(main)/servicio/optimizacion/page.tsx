import PresentationSection from "@/Components/Commons/PresentationSection";
import ServiceDetailSection, { Item } from "@/Components/Features/ServicePage/ServiceDetailSection";
import React from "react";

export default function OptimizacionPage() {
  const list: Item[] = [
    {
      title: "Ofertas de Pruebas Gratuitas:",
      name: " Implementamos campañas que permiten a los clientes potenciales experimentar tus servicios sin costo, generando confianza y aumentando las tasas de conversión.",
    },
    {
      title: "Descuentos por Primer Mes:",
      name: "Creamos promociones que ofrecen descuentos significativos en el primer mes, incentivando la inscripción de nuevos clientes y facilitando su transición a clientes de largo plazo.",
    },
  ];
  return (
    <>
      <PresentationSection
        title="Servicio Detallado"
        nameRout="Home"
        rout="/home"
      />
      <ServiceDetailSection
        list={list}
        title="Optimización del Customer Journey"
        parrafo="WorxMKT se especializa en atraer y convertir nuevos clientes para tu negocio, utilizando estrategias personalizadas que destacan por su efectividad. Nuestro enfoque se basa en ofrecer incentivos iniciales irresistibles que aumentan la probabilidad de conversión y establecen relaciones duraderas desde el primer contacto."
      />
    </>
  );
}
