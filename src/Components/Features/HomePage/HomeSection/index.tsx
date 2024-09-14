import React from "react";
import styles from "./styles.module.css";
import Button from "../../../Commons/Button/index";

export default function HomeSections() {
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
            <Button color="#fff" nameTile="Agenda tu cita ¡Aquí!" variant="button_orange" />{" "}
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
