import React from "react";
import styles from "./styles.module.css";
import Title from "@/Components/Commons/Title";
import SubTitle from "@/Components/Commons/SubTitle";
import Paragraph from "@/Components/Commons/Paragraph";
import CardAboutUs, { CardAboutUsType } from "./CardAboutUs";

const cardsList: CardAboutUsType[] = [
  {
    title: "Consultoría Lumina",
    subTitle: "Lorem Ipsum es simplemente ficticio",
    icon: "/images/consulting.svg",
  },
  {
    title: "Ingenieros expertos",
    subTitle: "Lorem Ipsum es simplemente ficticio",
    icon: "/images/expert.svg",
  },
];
export default function SectionAboutUs() {
  return (
    <div className={styles.contentSectionAboutUs}>
      <div className={styles.contentImgAboutUs}>
        <img
          src="/images/history-img-2.png"
          alt=""
        />
      </div>
      <div className={styles.contentTextAboutUs}>
        <div>
          <Title nameTitle="Quiénes somos" />
          <SubTitle nameSubTitle="Descubre a los creadores detrás de <span> WORX MKT</span>" />
          <Paragraph name="Es un hecho establecido desde hace mucho tiempo que un lector se distraerá con el contenido legible de una página cuando observe su diseño." />
          <Paragraph name="Descubre cómo podemos tranformar tu negocio."/>
          
        </div>
        {/* <CardAboutUs cards={cardsList} /> */}
      </div>
    </div>
  );
}
