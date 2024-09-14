import React from "react";
import styles from "./styles.module.css";

export interface CardProfesionalPeopleType {
  img: string;
  name: string;
  post: string;
  facebook: string;
  twitter: string;
  linkedin: string;
  instagram: string;
  rout: string;
}

interface CardProfesionalPeopleProps {
  cards: CardProfesionalPeopleType[];
}

export default function CardProfesionalPeople({
  cards,
}: CardProfesionalPeopleProps) {
  return (
    <div className={styles.contentTotalCardsPeople}>
      {cards.map((card, index) => (
        <div className={styles.targetProfesional} key={index}>
          <a className={styles.routeProfesional} href={card.rout}>
            <div className={styles.contentListIcon}>
              <img
                className={styles.imgPeopleProfesional}
                src={card.img}
                alt={`Imagen de ${card.name}`}
              />
              <ul>
                <li>
                  <a
                    href={card.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className={styles.icon}
                      src="/images/logo-facebook.svg"
                      alt="Facebook"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href={card.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className={styles.icon}
                      src="/images/logo-instagram.svg"
                      alt="Instagram"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href={card.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className={styles.icon}
                      src="/images/logo-linkedin.svg"
                      alt="LinkedIn"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href={card.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className={styles.icon}
                      src="/images/logo-twitter.svg"
                      alt="Twitter"
                    />
                  </a>
                </li>
              </ul>
            </div>
            <div className={styles.contentNamePostTarget}>
              <h3>{card.post}</h3>
              <h1>{card.name}</h1>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
}
