import PresentationSection from "@/Components/Commons/PresentationSection";
import ServiceDetailSection, {
  Item,
} from "@/Components/Features/ServicePage/ServiceDetailSection";
import React from "react";

export default function MarketingPage() {
  const list: Item[] = [
    {
      title: "Gestión de Redes Sociales: ",
      name: "Administramos y optimizamos tus redes sociales, creando contenido atractivo y estratégico que incrementa tu visibilidad y conecta con tu audiencia.",
    },
    {
      title: "Campañas de Publicidad en Línea: ",
      name: "Diseñamos campañas publicitarias en plataformas clave como Google y redes sociales, enfocadas en generar leads de calidad y maximizar tus conversiones",
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
        title="Marketing Digital"
        parrafo="WorxMKT potencia tu presencia en el mundo digital mediante estrategias personalizadas que aumentan la visibilidad de tu marca y atraen a clientes de alta calidad. Desde la gestión integral de redes sociales hasta la ejecución de campañas publicitarias en línea, garantizamos que tu empresa llegue a la audiencia correcta y convierta leads en clientes."
      />
    </>
  );
}
