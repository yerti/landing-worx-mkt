import React from "react";
import styles from "./styles.module.css";
import Paragraph from "@/Components/Commons/Paragraph";
import Image from "next/image";

export interface CardAboutUsType {
  icon: string | React.ReactNode;
  title: string;
  subTitle: string;
  rout?: string;
}

interface CardsAboutUsProps {
  cards: CardAboutUsType[];
}
export default function CardAboutUs({ cards }: CardsAboutUsProps) {
  return (
    <div className={styles.contentCardsAboutUs}>
      {cards.map((card, index) => (
        <div className={styles.contentTarget} key={index}>
          <div className={styles.contentIconAboutUs}>
            <Image
              src={String(card.icon)}
              alt=""
              width={40} 
              height={40}
            />
          </div>
          <div className={styles.textTargetAboutUs}>
            <h1>{card.title}</h1>
            <Paragraph name={card.subTitle} />
          </div>
        </div>
      ))}
    </div>
  );
}
