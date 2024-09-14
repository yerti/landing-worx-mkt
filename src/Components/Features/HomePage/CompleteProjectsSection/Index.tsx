import DecorativeTitle from "@/Components/Commons/DecorativeTitle";
import React from "react";
import styles from "./styles.module.css";

export default function CompleteProjectsSection() {
  return (
    <section className={styles.contentTotalCompleteProjects}>
      <div className={styles.titleCompleteProjects}>
        <DecorativeTitle span="Complete " nameTitle="Projects" />
      </div>
      <div className={styles.contentImages}>
        <div>
          <div className={styles.contentTwoImages}>
            <img
              className={styles.imagenOne}
              src="https://vibetech-html.vercel.app/assets/images/project/project-two-1.png"
              alt=""
            />
            <img
              className={styles.imagenOne}
              src="https://vibetech-html.vercel.app/assets/images/project/project-two-2.png"
              alt=""
            />
          </div>
          <div>
            <img
              className={styles.imagenTwo}
              src="https://vibetech-html.vercel.app/assets/images/project/project-two-3.png"
              alt=""
            />
          </div>
        </div>
        <div>
          <img
            src="https://vibetech-html.vercel.app/assets/images/project/project-two-4.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
