import SubTitle from "@/Components/Commons/SubTitle";
import Title from "@/Components/Commons/Title";
import React from "react";
import styles from "./style.module.css";
import { CardAboutUsType } from "../../HomePage/SectionAboutUs/CardAboutUs";
import Link from "next/link";

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
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected humour
        </p>
        <div>
          {cardsList.map((card, index) => (
            <div>
              <Link className={styles.anclaCards} href="">
                <div className={styles.contentTarget} key={index}>
                  <div className={styles.contentIconAboutUs}>
                    <img src={card.icon} alt="" />
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
