import { CardsType } from "@/types/entities/CardsType";
import Link from "next/link";
import React from "react";
import styles from './styles.module.css'

interface CardsProps {
  cards: CardsType[];
}

export default function Cards({ cards }: CardsProps) {
  return (
    <div className={styles.contentCard}>
      {cards.map((card, index) => (
        <div className={styles.cardStyles} key={index}>
          <Link href={card.route}>
            <img src={card.img} alt="" />
            <div className={styles.contentTextCard}>
              <img src={card.icon} alt="" />
              <h4>{card.titleCard}</h4>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
