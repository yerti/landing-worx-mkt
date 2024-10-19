import SubTitle from "@/Components/Commons/SubTitle";
import Title from "@/Components/Commons/Title";
import React from "react";
import styles from "./style.module.css";
import { CardAboutUsType } from "../../HomePage/SectionAboutUs/CardAboutUs";
import Link from "next/link";
import Image from "next/image";

const cardsList: CardAboutUsType[] = [
  {
    title: "Visión",
    subTitle:
      "Ser el aliado estratégico líder en marketing digital, reconocido por nuestras soluciones innovadoras y nuestra capacidad para transformar y empoderar a pequeñas y medianas empresas, creando un impacto duradero en su crecimiento y éxito.",
    icon: "/images/consulting.svg",
  },
  {
    title: "Misión",
    subTitle:
      "En WorxMKT, nos dedicamos a impulsar el éxito de pequeñas y medianas empresas a través de estrategias de marketing digital personalizadas y creativas. Nuestra misión es ofrecer soluciones innovadoras que no solo aumenten la visibilidad de nuestros clientes, sino que también generen experiencias significativas y memorables, conectando a las marcas con sus audiencias de manera efectiva.",
    icon: "/images/expert.svg",
  },
];

export default function AboutUsHistorySection() {
  return (
    <section className={styles.contentTotalAboutHistorySection}>
      <img
        className={styles.imagesAboutHistory}
        src="/images/history-img-1.png"
        alt=""
      />

      <div className={styles.contentColumnTwoHistorySectio}>
        <Title nameTitle="QUIÉNES SOMOS" />
        <SubTitle nameSubTitle="Descubre a los creadores detrás de  <span>WORX MKT</span>" />
        <p>
          Apasionados por el marketing digital, nos enfocamos en llevar a los
          PYMEs hacia el éxito con estrategias innovadoras y resultados
          tangibles.
        </p>
        <p>Descubre cómo podemos tranformar tu negocio.</p>
        <div>
          {cardsList.map((card, index) => (
            <div key={index}>
              <Link className={styles.anclaCards} href="">
                <div className={styles.contentTarget}>
                  <div className={styles.contentIconAboutUs}>
                    <Image
                      src={String(card.icon)}
                      alt=""
                      width={40}
                      height={40}
                    />
                  </div>
                  <div className={styles.textTargetAboutUs}>
                    <p>{card.title}</p>
                    <h1>{card.subTitle}</h1>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
