import React from "react";
import styles from "./styles.module.css";
import { ProfesionalCards } from "@/types/entities/ProfesionalCards.entien";

interface ProfesionalDetailProps {
  profesional: ProfesionalCards;
}
export default function ProfesionalDetail({
  profesional,
}: ProfesionalDetailProps) {
  return (
    <div className={styles.contentProfesionalDetail}>
      <img className={styles.imagenProfesional} src={profesional.img} alt="" />
      <div className={styles.contentTextProfesionalDetail}>
        <h2>{profesional.name}</h2>
        <p>{profesional.post}</p>

        <h3>Sobre mi</h3>
        <p>{profesional.description}</p>
        <div className={styles.contentSigueme}>
          <h4>Sígueme</h4>
          <div>
            <ul className={styles.listSigeme}>
              <li>
                <a
                  href={profesional.facebook}
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
                  href={profesional.instagram}
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
                  href={profesional.linkedin}
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
                  href={profesional.twitter}
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
        </div>
      </div>
    </div>
  );
}
