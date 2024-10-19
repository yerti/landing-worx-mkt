import React from "react";
import styles from "./styles.module.css";
import { CardsType } from "../../../../types/entities/CardsType";
import Cards from "@/Components/Commons/Cards";
import Title from "@/Components/Commons/Title";
import SubTitle from "@/Components/Commons/SubTitle";

const cardsList: CardsType[] = [
  {
    titleCard: "Adquisión de Clientes",
    icon: "/images/service-two-icon-1.svg",
    img: "/images/service-two-img-3.png",
    route: "/servicio/adquisicion",
  },
  {
    titleCard: "Retención de Clientes",
    icon: "images/service-two-icon-2.svg",
    img: "/images/service-two-img-2.png",
    route: "/servicio/retencion",
  },
  {
    titleCard: "Optimización del Customer Journey",
    icon: "/images/service-two-icon-3.svg",
    img: "/images/service-two-img-3.png",
    route: "/servicio/optimizacion",
  },
  {
    titleCard: "Marketing Digital",
    icon: "/images/service-two-icon-4.svg",
    img: "/images/service-two-img-4.png",
    route: "/servicio/marketing",
  },
];

export default function ServicesSection() {
  return (
    <section className={styles.ContentTotalServicesSection}>
      <div className={styles.contentTitlesServices}>
        <Title nameTitle="Nuestros servicios" />
        <SubTitle nameSubTitle="Conoce más sobre lo que podemos hacer por ti" />
      </div>
      <div>
        <Cards cards={cardsList} />
      </div>
    </section>
  );
}
