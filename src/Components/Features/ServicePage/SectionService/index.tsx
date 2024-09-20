import SubTitle from "@/Components/Commons/SubTitle";
import Title from "@/Components/Commons/Title";
import React from "react";
import { CardAboutUsType } from "../../HomePage/SectionAboutUs/CardAboutUs";
import styles from "./style.module.css";
import IconServiceOne from "@/Components/Icons/IconServiceOne";
import IconServiceTwo from "@/Components/Icons/IconServiceTwo";
import IconServiceThree from "@/Components/Icons/IconServiceThree";
import IconServiceFour from "@/Components/Icons/IconServiceFour";
import ArrowIcon from "@/Components/Icons/ArrowIcon";
import Link from "next/link";

const cardsList: CardAboutUsType[] = [
  {
    title: "Adquisión de Clientes",
    subTitle:
      "Descubre cómo atraer a nuevos clientes potenciales a través de campañas diseñadas para captar su atención y convertirlos en fieles consumidores de tu marca.",
    icon: <IconServiceOne />,
    rout: "/servicio/adquisicion",
  },
  {
    title: "Optimización del Customer Journey",
    subTitle:
      "Perfecciona cada etapa del recorrido del cliente con estrategias que mejoran su experiencia desde el primer contacto hasta la conversión final.",
    icon: <IconServiceTwo />,
    rout: "/servicio/optimizacion",
  },
  {
    title: "Marketing Digital",
    subTitle:
      "Fortalece tu presencia en línea con campañas de marketing digital que aumentan tu visibilidad, atraen nuevos clientes y refuerzan tu marca en el mercado.",
    icon: <IconServiceThree />,
    rout: "/servicio/marketing",
  },
  {
    title: "Retención de Clientes",
    subTitle:
      "Mantén a tus clientes comprometidos y satisfechos a largo plazo con cronogramas de fidelización y soluciones personalizadas que garantizas su lealtad.",
    icon: <IconServiceFour />,
    rout: "/servicio/retencion",
  },
];
export default function SectionService() {
  return (
    <section className={styles.contentTotalSectionService}>
      <div className={styles.columOneSectionService}>
        <Title nameTitle="LO MEJOR DEL SERVICIO" />
        <SubTitle nameSubTitle="Impulse tu marca con estrategias Innovadoras" />
      </div>
      <div className={styles.listTargetSectionService}>
        {cardsList.map((card, index) => (
          <>
            <div className={styles.contentTarget} key={index}>
              <div>{card.icon}</div>

              <div className={styles.textTargetAboutUs}>
                <h1>{card.title}</h1>
                <p>{card.subTitle}</p>
              </div>

              {card.rout && (
                <Link className={styles.anclaSectionService} href={card.rout}>
                  Read More
                  <ArrowIcon color="#48534F" />
                </Link>
              )}
            </div>
          </>
        ))}
      </div>
    </section>
  );
}
