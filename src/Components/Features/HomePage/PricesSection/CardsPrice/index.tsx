import React from "react";
import styles from "./styles.module.css";

export interface CardsPriceType {
  name: string;
  description: string;
  amount: number;
  characteristics: CharacteristicsType[];
}

interface CharacteristicsType {
  name: string;
}

interface CardsPriceProps {
  cardsList: CardsPriceType[];
}
export default function CardsPrice({cardsList}: CardsPriceProps) {
  return (
    <div className={styles.contentTotalCards}>
      {cardsList.map((card, index) => (
        <div key={index} className={`${styles.contentCradPrice}`}>
          <div className={styles.titleCardPrice}>
            <h1>{card.name}</h1>
            <p>{card.description}</p>
          </div>
          <div
            className={`${styles.contenPriceNumber} ${
              index % 2 === 0 ? styles.blackBackground : styles.orangeBackground
            }`}
          >
            <h3>
              <span>${card.amount}</span> /month
            </h3>
          </div>
          <div className={styles.descriptionPrice}>
            <ul>
              {card.characteristics.map((characteristic, i) => (
                <li key={i}>
                  <div className={styles.imgCheckPrice}>
                    <img src="/images/checkmark-outline.svg" alt="" />
                  </div>{" "}
                  {characteristic.name}
                </li>
              ))}
            </ul>
            <button className={styles.buttonPrice}>Learn More </button>
          </div>
        </div>
      ))}
    </div>
  );
}
