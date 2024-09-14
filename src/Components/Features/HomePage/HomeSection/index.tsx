'use client'
import React from "react";
import styles from "./styles.module.css";
import Button from "../../../Commons/Button/index";
import { useRouter } from "next/navigation";


export default function HomeSections() {

  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push(`/contactanos`);
  };

  return (
    <section className={styles.contentHomeSection}>
      <div className={styles.contentInformationHomeSection}>
        <div className={styles.targetInformationHome}>
          <div className={styles.titleHome}>
            <h1>
              Bienvenidos a <br /> <span>WORX MKT</span>
            </h1>
          </div>
          <div className={styles.textAndButtonHome}>
            <Button color="#fff" nameTile="Agenda tu cita ¡Aquí!" variant="button_orange" onClick={handleClick} />
            <p>
              Somos el aliado estratégico en marketing digital que tu empresa
              necesita. Con soluciones innovadoras y personalizadas, estamos
              aquí para ayudarte a crecer.
            </p>
          </div>
        </div>
        <div>
          <img
            className={styles.imgHome}
            src="/images/hero-img-2.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
