import PresentationSection from "@/Components/Commons/PresentationSection";
import ServiceDetailSection, {
  Item,
} from "@/Components/Features/ServicePage/ServiceDetailSection";
import React from "react";

export default function RetencionPage() {
  const list: Item[] = [
    {
      title: "Programas de Fidelización:",
      subItems: [
        {
          name: "Creación de programas de lealtad que recompensan a los clientes frecuentes, incentivando compras repetidas.",
        },
        {
          name: "Implementación de sistemas de puntos, descuentos exclusivos y regalos para fortalecer la relación con tu marca.",
        },
      ],
    },
    {
      title: "Encuestas de Satisfacción:",
      subItems: [
        {
          name: "Diseño y distribución de encuestas para capturar el feedback de los clientes y mejorar continuamente el servicio.",
        },
        {
          name: "Identificación de áreas de mejora para aumentar la satisfacción y demostrar que valoras la opinión de tus clientes.",
        },
      ],
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
        title="Retención de Clientes"
        parrafo="WorxMKT se enfoca en mantener a tus clientes satisfechos y leales, asegurando relaciones duraderas y un mayor retorno de inversión. Nuestras estrategias de retención están diseñadas para maximizar el valor de cada cliente a lo largo del tiempo, utilizando incentivos y retroalimentación para reforzar su conexión con tu marca."
      />
    </>
  );
}
